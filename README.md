# Instalando e rodando

Para você instalar o projeto em seu ambiente siga os passos:

- Clone o projeto no disco C:\ (ou qualquer lugar), abra o cmd e rode os comandos:

`` ``
cd Api-Node
`` ``

`` ``
Npm install 
`` ``

`` ``
Npm install -g nodemon 
`` ``

`` ``
Npm init –y 
`` ``

`` ``
Npm i –save restify restify-errors knex myslq  
`` ``

- Abra o Xampp e start o MySQL e o Apache;

- Em seu navegador abra o PhpMyAdmin: http://localhost/phpmyadmin/
 
- Na aba Importar selecine o arquivo apiveiculo.sql e execute para criar o banco.

- Depois de tudo isso instalado rode no cmd o comando:

`` ``
nodemon index.js 
`` ``

- Logo após é só usar o Postman para testar a API.

## Link para downloads dos frameworks usados:

- Postman: https://www.getpostman.com/downloads/

- Node: https://nodejs.org/en/

- Xampp: https://www.apachefriends.org/pt_br/download.html




