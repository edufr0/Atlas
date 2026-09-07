# ADR-005 — Traccar como Tracking Engine

**Status:** Accepted

## Contexto

A ATLAS precisa suportar comunicação com rastreadores sem implementar do zero todos os protocolos de dispositivos.

## Decisão

O Traccar será utilizado como engine de tracking.

A ATLAS permanecerá responsável pelo domínio de negócio, identidade, billing, white label, operação e experiência do usuário.

## Consequências

### Positivas

- aproveitamento de protocolos existentes;
- redução do esforço inicial;
- separação entre tracking e negócio.

### Negativas

- dependência de uma tecnologia externa;
- necessidade de integração e monitoramento;
- necessidade de abstrair detalhes do Traccar do restante do produto.
