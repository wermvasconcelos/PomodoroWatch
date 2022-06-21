const db = require("./index");

//Criando a estrutura da tabela
const Usuario = db.sequelize.define(
  "usuarios",
  {
    ID: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matricula: {
      type: db.Sequelize.STRING,
      require: true,
    },
    senha: {
      type: db.Sequelize.STRING,
      require: true,
    },
  },
  { timestamps: true }
);
 Usuario.sync({
/*force: true*/
 }); //Para que ele crie a tabela,caso nÃ£o exista, basta descomentar esta linha
module.exports = Usuario;
