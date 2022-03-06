import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getExchangeRates,
  setBaseCurrency,
  getSupportedCodes,
} from "../src/redux/actions/currency";
import { Select, SubTitle, Table, Title, Wrapper } from "./CustomComponents";

export default function ExchangeRate() {
  const dispatch = useDispatch();
  const { baseCurrency, loading, error, exchangeRates, supportedCodes } =
    useSelector((state) => state.currency);

  const memoizedGetExchangeRate = useCallback(
    () => getExchangeRates(baseCurrency),
    [baseCurrency]
  );

  useEffect(() => {
    if (baseCurrency !== null) {
      dispatch(memoizedGetExchangeRate(baseCurrency));
    } else {
      dispatch(setBaseCurrency("USD"));
    }
  }, [dispatch, baseCurrency]);

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
