const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("Public/login");
});

router.post("/login", (req, res, next) => {
  //Faz a autenticação do login
  passport.authenticate("local", {
    successRedirect: "/Usuario/Home",
    failureRedirect: "/login",
    successFlash: true,
    failureFlash: true,
    badRequestMessage: "Preencha todos os campos",
  })(req, res, next);
});

module.exports = router;
