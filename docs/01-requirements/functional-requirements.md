# Requisitos Funcionais

**Versão:** 0.1.0

## Clientes e usuários

- **RF-001** — O sistema deve permitir cadastrar clientes.
- **RF-002** — O sistema deve permitir editar e consultar clientes.
- **RF-003** — O sistema deve permitir ativar, suspender e encerrar clientes.
- **RF-004** — O sistema deve criar uma conta de acesso para o cliente final.
- **RF-005** — O cliente deve possuir inicialmente uma única conta de acesso.
- **RF-006** — O sistema deve permitir cadastrar usuários internos da empresa.
- **RF-007** — O sistema deve permitir definir permissões para usuários internos.

## Veículos

- **RF-010** — O sistema deve permitir cadastrar veículos.
- **RF-011** — O sistema deve permitir associar veículos a clientes/serviços.
- **RF-012** — O sistema deve permitir consultar o histórico do veículo.
- **RF-013** — O sistema deve permitir transferir um rastreador entre veículos preservando histórico.

## Dispositivos

- **RF-020** — O sistema deve permitir cadastrar rastreadores.
- **RF-021** — O sistema deve armazenar IMEI e informações técnicas.
- **RF-022** — O sistema deve permitir cadastrar modelos de rastreadores.
- **RF-023** — O sistema deve permitir cadastrar protocolos.
- **RF-024** — O sistema deve permitir associar SIM cards a dispositivos.
- **RF-025** — O sistema deve manter histórico de associação entre dispositivo, SIM e veículo.
- **RF-026** — O sistema deve permitir configurar dispositivos por receitas de provisionamento.

## Rastreamento

- **RF-030** — O sistema deve exibir posição atual do veículo.
- **RF-031** — O sistema deve permitir consultar histórico de posições.
- **RF-032** — O sistema deve receber eventos do tracking plane.
- **RF-033** — O sistema deve apresentar status de comunicação do dispositivo.

## Comandos

- **RF-040** — O sistema deve listar comandos suportados pelo dispositivo.
- **RF-041** — O cliente autorizado deve poder solicitar bloqueio do veículo.
- **RF-042** — O cliente autorizado deve poder solicitar desbloqueio quando permitido.
- **RF-043** — Um operador autorizado deve poder bloquear o veículo em nome do cliente.
- **RF-044** — O sistema deve registrar o canal e o solicitante do comando.
- **RF-045** — O sistema deve registrar o resultado do comando.
- **RF-046** — O sistema deve impedir comandos não suportados pelo dispositivo.
- **RF-047** — O sistema deve permitir políticas de autorização para comandos críticos.

## Notificações

- **RF-050** — O sistema deve enviar notificações de eventos.
- **RF-051** — O sistema deve enviar notificações push.
- **RF-052** — O sistema deve permitir notificações relacionadas a cobrança.
- **RF-053** — O sistema deve registrar o estado de entrega das notificações.

## Billing

- **RF-060** — O sistema deve permitir cadastrar planos e preços.
- **RF-061** — O sistema deve gerar cobranças.
- **RF-062** — O sistema deve registrar pagamentos.
- **RF-063** — O sistema deve permitir cobrança por PIX.
- **RF-064** — O sistema deve enviar lembretes de vencimento.
- **RF-065** — O sistema deve controlar inadimplência.
- **RF-066** — O sistema deve permitir configurar período de tolerância.
- **RF-067** — O sistema deve suspender serviços conforme a política configurada.
- **RF-068** — O sistema deve permitir reativação após regularização.

## Operação

- **RF-070** — O sistema deve registrar instalações.
- **RF-071** — O sistema deve registrar manutenções.
- **RF-072** — O sistema deve permitir consulta de estoque de SIM cards.
- **RF-073** — O sistema deve apresentar indicadores operacionais.
- **RF-074** — O sistema deve registrar auditoria de operações críticas.

## White label

- **RF-080** — O sistema deve permitir configurar identidade visual do tenant.
- **RF-081** — O sistema deve aplicar branding ao ambiente do tenant.
- **RF-082** — O sistema deve isolar dados entre tenants.

## Infraestrutura

- **RF-090** — O sistema deve manter associação entre tenant e ambiente de tracking.
- **RF-091** — O sistema deve permitir provisionar ambientes de tracking.
- **RF-092** — O sistema deve monitorar a saúde dos ambientes provisionados.
