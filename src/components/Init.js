import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext.js";

import Logo from "../assets/MyWallet.png";

export default function Init() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    const request = axios.post("http://localhost:5000/signin", {
      email,
      password,
    });
    request
      .then((response) => {
        setToken(response.data);
        navigate("/wallet");
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        alert(`Ocorreu um erro, verifique os dados e tente novamente`);
      });

    console.log(request);
  };

  return (
    <ContainerScrn className="scrnBackground">
      <LogoContainer className="flex">
        <img src={Logo} alt="MyWallet" />
      </LogoContainer>
      <ContainerForm className="flex">
        <form className="flex" onSubmit={Login}>
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </ContainerForm>
      <SiginInLink className="flex">
        <Link to={`/signup`}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </SiginInLink>
    </ContainerScrn>
  );
}

const SiginInLink = styled.div`
  padding-top: 30px;
  p {
    font-size: 15px;
    color: #fff;
    font-weight: 700;
  }
`;

const ContainerForm = styled.div`
  flex-direction: column;
  padding: 30px 0;

  form {
    flex-direction: column;
    gap: 10px;
  }

  input,
  button {
    width: 326px;
    height: 58px;
    border-radius: 5px;
    padding: 0 15px;
  }

  input {
    width: 326px;
    height: 58px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
  }

  button {
    background-color: #a328d6;
    border: none;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #a328d6;
      background-color: #fff;
    }
  }
`;

const ContainerScrn = styled.div`
  height: 100vh;
`;

const LogoContainer = styled.div`
  justify-content: center;
  padding: 10% 0 20px 0;
  img {
    width: 147px;
  }
`;
