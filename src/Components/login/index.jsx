import "../../App.css";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import popup from "../Popup";
import "react-notifications-component/dist/theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function Index({ setToken }) {
  const [Matricula, setMatricula] = useState("");
  const [Senha, setSenha] = useState("");
  const [Disable, setDisable] = useState(false);

  const login = (e) => {
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.io)",
      "Content-Type": "application/json",
    };

    fetch("http://localhost:8081/login", {
      method: "POST",
      body: JSON.stringify({ matricula: Matricula, senha: Senha }),
      headers: headersList,
    }).then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        localStorage.setItem("jwt", data.token);
        return setToken(localStorage.getItem("jwt"));
      } else {
        popup("Ocorreu um erro!", "Login ou senha incorretos.", "danger");
      }
      setDisable(false);
    });
  };

  return (
    <div className="d-flex col-6 login justify-content-center align-items-center">
      <Form
        onSubmit={(e) => {
          login(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>
            <b>Entrar</b>
          </h1>
          <Form.Label>Matricula</Form.Label>
          <Form.Control
            name="matricula"
            type="text"
            placeholder="Matricula"
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            Entre em sua conta para utilizar a ferramenta.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            name="senha"
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          className="login-button"
          variant="primary"
          type="submit"
          disabled={Disable}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
