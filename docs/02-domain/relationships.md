# Relacionamentos do Domínio

```text
Tenant 1 ─── N User
Tenant 1 ─── N Customer
Customer 1 ─── 1 CustomerAccount
Customer 1 ─── N Subscription
Subscription 1 ─── N Vehicle
Vehicle 1 ─── N DeviceAssignment
Device 1 ─── N DeviceAssignment
Device N ─── 1 DeviceModel
Device N ─── 1 SIMCard (conforme período/atribuição)
Vehicle 1 ─── N Position
Vehicle 1 ─── N Event
Vehicle 1 ─── N Command
Subscription 1 ─── N Invoice
Invoice 1 ─── N Payment
Vehicle 1 ─── N Installation
Vehicle 1 ─── N Maintenance
Tenant 1 ─── 1 Branding
Tenant 1 ─── N AuditLog
```

## Regra central

Associações históricas devem ser modeladas explicitamente quando uma relação puder mudar ao longo do tempo.

O exemplo principal é `DeviceAssignment`.
