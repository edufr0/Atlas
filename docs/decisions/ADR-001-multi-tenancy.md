# ADR-001 — Multi-tenancy

**Status:** Accepted

## Contexto

A ATLAS atenderá múltiplas empresas de rastreamento.

## Decisão

Cada empresa será representada por um Tenant e os dados de negócio serão isolados por tenant.

## Consequências

### Positivas

- isolamento;
- modelo SaaS;
- autorização clara;
- possibilidade de escalabilidade.

### Negativas

- necessidade de validação rigorosa de tenant em APIs;
- maior complexidade de autorização.
