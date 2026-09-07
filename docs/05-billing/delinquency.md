# Inadimplência

A política será configurável por tenant.

Fluxo de referência:

```text
DUE
 ↓
OVERDUE
 ↓
NOTIFICATIONS
 ↓
GRACE PERIOD
 ↓
SUSPENDED
```

A Protecar utiliza como referência aproximadamente 30 dias de tolerância antes da desativação do rastreamento.

Esse número não deve ser hardcoded.
