# ATLAS — Visão do Produto

> **Tecnologia que move o rastreamento.**

**Documento:** Visão do Produto  
**Versão:** 0.1.0  
**Status:** Draft  
**Última atualização:** 2026-08-31

## 1. Visão

A ATLAS será uma plataforma SaaS white label desenvolvida para empresas de rastreamento veicular que desejam oferecer seus serviços sem precisar se preocupar com a complexidade tecnológica necessária para manter uma operação moderna.

A plataforma reunirá gestão, rastreamento, aplicativos, dispositivos, comandos, notificações, cobrança, suporte, automação e infraestrutura em um único ecossistema.

A ATLAS utilizará o Traccar como componente de rastreamento, abstraindo sua complexidade da empresa contratante e oferecendo uma experiência própria e personalizada.

## 2. Problema

Muitas empresas de rastreamento possuem uma operação funcional, mas dependem de terceiros para manter sua infraestrutura tecnológica.

É comum encontrar empresas que:

- dependem de programadores para atualizações;
- possuem sistemas antigos;
- possuem aplicativos limitados;
- não têm cobrança automatizada;
- compartilham logins entre funcionários;
- realizam cadastros manualmente;
- configuram rastreadores por SMS;
- dependem de conhecimento técnico para suporte;
- precisam solicitar alterações ao desenvolvedor para evoluir o sistema.

## 3. Público-alvo

A ATLAS será direcionada principalmente a pequenas e médias empresas de rastreamento, empresas regionais, operações em expansão, novos negócios e empresas que desejam substituir ou modernizar sistemas legados.

## 4. Persona inicial

A Protecar Monitoramento será usada como referência prática inicial para validação de fluxos e requisitos.

O cenário observado inclui aproximadamente 600 clientes, mensalidade típica de R$30 por cliente, rastreadores 4G, chips M2M, equipamentos J16, ativação por SMS, infraestrutura própria contratada pela empresa, aplicativo para clientes, plataforma web administrativa, funcionários compartilhando login e cobrança manual via WhatsApp.

Essas características servem como referência de descoberta e não limitam a arquitetura da ATLAS.

## 5. Proposta de valor

> Entregar às empresas de rastreamento toda a infraestrutura tecnológica necessária para operar seu negócio sob sua própria marca.

A empresa não compra apenas um sistema. Ela recebe um ecossistema de tecnologia para operação.

## 6. Posicionamento

A ATLAS não será posicionada como uma simples interface para o Traccar.

> **A ATLAS é uma plataforma completa para operar uma empresa de rastreamento.**

O Traccar será um componente da infraestrutura tecnológica; a ATLAS será o produto.

## 7. Diferenciais

### Mobile-first

O aplicativo será um dos principais diferenciais. O cliente deverá conseguir visualizar veículos, consultar histórico, receber alertas, consultar cobranças, realizar pagamentos e executar ações autorizadas.

### Comandos e emergência

Cliente e operador autorizado poderão solicitar bloqueio do veículo. O cliente também poderá ligar para a empresa quando não tiver acesso ao celular, permitindo que um operador valide a solicitação e execute o bloqueio.

Todos os comandos deverão ser auditados.

### White label

Cada empresa contratante terá sua própria identidade visual, incluindo nome, logotipo, cores, informações de suporte e, quando suportado pela estratégia do produto, domínio e identidade de aplicativo.

### Infraestrutura dedicada

Cada empresa poderá possuir um ambiente de tracking isolado, reduzindo o risco de falhas entre clientes.

### Gestão financeira

A plataforma deverá automatizar cobranças, pagamentos, notificações, inadimplência, suspensão e reativação.

### Dispositivos

A arquitetura será agnóstica a um único fabricante ou modelo. J16 será um dos equipamentos de referência, mas novos dispositivos deverão poder ser adicionados por meio de modelos, protocolos e receitas de configuração.

## 8. Gestão de funcionários

Cada funcionário deverá possuir sua própria conta, substituindo o modelo de login compartilhado e permitindo controle de permissões e auditoria.

## 9. Aplicativo do técnico

Futuramente, a ATLAS poderá oferecer um aplicativo para instalação, configuração, testes, manutenção e encerramento de instalações.

## 10. Arquitetura conceitual

### Control Plane

Responsável por:

- Tenants;
- usuários;
- clientes;
- assinaturas;
- veículos;
- dispositivos;
- SIM cards;
- billing;
- notificações;
- branding;
- operações;
- provisionamento de infraestrutura.

### Tracking Plane

Responsável pelo fluxo:

```text
Rastreador
    ↓
Traccar
    ↓
Posições / Eventos
    ↓
Serviços ATLAS
    ↓
Web / Mobile
```

## 11. Modelo comercial

A ATLAS será comercializada como SaaS para empresas de rastreamento.

A hipótese inicial é estruturar os planos principalmente pela quantidade de usuários e recursos contratados, em vez de cobrar diretamente por cada rastreador.

A política comercial definitiva será validada durante a etapa de produto e mercado.

## 12. Missão

> Simplificar a tecnologia por trás das empresas de rastreamento, oferecendo uma plataforma moderna, segura e acessível que permita a elas crescerem sem carregar o peso da infraestrutura tecnológica.

## 13. Visão

> Ser uma das principais plataformas de tecnologia white label para empresas de rastreamento e monitoramento veicular, tornando tecnologia avançada acessível também às pequenas e médias operações.

## 14. Slogan

# ATLAS
### Tecnologia que move o rastreamento.
