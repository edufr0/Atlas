# Protocolos

Protocolos são abstraídos da camada de negócio.

A aplicação deve trabalhar com capacidades e comandos de alto nível, enquanto adapters/integradores traduzem essas ações para o protocolo necessário.

Exemplo:

```text
BLOCK
  ↓
Device Adapter
  ↓
Comando específico do dispositivo/protocolo
```

Novos protocolos devem ser adicionáveis sem alterar o domínio principal.
