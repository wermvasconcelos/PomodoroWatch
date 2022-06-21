const localStrategy = require("passport-local");
const Usuario = require("../model/Usuario");

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      { usernameField: "matricula", passwordField: "senha" },
      (matricula, senha, done) => {}
    )
  );
  passport.serializeUser((matricula, done) => {
    done(null, matricula);
  });
  passport.deserializeUser((id, done) => {
    Usuario.findOne({ where: { ID: id } }).then((erro, matricula) => {
      done(erro, id);
    });
  });
};
