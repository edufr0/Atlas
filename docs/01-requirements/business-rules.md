# Regras de Negócio

**Versão:** 0.1.0

- **RN-001** — Cada empresa de rastreamento representa um Tenant.
- **RN-002** — Dados de tenants devem ser logicamente isolados.
- **RN-003** — Um cliente final possui inicialmente uma única conta de acesso.
- **RN-004** — O compartilhamento dessa conta por pessoas da mesma família não será tratado como múltiplos usuários no MVP.
- **RN-005** — Um cliente pode possuir múltiplos veículos/serviços.
- **RN-006** — Um rastreador não pertence permanentemente a um veículo.
- **RN-007** — A transferência de rastreador entre veículos deve preservar o histórico.
- **RN-008** — SIM cards devem possuir histórico de associação.
- **RN-009** — Comandos disponíveis dependem das capacidades do dispositivo.
- **RN-010** — Cliente e operador autorizado podem solicitar bloqueio.
- **RN-011** — Operador pode executar bloqueio em nome do cliente após validação operacional.
- **RN-012** — Todo comando crítico deve registrar solicitante, canal, veículo, dispositivo, data, estado e resultado.
- **RN-013** — O período de tolerância de inadimplência deve ser configurável por empresa.
- **RN-014** — Suspensão não deve apagar imediatamente dados históricos.
- **RN-015** — Cancelamento deve preservar histórico operacional por período definido pela política de retenção.
- **RN-016** — O billing da ATLAS é separado do billing da empresa de rastreamento.
- **RN-017** — A empresa de rastreamento define seus preços para clientes finais.
- **RN-018** — A ATLAS poderá cobrar a empresa contratante principalmente por usuários e recursos.
- **RN-019** — O tenant pode possuir branding próprio.
- **RN-020** — O sistema deve suportar diferentes fabricantes, modelos e protocolos.
