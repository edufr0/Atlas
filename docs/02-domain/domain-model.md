# Modelo de Domínio

## Visão

O domínio da ATLAS é dividido entre operação SaaS, operação de rastreamento, dispositivos e financeiro.

```text
TENANT
 │
 ├── USERS
 ├── CUSTOMERS
 │      │
 │      └── CUSTOMER_ACCOUNT
 │
 ├── SUBSCRIPTIONS
 │      │
 │      └── VEHICLES
 │              │
 │              └── DEVICE_ASSIGNMENTS
 │                         │
 │                         └── DEVICES
 │                                ├── DEVICE_MODEL
 │                                ├── PROTOCOL
 │                                └── SIM_CARD
 │
 ├── BILLING
 ├── TECHNICIANS
 ├── INSTALLATIONS
 ├── MAINTENANCE
 ├── NOTIFICATIONS
 ├── AUDIT_LOG
 └── BRANDING
```

## Princípio

O cliente, o serviço, o veículo, o dispositivo e o SIM são conceitos distintos.

Essa separação permite transferências, substituições e histórico sem destruir o passado operacional.
