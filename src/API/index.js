const express = require("express");
const controle_usuario = require("./controller/controle_usuario");
const cors = require("cors");
const app = express();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
const session = require("express-session");
const Usuario = require("./model/Usuario");
require("./controller/auth")(passport);

app.use(cors(corsOptions)); //https://web.dev/cross-origin-resource-sharing/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "session",
    resave: true,
    saveUninitialized: true,
  })
);

app.post("/", async (req, res) => {
  controle_usuario.Create(req, res);
});

app.post("/login", (req, res, next) => {
  Usuario.findOne({ where: { matricula: req.body.matricula } }).then(
    (matricula) => {
      if (!matricula) {
        return res.status(404).json({
          message: "Usuário ou senha incorreto",
        });
      }

      bcrypt.compare(req.body.senha, matricula.senha, (erro, batem) => {
        if (batem) {
          const token = jwt.sign(
            {
              ID: matricula.ID,
              matricula: matricula.matricula,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Deu certo",
            token: token,
          });
        } else {
          return res.status(404).json({
            message: "Usuário ou senha incorreto",
          });
        }
      });
    }
  );
});

app.listen(8081, function () {
  console.log("Servidor rodando na url: http://localhost:8081");
});
//localhost:8081
