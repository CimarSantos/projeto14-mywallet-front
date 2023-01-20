import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
/* import UserContext from "../contexts/UserContext"; */
import axios from "axios";

import Logo from "../assets/MyWallet.png";

function Init() {
  /* const navigate = useNavigate(); */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const { setToken } = useContext(UserContext);
  const { setUser } = useContext(UserContext); */

  function fazerLogin(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(``, body)
      .then((res) => {
        /* setToken(res.data.token);
        setUser(res.data);
        navigate("/hoje"); */
      })
      .catch((err) => {
        alert(`${err.response.data.message} Tente novamente!`);
      });
  }
  return (
    <div className="scrnBackground">
      <LogoContainer className="flex">
        <img src={Logo} alt="MyWallet" />
      </LogoContainer>
      <Form className="flex" onSubmit={fazerLogin}>
        <input
          data-test="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          data-test="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button data-test="sign-in-submit" type="submit">
          Entrar
        </button>
      </Form>
      <Link to="/cadastro">
        <LoginCadastro className="flex">
          <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
        </LoginCadastro>
      </Link>
    </div>
  );
}

export default Init;

const LoginCadastro = styled.div`
  justify-content: center;
  margin: 30px 0;
  p {
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Form = styled.form`
  margin-top: 20px;
  flex-direction: column;
  gap: 10px;
  input {
    width: 326px;
    height: 58px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
  }
  button {
    width: 326px;
    height: 58px;
    border: none;
    background-color: #a328d6;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
`;

const LogoContainer = styled.div`
  justify-content: center;
  padding: 20% 0 20px 0;
  img {
    width: 147px;
  }
`;
