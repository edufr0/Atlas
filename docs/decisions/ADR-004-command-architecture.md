# ADR-004 — Arquitetura de Comandos

**Status:** Accepted

## Contexto

Clientes e operadores precisam enviar comandos aos rastreadores, especialmente bloqueio de emergência.

## Decisão

Comandos serão solicitados à ATLAS API e processados por um serviço de comandos, que validará autorização, capacidade do dispositivo e registrará auditoria.

```text
Cliente / Operador
       ↓
ATLAS API
       ↓
Authorization
       ↓
Command Service
       ↓
Adapter / Traccar
       ↓
Device
```

## Consequências

- comandos centralizados;
- auditoria;
- suporte a múltiplos dispositivos;
- menor acoplamento da interface com protocolos.
