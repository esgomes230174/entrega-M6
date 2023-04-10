import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} />
      <GlobalStyle />
    </>
  );
};

export default App;
