# Multi-tenancy

## Conceito

Cada empresa contratante é um Tenant.

Todo recurso de negócio deve possuir contexto de tenant quando aplicável.

```text
Tenant A
 ├── Customers
 ├── Vehicles
 └── Devices

Tenant B
 ├── Customers
 ├── Vehicles
 └── Devices
```

## Objetivo

Garantir isolamento lógico dos dados e isolamento operacional dos ambientes de tracking.

## Regra

Uma requisição autenticada em nome de um tenant nunca deve conseguir consultar ou alterar recursos pertencentes a outro tenant.
