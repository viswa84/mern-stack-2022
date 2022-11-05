import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonAppBar from "./components/Appbar";
import TransactionForm from "./components/TransactionFoem";
import TransactionsList from "./components/TransactionList";
import { Container } from "@mui/system";

import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <ButtonAppBar />
      <Outlet/>
     
    </>
  );
}

export default App;
