![Lama](https://user-images.githubusercontent.com/99096015/180623701-35af70df-74bf-448d-a060-8cd6b25b39f2.png)



---

##  🕵Sobre

Backend de uma rede social chamada Labook, que tem o objetivo de promover a conexão e interação entre seus mais diversos usuários.

---
##  🧭Status do Projeto

 - ⌛ Feito

---

##  🎯Objetivo do Projeto

Este é um projeto de Back-end desenvolvido no bootcamp da Labenu, cujo o principal objetivo é estudar e compreender: A produção de um Banco de Dados e a criação de Api's.

Tecnologias utilizadas: Jest, Node.JS, Knex, TypeScript, MySQL, SQL, Testes unitários, Git e Github.


## ☑️Requisitos de Funcionalidade

- [x] Cadastro

  O sistema permite o registro de usuários que irão usá-lo. Para se cadastrar, é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. O usuário pode pode ser um cliente (usuário normal) ou um administrador do sistema (admin). O usuário deve poder se logar automaticamente após o cadastro.

- [x] Login

  Para realizar o login, o usuário basta informar o e-mail e a senha. O retorno contém o token de autenticação do usuário.

- [x] Endpoint de registrar banda

  O sistema deixa registrado todas as bandas que participarão dos três dias de shows. Para uma banda ser criada, é necessário as informações: nome, gênero musical principal a qual ela se identifica e o nome de um responsável (que pode ser qualquer membro dela). Não podem existir duas bandas com o mesmo nome. Somente administradores podem registrar bandas.

- [x] Endpoint de visualização de detalhes sobre a banda 

  Esse endpoint recebe o nome da banda e retorna todas as informações salvas sobre ela.

- [x] Endpoint de adicionar um show a um dia

  Para cadastrar um show, o endpoint precisa do id da banda, o dia (sexta, sábado ou domingo) e o horário em que ela irá se apresentar. Há uma validação para indicar se o horário é válido (ou seja, se está entre 08h e 23h). Caso já exista um show marcado para o dia e o horário em questão, o endpoint retorna um erro. 

- [x] Endpoint de pegar todos os shows de uma data
  
  Recebe um dia (sexta, sábado ou domingo) e retorna todos os shows daquela data (ordenados pelo horário), mostrando somente o nome da banda e o gênero musical principal.



![image](https://user-images.githubusercontent.com/99096015/180623858-bd18231d-b0df-4dd4-95c8-57108ec1dca1.png) 
![image](https://user-images.githubusercontent.com/99096015/180623863-6f753ba8-dd39-487a-8177-4c6b0c3e191c.png)
![image](https://user-images.githubusercontent.com/99096015/180623888-1f924e57-c05f-4a6f-ae04-de5a59e3e71b.png)
![image](https://user-images.githubusercontent.com/99096015/180624070-b38c9a76-9b3d-4331-96ae-77e01fe08af8.png)
![image](https://user-images.githubusercontent.com/99096015/180623907-6c142159-2b48-4d53-853f-b44a56662c84.png)
![image](https://user-images.githubusercontent.com/99096015/180624084-b73e4d20-94cc-402e-bf87-e253e701209d.png)





---

## 🔗Link para Acessar

- **Link da Documentação:** https://documenter.getpostman.com/view/20357881/UzXKVyQT
- **Link Heroku:** https://lama-brenno-ambrozino.herokuapp.com

---


## 🛰Rodando o Projeto

Para Rodar o projeto, siga as seguintes etapas :

- Clonar o repositório
- Rodar o comando "npm install" no terminal
- Rodar o comando "npm run start" no terminal
