# Pagamentos

A plataforma deverá suportar inicialmente cobrança por PIX.

Fluxo:

```text
Invoice
 ↓
Payment Request
 ↓
PIX
 ↓
Cliente paga
 ↓
Gateway confirma
 ↓
Payment = PAID
 ↓
Subscription permanece/volta a ACTIVE
```

A integração com provedores específicos será definida posteriormente.
