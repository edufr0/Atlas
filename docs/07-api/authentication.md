# Autenticação

A ATLAS terá diferentes tipos de identidade:

- usuários internos do tenant;
- contas de clientes finais;
- integrações de serviço.

A autorização deve considerar:

```text
Identidade
 ↓
Tenant
 ↓
Recurso
 ↓
Ação
```

A autenticação e autorização detalhadas serão especificadas antes da implementação definitiva.
