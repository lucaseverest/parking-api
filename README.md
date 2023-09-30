<h1 align="center">Desafio NodeJS - Dr.consulta</h1>

## 💻 Sobre o projeto
O projeto consiste em um API de gerenciamento de estacionamento, onde é possível cadastrar novos estacionamentos, veículos, bem como registrar saídas e entradas nos estabelecimentos.

## 💻 Principais Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)

## 🔌 Rodar o projeto

Exemplo do arquivo .env necessário:
```
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_HOST=

JWT_SECRET=
```


```sh
## clonar repositório
$ git clone https://github.com/lucaseverest/parking-api.git

## Instalar dependências
$ npm i

## Rodar o projeto
# development
$ npm run start

# watch mode
$ npm run start:dev

# Run on docker container
$ docker-compose up --build
```
## Diagrama Entidade Relacionamento
![ER Diagram - parking-api](https://github.com/lucaseverest/parking-api/assets/55161134/3e6d8722-d7a4-459a-8620-4ccee8769939)

## 🛣️ Rotas da API
- Base URL: `http://localhost:30000`

- `POST:` Cadastro de empresa: `/auth/signup`  
        - Body:
        `{
        	"name": "center parking",
        	"cnpj": "09876543216285",
        	"password": "123456",
        	"address": "Tenente Coronel, 25",
        	"phone": "22992718282",
        	"motorcycleSpacesQuantity": 256,
        	"carSpacesQuantity": 625
        }`
  
- `POST:` Login da empresa: `/auth/login`  
        - Body:
          `{
          	"cnpj": "12345678912345",
          	"password": "123456"
          }`
- `GET:` Buscar uma empresa: `/parking-company/:id`
  
- `PUT:` Atualizar uma empresa: `/parking-company/:id`  
        - `Body:
          {
            "name": "new parking",
          	"cnpj": "09876543216285",
          	"address": "Tenente Coronel, 25",
          	"phone": "22992718282",
          	"carSpacesQuantity": 625,
          	"motorcycleSpacesQuantity": 256
          }`  
          Obs: todos os campos são opcionais
  
- `DELETE:` Deletar uma empresa: `/parking-company:id`  
- `POST:` Cadastro de veículo: `/vehicle`  
        - Body:
        `{
          "brand": "Ford",
          "model": "Fiesta",
          "plate": "KYO2E94",
          "color": "blue",
          "type": "car"
        }`
  
- `GET:` Busca de veículo: `/vehicle/:plate`
  
  
- `PUT:` Atualizar um veículo: `/vehicle/:plate`  
        - Body:
        `{
          "brand": "Ford",
          "model": "Fiesta",
          "plate": "KYO2E94",
          "color": "blue",
          "type": "car"
        }`  
        Obs: todos os campos são opcionais

- `POST:` Lançar movimentação de veículo: `/parking-registers/throw-register?parkingCompanyId=`  
        - Body:
          `{
            	"vehiclePlate": "KYO2E94",
            	"registerType": "exit"
            }`
