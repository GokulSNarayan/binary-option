import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getBaseCurrency,
  getExchangeRates,
  setBaseCurrency,
} from "../src/redux/actions/currency";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
`;
const Title = styled.h1`
  color: "#000";
`;

const SubTitle = styled.h3`
  color: "#000";
`;
const Table = styled.table`
  /* border: 1px solid #fff; */
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: rgb(35 55 80 / 30%) 0px 6px 12px;
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 20rem;
  table-layout: fixed;

  & tbody {
    display: inline-block;
    overflow: auto;
    height: 20rem;
    width: 100%;
  }
  & thead tr {
    display: inline-block;
  }
  & caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }
  & tr {
    background-color: "#cccccc99";
    border: 1px solid #111;
    padding: 0.35em;
  }
  & th,
  & td {
    padding: 0.625em;
    text-align: center;
    border: 1px solid #ddd;
    width: 100%;
  }
  & th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;
const Select = styled.select`
  min-width: 200px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-right: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
// const apiUrl = "https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee/";

export default function ExchangeRate() {
  const [baseCode, setBaseCode] = useState("AED");
  const dispatch = useDispatch();
  const { baseCurrency, loading, error, exchange, exchangeRates } = useSelector(
    (state) => state.currency
  );
  console.log("🚀 ~ exchangeRates===>", exchangeRates);

  // const data = {
  //   USD: 1,
  //   AUD: 1.4817,
  //   BGN: 1.7741,
  //   CAD: 1.3168,
  //   CHF: 0.9774,
  //   CNY: 6.9454,
  // };
  const dataCodes = [
    ["AED", "UAE Dirham"],
    ["AFN", "Afghan Afghani"],
    ["ALL", "Albanian Lek"],
  ];

  useEffect(() => {
    if (baseCurrency === null) {
      dispatch(getExchangeRates(baseCurrency));
    } else {
      dispatch(setBaseCurrency("USD"));
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
        <Select value={baseCode} onChange={(e) => setBaseCode(e.target.value)}>
          {dataCodes.map((code, idx) => (
            <option key={idx} value={code[0]}>
              {`${code[0]} - ${code[1]}`}
            </option>
          ))}
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
