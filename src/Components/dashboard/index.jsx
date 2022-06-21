import React, { useState } from "react";
import ReactNotification from "react-notifications-component";
import { Form, Button, Spinner } from "react-bootstrap";
import "../css/style.css";
import Livros from "../../static/img/livros.jpg";
import Audio from "./som.mp3";
import {
  IoPlaySharp,
  IoRefreshSharp,
  IoPauseSharp,
  IoVolumeHigh,
  IoVolumeMuteSharp,
} from "react-icons/io5";

export default function Index(prop) {
  const [Tempo, setTempo] = useState("1500");
  const [Load, setLoad] = useState(false);
  console.log(prop.Theme);
  return (
    <div className={`${prop.Theme}`}>
      <div className="divnav">
        <nav className="main-menu" id={`menu${prop.Theme}`}>
          <ul>
            <li>
              <a
                href="http://www.unifametro.edu.br/area-do-aluno/"
                id={`a${prop.Theme}`}
              >
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">Portal</span>
              </a>
            </li>
            <li class="has-subnav">
              <a
                href="http://educacaoonline.unifametro.edu.br/login/index.php"
                id={`a${prop.Theme}`}
              >
                <i class="fa fa-laptop fa-2x"></i>
                <span class="nav-text">Moodle</span>
              </a>
            </li>
            <li class="has-subnav">
              <a
                href="https://www.instagram.com/unifametro/?hl=pt-br"
                id={`a${prop.Theme}`}
              >
                <i class="fa fa-instagram fa-2x"></i>
                <span class="nav-text">Instagram</span>
              </a>
            </li>
            <li class="has-subnav">
              {prop.Theme === "dark" ? (
                <a href="#" id={`a${prop.Theme}`}>
                  <i
                    class="fa fa-adjust fa-2x"
                    onClick={() => {
                      prop.setTheme("light");
                      localStorage.setItem("theme", "light");
                    }}
                  ></i>
                  <span class="nav-text">🌞Claro</span>
                </a>
              ) : (
                <a href="#" id={`a${prop.Theme}`}>
                  <i
                    class="fa fa-adjust fa-2x"
                    onClick={() => {
                      prop.setTheme("dark");
                      localStorage.setItem("theme", "dark");
                    }}
                  ></i>
                  <span class="nav-text">🌚Escuro</span>
                </a>
              )}
            </li>
          </ul>

          <ul class="logout">
            <li>
              <a href="#" id={`a${prop.Theme}`}>
                {!Load ? (
                  <i
                    className="fa fa-power-off fa-2x"
                    onClick={() => {
                      setLoad(true);
                      localStorage.setItem("jwt", "");
                      window.location.reload();
                    }}
                  ></i>
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                <span class="nav-text">Sair</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="header">
          <h1 className="h1dark">Relogio Pomodoro</h1>
        </div>

        <div className="row">
          <div className="col-half knob-wrapper">
            <h5 className="text-light">Tempo de sessão</h5>
            <input type="text" value="25" size="5" id="session-knob" />
          </div>
          <div className="col-half knob-wrapper">
            <h5 className="text-light">Tempo de descanso</h5>
            <input type="text" value="5" size="5" id="break-knob" />
          </div>
        </div>

        <div className="buttons">
          <a id="cmd-reset" className="btn btn-red">
            <IoRefreshSharp color={"white"} />
          </a>
          <a id="cmd-pause" className="btn btn-yellow hidden">
            <IoPauseSharp color={"white"} />
          </a>
          <a id="cmd-go" className="btn btn-green">
            <IoPlaySharp color={"white"} />
          </a>
        </div>

        <div className="buttons-mute">
          <a id="cmd-mute" className="btn btn-mute">
            <IoVolumeHigh color={"white"} />
          </a>
          <a id="cmd-unmute" className="btn btn-mute hidden">
            <IoVolumeMuteSharp color={"white"} />
          </a>
        </div>

        <div className="timer knob-wrapper">
          <input
            type="text"
            value={Tempo}
            size="5"
            id="timer-display"
            onChange={(e) => {
              setTempo(e.target.value);
            }}
          />
        </div>

        <audio id="snd-endofbreak" preload="auto">
          <source src={Audio} />
          <source src={Audio} />
        </audio>

        <audio id="snd-endofsession" preload="auto">
          <source src={Audio} />
          <source src={Audio} />
        </audio>
      </div>
    </div>
  );
}
