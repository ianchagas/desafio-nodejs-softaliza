# desafio-nodejs-softaliza

Criação de repositório para desafio teste de Node.js da Softaliza

# Inicio do projeto

Para inicio do projeto eu configurei o gerenciador de pacotes Chocolatey e executei a instalação do Nodejs-LTS através dele.
Também após isso, instalei o Yarn (que é o gerenciador de pacotes do Node da minha preferência).

# Criação DB

Para iniciar com a reprodução do projeto, deverá ser criado um db limpo no postgres com o nome "desafiosoftaliza".
Esse database deve ter as seguintes caracteristicas:

- host: localhost
- port: 5432
- username: postgres
- password: 123456
- database: "desafiosoftaliza"

Nativamente o TypeORM não possui um script ou config que crie o database.
Sendo assim, a criação do database permitirá rodar as migrations sem eventuais erros.

# Libs utilizadas

Como dependências.:

- express
- express-async-errors
- typeorm
- pg
- reflect-metadata
- bcryptjs
- jsonwebtoken
- uuid

Como dependências de desenvolvimento.:

- @types/bcryptjs
- @types/express
- @types/jsonwebtoken
- @types/uuid
- ts-node-dev
- typescript
