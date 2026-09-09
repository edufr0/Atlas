-- Add tenantId temporarily as nullable
ALTER TABLE "CustomerAccount"
ADD COLUMN "tenantId" UUID;

-- Populate tenantId using the tenantId of the related customer
UPDATE "CustomerAccount" AS account
SET "tenantId" = customer."tenantId"
FROM "Customer" AS customer
WHERE account."customerId" = customer."id";

-- Safety check: migration will fail if any account could not be associated with a tenant
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM "CustomerAccount"
    WHERE "tenantId" IS NULL
  ) THEN
    RAISE EXCEPTION 'Could not populate tenantId for all CustomerAccount records';
  END IF;
END $$;

-- Make tenantId required
ALTER TABLE "CustomerAccount"
ALTER COLUMN "tenantId" SET NOT NULL;

-- Add foreign key
ALTER TABLE "CustomerAccount"
ADD CONSTRAINT "CustomerAccount_tenantId_fkey"
FOREIGN KEY ("tenantId")
REFERENCES "Tenant"("id")
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add indexes
CREATE INDEX "CustomerAccount_tenantId_idx"
ON "CustomerAccount"("tenantId");

CREATE INDEX "CustomerAccount_tenantId_status_idx"
ON "CustomerAccount"("tenantId", "status");

-- Add unique constraint for email inside each tenant
CREATE UNIQUE INDEX "CustomerAccount_tenantId_email_key"
ON "CustomerAccount"("tenantId", "email");
