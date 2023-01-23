import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NewExit() {
  return (
    <>
      <MainScreem className="scrnBackground">
        <Top className="flex">
          <h2>Olá, Fulano</h2>
          <Link className="link" to={"/wallet"}>
            <RiArrowGoBackLine />
          </Link>
        </Top>
        <Container className="flex">
          <ContainerForm className="flex">
            <form className="flex" /* onSubmit={Login} */>
              <input
                type="number"
                format="currency"
                precision="2"
                className="form-control"
                placeholder="Valor"
                /* value={Valor}
                onChange={(e) => setValor(e.target.value)} */
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Descrição"
                /* value={descricao}
                onChange={(e) => setDescricao(e.target.value)} */
                required
              />
              <button type="submit">Salvar saída</button>
            </form>
          </ContainerForm>
        </Container>
      </MainScreem>
    </>
  );
}

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

const Container = styled.div``;

const Top = styled.div`
  padding: 30px 20px;
  justify-content: space-between;
  color: #fff;
  font-size: 26px;

  .link {
    color: #fff;
  }
`;

const MainScreem = styled.div`
  height: 100vh;
`;
