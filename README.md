<h1 align="center">Desafio Node.JS Softaliza</h1>
<p align="center">Desafio de desenvolvimento de uma API para criação de Blogspots</p>

Conteúdos da aplicação
=================
# Sobre

Proposta de desafio de desenvolvimento para aplicação de vaga de desenvolvedor Backend Junior na [Softaliza](https://www.softaliza.com.br)

# 💡 Features

- ✅ Cadastro de usuários
- ✅ Autênticação de usuários com JWT (esquema de Login)
- ✅ Cadastro de Blogspots
- ✅ Consulta de todos os Blogspots
- ✅ Consulta de Blogspots pelo Slug
- ✅ Alteração de Blogspots
- ✅ Exclusão de Blogspots

# ❗ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com) ou [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com/products/docker-desktop) devidamente configurado.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e um terminal para os scripts. Recomendo o [GitBash](https://gitforwindows.org).

Para os testes das rotas, recomendo a utilização do [Imsomnia](https://insomnia.rest/download)


# 💻 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/ianchagas/desafio-nodejs-softaliza>

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-nodejs-softaliza

# Instale as dependências
$ npm install / yarn install

# Suba o container do banco de dados através do Docker
$ docker-compose up -d

# Execute as migrations
$ npm run typeorm migration:run / yarn typeorm migration:run

# Antes de prosseguir com a execução da aplicação, dê um reload na IDE ou feche e abra de novo.
# As dependências do Mocha ao serem instaladas junto com o TypeORM geram um bugzinho no VsCode.

# Execute a aplicação em modo de desenvolvimento
$ npm run dev / yarn dev

# O servidor inciará na porta:5000 - os testes podem ser feitos no Insomnia
```

# 🚦 Rotas

Vou deixar todas as rotas apontadas aqui, porém também vou deixar disponibilizado um arquivo para importação no Insomnia que contém a minha configuração de testes.
É possível testar a aplicação com os dados default já incluídos via migration.

## <b>POST<b>
* /api/v1/login-user - req.body - o retorno dele é um Token JWT válido para utilização nas outras rotas
```
{
	"useremail": "admin.default@softaliza.com.br",
	"password_hash": "123456"
}
```
* /api/v1/create-user - req.body - useradmin é opcional - para efetuar a criação é necessário gerar um Token e passar ele pelo tipo Bearer - somente um useradmin pode criar um user
```
{
	"username": "User Criação Teste",
	"useremail": "teste@teste.com.br",
	"password_hash": "654321",
	"useradmin": true
}
```
* /api/v1/create-new-blog - req.body - para efetuar a criação é necessário gerar um Token e passar ele pelo tipo Bearer - somente um useradmin pode criar um blog - o Slug é gerado automáticamente conformente o título for adicionado
```
{
	"title": "Teste de Rotas Post",
	"content": "Teste de conteúdo lorem ipsum",
	"created_by": "Ian Chagas Salgado"
}
```

## <b>GET<b>
* /api/v1/list-all-blogs - req.json - lista todos os blogs já cadastrados, retornando um JSON com todas as informações disponíveis
* /api/v1/list-blogs-by-slug/:slug - req.params - faz uma busca filtrando por um slug especifico, retornando um JSON com a informação disponível


## <b>PUT<b>
* /api/v1/update-blogs-by-slug/:slug - req.body/req.params - atualiza um Blogspot com novas informações, filtrando pelo slug - ao atualizar o Blogspot cria um novo slug de acordo com o novo título aplicado - para efetuar a alteração é necessário gerar um Token e passar ele pelo tipo Bearer - somente um useradmin pode alterar um blog
```
{
	"title": "Teste de Update",
	"content": "Lorem Ipsum de Update",
	"created_by": "Nome da Pessoa de Update"
}
```

## <b>DELETE<b>
* /api/v1/delete-blogs-by-slug/:slug - req.params - deleta um Blogspot filtrando pelo slug - para efetuar a exclusão é necessário gerar um Token e passar ele pelo tipo Bearer - somente um useradmin pode excluir um blog

<br>
  
# 📝 Testes Unitários
<h4> Não foi possível efetuar a conclusão, nunca havia trabalhado com testes e existe pouco conteúdo de chai/mocha com TypeScript na internet. Depois dessa experiência vou começar a testar o NestJS para esse fim.</h4>
  
# ⚡ Técnologias Utilizadas
  
- TypeScript
- Node.JS
- Postgres
- Docker
- TypeORM
- Mocha
  
# 😃 Autor
<p> Foi um baita desafio efetuar o projeto, e mesmo assim não consegui concluir a fase de testes unitários. Aqui na nossa região nós não temos a cultura de programar testar (de modo geral) e de forma errada, deixamos esses conceitos tão importantes passarem. Agradeço a oportunidade de participar disso, e principalmente agradeço toda a experiência que acumulei durante esses dias de desenvolvimento. Foi cansativo, mas extremamente maravilhoso poder focar e resolver problemas com objetivos reais, sair do exemplos das aulas.</p>
<p> Caso queiram entrar em contato, estarei disponível nas redes sociais e e-mail </p>
  
- [Facebook](https://www.facebook.com/ianchagas/)
- [Instagram](https://www.instagram.com/iaan.exe/)
- [LinkedIn](https://www.linkedin.com/in/ian-chagas-salgado-763a82166/)
- [WhatsApp](https://api.whatsapp.com/send?phone=5547996187817&text=Ol%C3%A1!)
- [Email](mailto:ianchagassalgado@hotmail.com)
  
  
# 📋 Licença
MIT License

Copyright (c) <2021> <Ian Chagas Salgado>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
