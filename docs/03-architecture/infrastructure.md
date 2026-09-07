# Infraestrutura

## Estratégia inicial

Cada empresa poderá possuir um ambiente de tracking dedicado, hospedado em infraestrutura própria da ATLAS.

Exemplo:

```text
ATLAS Control Plane
        │
   ┌────┼────┐
   │    │    │
  VPS  VPS  VPS
   │    │    │
 Traccar Traccar Traccar
```

## Benefícios

- isolamento;
- menor blast radius;
- manutenção individual;
- possibilidade de configurações específicas;
- melhor previsibilidade operacional.

## Desafios

- custo maior;
- provisionamento;
- atualizações;
- monitoramento;
- backups;
- gestão de credenciais.

A automação de provisionamento será uma prioridade arquitetural.
