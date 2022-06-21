const Sequelize = require("sequelize");
const cli = require("cli-color");
const process = "Etc/GMT0";

const sequelize = new Sequelize("projetoweb", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: process,
  },
  pool: {
    min: 0,
    max: 2,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
  benchmark: false,
  logging: false,
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
sequelize
  .authenticate()
  .then(function () {
    console.log(cli.green("Conectado com sucesso!"));
  })
  .catch(function (erro) {
    console.log(cli.red("Falha ao se conectar: ") + erro);
  });
