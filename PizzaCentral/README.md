# Pizzaria Central - Cardápio Digital

Cardápio digital para a Pizzaria Central com integração do WhatsApp para pedidos, exibindo produtos e promoções especiais.

## Versão para o Netlify

Este projeto possui duas versões:

1. **Versão Original com Backend**: A versão completa com um servidor Express para fornecer dados dinâmicos.
2. **Versão Estática para Netlify**: Uma versão adaptada para ser hospedada no Netlify, usando dados estáticos.

## Como fazer o deploy no Netlify

Para fazer o deploy deste projeto no Netlify, siga estas etapas:

1. **Preparação dos arquivos**:
   - Renomeie `vite.config.netlify.ts` para `vite.config.ts` (substituindo o arquivo original)
   - Renomeie `package.json.netlify` para `package.json` (substituindo o arquivo original)
   - Verifique se a pasta `client/public` contém o arquivo `_redirects` (importante para o roteamento no Netlify)

2. **Faça o upload para o GitHub**:
   - Crie um novo repositório no GitHub
   - Envie o código para este repositório

3. **Configure o Netlify**:
   - Crie uma conta no Netlify (se ainda não tiver)
   - Clique em "New site from Git"
   - Selecione o GitHub como provedor de Git
   - Selecione o repositório que você acabou de criar
   - Configure as opções de build:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Clique em "Show advanced" e adicione uma variável de ambiente:
     - Chave: `NODE_VERSION`
     - Valor: `18` (ou outra versão compatível)
   - Clique em "Deploy site"

O arquivo `netlify.toml` e `_redirects` já estão configurados com as configurações necessárias para o roteamento correto. Se mesmo assim ocorrer o erro "Page not found":

1. Vá para "Site settings" > "Build & deploy" > "Post processing" no Netlify
2. Certifique-se de que "Asset optimization" está ativado
3. Em "Asset optimization" > "Edit settings", habilite "Bundle CSS" e "Bundle JS"
4. Na seção "Pretty URLs", desmarque a opção "Pretty URLs"
5. Salve as configurações e faça um novo deploy

## Estrutura do Projeto

- `/client/src/components`: Componentes React da interface
- `/client/src/pages`: Páginas da aplicação
- `/client/src/data`: Dados estáticos para a versão do Netlify
- `/client/src/lib`: Tipos e utilitários
- `/netlify.toml`: Configuração para o Netlify

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Vite