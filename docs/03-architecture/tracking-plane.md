# Tracking Plane

O Tracking Plane concentra a comunicação com os rastreadores e o processamento de dados de rastreamento.

## Fluxo

```text
Rastreador
    ↓
Traccar
    ↓
Posições / Eventos
    ↓
Integração ATLAS
    ↓
Serviços
    ↓
Aplicativos
```

O Traccar será tratado como engine de tracking, enquanto regras de negócio, identidade, billing, white label e operação permanecem na ATLAS.

## Comandos

```text
App / Web
   ↓
ATLAS API
   ↓
Command Service
   ↓
Traccar / canal apropriado
   ↓
Rastreador
```
