# ATLAS

> **Tecnologia que move o rastreamento.**

A **ATLAS** é uma plataforma SaaS white label para empresas de rastreamento e monitoramento veicular.

A proposta é fornecer, em um único ecossistema, a infraestrutura, os aplicativos e as ferramentas necessárias para que uma empresa de rastreamento possa operar seu negócio sem precisar administrar toda a complexidade tecnológica envolvida.

## ✨ Principais recursos

- Rastreamento veicular em tempo real
- Aplicativo para clientes finais
- Aplicativo/painel administrativo
- Gestão de clientes
- Gestão de veículos
- Gestão de rastreadores
- Gestão de chips/SIM
- Provisionamento e configuração de dispositivos
- Comandos remotos
- Bloqueio e desbloqueio de veículos
- Alertas e notificações
- Cobranças e pagamentos
- Controle de inadimplência
- Gestão de funcionários
- Instalações e manutenção
- White label
- Infraestrutura dedicada por empresa
- Integração com Traccar
- Auditoria e rastreabilidade de ações

## 🏗️ Visão arquitetural

```text
                         ATLAS
                           │
              ┌────────────┴────────────┐
              │                         │
        CONTROL PLANE              TRACKING PLANE
              │                         │
       Gestão do SaaS                 Traccar
              │                         │
       Billing / Users              Devices
       Customers / Vehicles          Positions
       Devices / Tenants              Events
              │                         │
              └────────────┬────────────┘
                           │
                     Web / Mobile
```

## 📚 Documentação

### Produto
- [Visão do Produto](docs/00-product/vision.md)
- [Proposta de Valor](docs/00-product/value-proposition.md)
- [Modelo de Negócio](docs/00-product/business-model.md)

### Requisitos
- [Requisitos Funcionais](docs/01-requirements/functional-requirements.md)
- [Requisitos Não Funcionais](docs/01-requirements/non-functional-requirements.md)
- [Regras de Negócio](docs/01-requirements/business-rules.md)

### Domínio
- [Modelo de Domínio](docs/02-domain/domain-model.md)
- [Entidades](docs/02-domain/entities.md)
- [Relacionamentos](docs/02-domain/relationships.md)

### Arquitetura
- [Visão Geral](docs/03-architecture/overview.md)
- [Control Plane](docs/03-architecture/control-plane.md)
- [Tracking Plane](docs/03-architecture/tracking-plane.md)
- [Multi-tenancy](docs/03-architecture/multi-tenancy.md)
- [Infraestrutura](docs/03-architecture/infrastructure.md)
- [Segurança](docs/03-architecture/security.md)

### Dispositivos
- [Dispositivos](docs/04-devices/devices.md)
- [Protocolos](docs/04-devices/protocols.md)
- [Comandos](docs/04-devices/commands.md)
- [Provisionamento](docs/04-devices/provisioning.md)

### Billing
- [Billing](docs/05-billing/billing.md)
- [Pagamentos](docs/05-billing/payments.md)
- [Inadimplência](docs/05-billing/delinquency.md)

### Mobile
- [App do Cliente](docs/06-mobile/client-app.md)
- [App Administrativo](docs/06-mobile/admin-app.md)
- [App do Técnico](docs/06-mobile/technician-app.md)

### API
- [Convenções](docs/07-api/conventions.md)
- [Autenticação](docs/07-api/authentication.md)
- [Endpoints](docs/07-api/endpoints.md)

### Operação
- [Clientes](docs/08-operations/customers.md)
- [Instalações](docs/08-operations/installations.md)
- [Manutenção](docs/08-operations/maintenance.md)
- [Suporte](docs/08-operations/support.md)

### Desenvolvimento
- [Setup](docs/09-development/setup.md)
- [Padrões](docs/09-development/standards.md)
- [Git](docs/09-development/git.md)
- [Roadmap](docs/09-development/roadmap.md)

### Decisões arquiteturais
- [ADR-001 — Multi-tenancy](docs/decisions/ADR-001-multi-tenancy.md)
- [ADR-002 — Infraestrutura dedicada por Tenant](docs/decisions/ADR-002-dedicated-tracking-infrastructure.md)
- [ADR-003 — Conta única do cliente](docs/decisions/ADR-003-customer-single-account.md)
- [ADR-004 — Arquitetura de comandos](docs/decisions/ADR-004-command-architecture.md)
- [ADR-005 — Traccar como engine de tracking](docs/decisions/ADR-005-traccar-as-tracking-engine.md)

## 🔒 Status

**Em desenvolvimento.**

A documentação encontra-se em fase de especificação e será atualizada conforme as decisões de produto e arquitetura forem consolidadas.

## 📌 Princípio de desenvolvimento

Funcionalidades importantes devem ser especificadas antes da implementação.

```text
IDEIA
  ↓
REQUISITO
  ↓
REGRA DE NEGÓCIO
  ↓
ARQUITETURA
  ↓
IMPLEMENTAÇÃO
  ↓
TESTE
  ↓
DOCUMENTAÇÃO ATUALIZADA
  ↓
COMMIT
```

## 📄 Licença

Projeto proprietário. A licença definitiva será definida antes do primeiro release público.
