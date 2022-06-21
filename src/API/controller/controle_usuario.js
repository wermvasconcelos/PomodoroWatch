const Usuario = require("../model/Usuario");
const bcrypt = require("bcryptjs");

exports.Create = (req, res) => {
  Usuario.findOne({ where: { matricula: req.body.matricula } }).then(
    (dados) => {
      if (dados) {
        return res.status(406).send({
          msg: "Já existe um cadastro com essa matricula.",
        });
      } else {
        let Senha;
        bcrypt.genSalt(10, (erro, salt) => {
          //Encripta a senha(constant) em um hash
          bcrypt.hash(req.body.senha, salt, (erro, hash) => {
            //verifica se ocorreu algum erro durante o encrypt
            if (erro) {
              return res.status(500).json({
                msg: "Erro durante a cripitação, entre em contato com o suprote do site.",
              });
            }
            //Dando o valor da senha(var) jÃ¡ encriptado
            Senha = hash;
            Usuario.create({
              matricula: req.body.matricula,
              senha: Senha,
            })
              .then((dados) => {
                return res.status(201).json(dados);
              })
              .catch((erro) => {
                return res.status(500).json({
                  msg: erro,
                });
              });
          });
        });
      }
    }
  );
};
