# Arquitetura — Visão Geral

## Objetivo

A arquitetura da ATLAS deve separar responsabilidades de negócio, tracking, infraestrutura e interfaces.

```text
                         ATLAS
                           │
              ┌────────────┴────────────┐
              │                         │
        CONTROL PLANE              TRACKING PLANE
              │                         │
        API / Workers                Traccar
        PostgreSQL                   Devices
        Billing                     Positions
        Tenants                      Events
        Customers
              │
       ┌──────┴──────┐
       │             │
      Web          Mobile
```

## Princípios

- separação de responsabilidades;
- isolamento por tenant;
- infraestrutura observável;
- APIs centralizadas;
- processamento assíncrono quando apropriado;
- auditoria de ações críticas;
- suporte a múltiplos dispositivos.
