# ADR-002 — Infraestrutura Dedicada por Tenant

**Status:** Accepted

## Contexto

Uma falha no ambiente de uma empresa não deve comprometer as demais.

## Decisão

Cada tenant poderá possuir um ambiente de tracking dedicado, incluindo uma instância dedicada do Traccar.

## Consequências

### Positivas

- isolamento;
- menor blast radius;
- manutenção individual;
- configuração específica.

### Negativas

- maior custo;
- maior complexidade operacional;
- necessidade de automação de provisionamento, atualização, backup e monitoramento.
