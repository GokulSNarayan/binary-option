import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
// import CustomForm from "../components/Form";
import Layout from "../components/Layout";
import Converter from "../components/Converter";
const ExchangeRate = React.lazy(() => import("../components/ExchangeRate"));

const Wrapper = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const apiUrl = "https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee/";

function App() {
  const [code, setCode] = useState();
  const data = [
    ["AED", "UAE Dirham"],
    ["AFN", "Afghan Afghani"],
    ["ALL", "Albanian Lek"],
  ];

  useEffect(() => {});

  const handleConvert = (event) => {
    event.preventDefault();
    console.log("button clicked");
  };
  return (
    <Wrapper>
      <Layout>
        <Routes>
          <Route path="/converter" element={<Converter />} />
          <Route
            path="/exchangeRate"
            element={
              <React.Suspense fallback={<>...</>}>
                <ExchangeRate />
              </React.Suspense>
            }
          />
          <Route path="/" element={<Navigate replace to="/converter" />} />
        </Routes>
      </Layout>
    </Wrapper>
  );
}

export default App;
