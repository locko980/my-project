# Gerenciador de Livros

Este é um projeto de uma API desenvolvida com Node.js e Express para gerenciar livros.

## Requisitos

Certifique-se de ter os seguintes itens instalados no seu sistema:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd gerenciador_de_livros
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

## Configuração

Certifique-se de que você possui um arquivo `.env` configurado corretamente para o projeto. Exemplo:

```env
PORT=3000
```

Se estiver usando o `dotenv`, o arquivo será carregado automaticamente. Caso contrário, configure a porta manualmente no código.

## Executando o Projeto

### Ambiente de Desenvolvimento

Para executar o projeto em modo de desenvolvimento com reinicialização automática:

```bash
npx nodemon
```

### Ambiente de Produção

Compile o projeto para JavaScript e execute o código compilado:

```bash
npm run build
node dist/index.js
```

## Testando a API

Acesse o seguinte link no navegador ou use ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/):

```
http://localhost:3000
```

### Exemplos de Rotas

#### Rota Principal
**GET /**
- Responde com uma mensagem de boas-vindas.

#### Rota de Livros
**GET /api/livros**
- Retorna a lista de livros disponíveis.

## Estrutura do Projeto

```
gerenciador_de_livros/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── models/
│   └── index.ts
├── dist/
├── node_modules/
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

- **src/**: Contém o código-fonte do projeto.
- **dist/**: Contém os arquivos compilados.
- **.env**: Arquivo de variáveis de ambiente.
- **package.json**: Configuração do npm.
- **tsconfig.json**: Configurações do TypeScript.

## Scripts Disponíveis

- **`npm start`**: Inicia o servidor no ambiente de produção.
- **`npm run dev`**: Inicia o servidor no ambiente de desenvolvimento com reinicialização automática usando `nodemon`.
- **`npm run build`**: Compila o projeto TypeScript para JavaScript.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para começar:

1. Faça um fork do repositório.
2. Crie um branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o branch original:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
