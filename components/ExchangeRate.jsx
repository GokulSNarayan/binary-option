import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getBaseCurrency,
  getExchangeRates,
  setBaseCurrency,
  getSupportedCodes,
} from "../src/redux/actions/currency";
import { Select, SubTitle, Table, Title, Wrapper } from "./CustomComponents";

export default function ExchangeRate() {
  const dispatch = useDispatch();
  const { baseCurrency, loading, error, exchangeRates, supportedCodes } =
    useSelector((state) => state.currency);

  const dataCodes = [
    ["AED", "UAE Dirham"],
    ["AFN", "Afghan Afghani"],
    ["ALL", "Albanian Lek"],
  ];

  useEffect(() => {
    if (baseCurrency !== null) {
      dispatch(getExchangeRates(baseCurrency));
    } else {
      dispatch(setBaseCurrency("USD"));
    }
  }, [dispatch]);

  useEffect(() => {
    if (supportedCodes === null) {
      dispatch(getSupportedCodes());
    }
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Wrapper>
      <Title>Exchange Rate</Title>
      <SubTitle>
        Base Currency:{" "}
        <Select
          value={baseCurrency}
          onChange={(e) => dispatch(setBaseCurrency(e.target.value))}
        >
          {supportedCodes !== null
            ? supportedCodes.map((code, idx) => (
                <option key={idx} value={code[0]}>
                  {`${code[0]} - ${code[1]}`}
                </option>
              ))
            : null}
        </Select>
      </SubTitle>
      <Table>
        <thead>
          <tr>
            <th>Currency Code</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates
            ? Object.keys(exchangeRates).map((dataKey, idx) => (
                <tr key={idx}>
                  <td>{dataKey}</td>
                  <td>{exchangeRates[dataKey]}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </Wrapper>
  );
}
