# Instalando pacotes necessários

npm install sequelize@6.32.1 sequelize-cli@6.6.1 sqlite3@5.1.6 --save-exact 

# Iniciando o sequelize

npx sequelize-cli init

# Criando modelos no banco

npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

# Aplicando migração do modelo para o banco de dados

npx sequelize-cli db:migrate