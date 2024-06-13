# Instalando pacotes necessários

npm install sequelize@6.32.1 sequelize-cli@6.6.1 sqlite3@5.1.6 --save-exact 

# Iniciando o sequelize

npx sequelize-cli init

# Criando modelos no banco

npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

npx sequelize-cli model:generate --name Categoria --attributes titulo:string

npx sequelize-cli model:generate --name Curso --attributes titulo:string,descricao:string,data_inicio:dateonly

npx sequelize-cli model:generate --name Matricula --attributes status:string

# Aplicando migração do modelo para o banco de dados

npx sequelize-cli db:migrate

# Populando o banco com os arquivos seeders

npx sequelize-cli seed:generate --name demo-pessoa

npx sequelize-cli seed:generate --name demo-categorias

npx sequelize-cli seed:generate --name demo-cursos

npx sequelize-cli seed:generate --name demo-matriculas

npx sequelize-cli db:seed:all

npx sequelize-cli db:seed --seed 20240613182325-demo-categorias.js
npx sequelize-cli db:seed --seed 20240613182344-demo-cursos.js
npx sequelize-cli db:seed --seed 20240613182402-demo-matriculas.js