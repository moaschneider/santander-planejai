# Planejai

O Planejai é uma aplicação web que ajuda o usuário a organizar informações
financeiras e planejar uma meta de forma simples e orientada. A proposta é
transformar dados do dia a dia em uma visão mais clara sobre o caminho até um
objetivo financeiro.

## Como funciona

O usuário preenche um formulário dividido em etapas, informando:

- Renda mensal
- Custos fixos
- Dívidas e parcelas
- Nome e custo da meta
- Prazo desejado para alcançar o objetivo

Uma barra de progresso indica a etapa atual e permite voltar para revisar os
dados. Ao finalizar o formulário, a simulação é salva no armazenamento local do
navegador e o usuário é encaminhado para a tela de resultado.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Estrutura

O código é organizado por responsabilidade, com componentes reutilizáveis,
páginas, rotas, hooks, contexto de tema, dados da simulação e utilitários.
O projeto também possui suporte a tema claro e escuro e utiliza o `localStorage`
para manter as simulações realizadas no navegador.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Outros comandos

```bash
npm run lint
npm run format
npm run format:check
```
