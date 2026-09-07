# Provisionamento

O provisionamento deve utilizar receitas configuráveis.

Exemplo conceitual:

```text
J16
 ↓
APN
 ↓
Servidor
 ↓
Porta
 ↓
Parâmetros
 ↓
Teste
 ↓
Ativo
```

Uma receita pode conter comandos, parâmetros, tentativas, timeouts e respostas esperadas.

Comandos específicos não devem ficar espalhados pelo código de negócio.
