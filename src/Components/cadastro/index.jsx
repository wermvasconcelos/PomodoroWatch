import "../../App.css";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import popup from "../Popup";
import "react-notifications-component/dist/theme.css";

export default function Index() {
  const [Matricula, setMatricula] = useState("");
  const [Senha, setSenha] = useState("");
  const [Disable, setDisable] = useState(false);

  const cadastro = (e) => {
    e.preventDefault();
    setDisable(true);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    fetch("http://localhost:8081", {
      method: "POST",
      body: JSON.stringify({ matricula: Matricula, senha: Senha }),
      headers: headersList,
    }).then(async function (response) {
      const data = await response.json();
      if (response.status === 201) {
        popup("Sucesso!", "Cadastrado com sucesso!", "success");
      } else {
        popup("Ocorreu um erro!", data.msg, "danger");
      }
      setDisable(false);
    });
  };
  return (
    <div className="d-flex col-6 cadastro justify-content-center align-items-center ">
      <Form
        onSubmit={(e) => {
          cadastro(e);
        }}
      >
        <h1>
          <b>Cadastro</b>
        </h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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
            Se cadastre para ter acesso á ferramenta.
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
          className="cadas-button"
          variant="primary"
          type="submit"
          disabled={Disable}
        >
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}
