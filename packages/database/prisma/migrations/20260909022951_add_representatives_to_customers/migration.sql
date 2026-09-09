-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'REPRESENTATIVE';

-- DropIndex
DROP INDEX "Branding_tenantId_key";

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "representativeId" UUID;

-- CreateIndex
CREATE INDEX "Branding_tenantId_idx" ON "Branding"("tenantId");

-- CreateIndex
CREATE INDEX "Customer_representativeId_idx" ON "Customer"("representativeId");

-- CreateIndex
CREATE INDEX "Customer_tenantId_representativeId_idx" ON "Customer"("tenantId", "representativeId");

-- CreateIndex
CREATE INDEX "User_tenantId_role_idx" ON "User"("tenantId", "role");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_representativeId_fkey" FOREIGN KEY ("representativeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
