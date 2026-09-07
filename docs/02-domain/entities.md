# Entidades

## Tenant

Representa uma empresa contratante da ATLAS.

Principais atributos:

- id
- name
- legalName
- document
- email
- phone
- status
- planId
- settings
- createdAt

## User

Usuário interno da empresa.

- id
- tenantId
- name
- email
- passwordHash
- role
- status
- lastLogin

## Customer

Cliente final da empresa de rastreamento.

- id
- tenantId
- name
- document
- email
- phone
- address
- status

## CustomerAccount

Credencial de acesso do cliente final.

- id
- customerId
- email
- passwordHash
- status
- lastLogin

## Subscription

Representa o serviço contratado pelo cliente final.

- id
- tenantId
- customerId
- planId
- status
- startDate
- dueDate
- gracePeriod

## Vehicle

Veículo monitorado.

- id
- tenantId
- customerId
- subscriptionId
- plate
- brand
- model
- year
- color
- status

## Device

Rastreador físico.

- id
- tenantId
- imei
- deviceModelId
- status
- metadata

## DeviceModel

Modelo de rastreador.

- id
- manufacturer
- model
- protocolId
- capabilities
- provisioningRecipeId

## Protocol

Protocolo de comunicação do dispositivo.

## SIMCard

Chip utilizado pelo rastreador.

- id
- tenantId
- iccid
- msisdn
- operator
- type
- status

## DeviceAssignment

Histórico de associação entre dispositivo e veículo.

## Command

Solicitação de comando.

- id
- tenantId
- vehicleId
- deviceId
- commandType
- requestedBy
- requestedByType
- channel
- status
- createdAt
- sentAt
- responseAt
- result

## Position

Informação de localização.

## Event

Evento gerado pelo tracking.

## Notification

Mensagem gerada para um usuário ou cliente.

## Invoice

Cobrança emitida.

## Payment

Registro de pagamento.

## Installation

Registro de instalação.

## Maintenance

Registro de manutenção.

## AuditLog

Registro de operações relevantes para segurança e suporte.

## Branding

Configurações de identidade visual do tenant.
