import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Init from "./Init";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/* <UserContext.Provider value={{ token, setToken }}> */}
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/cadastro" element={<SignUp />} />
          {/*  <Route path="/wallet" element={<Wallet />} />
            <Route path="/newentry" element={<NewEntry />} />
            <Route path="/newexit" element={<NewExit />} /> */}
        </Routes>
        {/* </UserContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
