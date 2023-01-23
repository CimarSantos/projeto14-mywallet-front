import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import Init from "./Init";
import SignUp from "./SignUp";
import Wallet from "./Wallet";
import NewEntry from "./NewEntry";
import NewExit from "./NewExit";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{ token, setToken }}>
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/newentry" element={<NewEntry />} />
            <Route path="/newexit" element={<NewExit />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
