# Comandos

## Fluxo

```text
Solicitante
    ↓
ATLAS API
    ↓
Autorização
    ↓
Validação do dispositivo
    ↓
Command Service
    ↓
Adapter / Tracking Engine
    ↓
Rastreador
    ↓
Resposta
    ↓
Auditoria
```

## Comandos iniciais

- BLOCK
- UNBLOCK
- REQUEST_POSITION

A lista real depende das capacidades do equipamento.

## Bloqueio

Pode ser solicitado por:

- cliente pelo aplicativo;
- operador autorizado;
- outros canais autorizados no futuro.

## Atendimento por telefone

Quando o cliente perder o celular ou não puder utilizar o aplicativo, um operador poderá validar sua identidade e executar o bloqueio em seu nome.

## Auditoria

Todo comando deve registrar:

- solicitante;
- tipo de solicitante;
- canal;
- veículo;
- dispositivo;
- comando;
- horário;
- estado;
- resposta;
- resultado.
