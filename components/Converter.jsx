import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getBaseCurrency,
  getExchangeRates,
  setBaseCurrency,
  getSupportedCodes,
  getConversionPair,
} from "../src/redux/actions/currency";
import {
  Form,
  Title,
  FormSection,
  Button,
  FormItem,
  Input,
  Label,
  Select,
  Text,
} from "./CustomComponents";

const apiUrl = "https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee/";

export default function Converter() {
  const dispatch = useDispatch();
  const { loading, error, supportedCodes, conversionPairData } = useSelector(
    (state) => state.currency
  );
  const [baseCode, setBaseCode] = useState(conversionPairData?.base ?? "");
  const [targetCode, setTargetCode] = useState(
    conversionPairData?.target ?? ""
  );
  const [amount, setAmount] = useState(conversionPairData?.amount ?? 1);

  useEffect(() => {
    if (supportedCodes === null) {
      dispatch(getSupportedCodes());
    }
  }, [dispatch]);

  const handleConvert = (event) => {
    event.preventDefault();
    dispatch(getConversionPair(baseCode, targetCode, amount));
  };
  return (
    <>
      <Title>Currency Converter</Title>
      <Form onSubmit={handleConvert}>
        <FormSection>
          <FormItem>
            <Label htmlFor="currencyValue">Amount</Label>
            <Input
              name="currencyValue"
              type={"number"}
              pattern="[0-9]*"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="baseCurrency">From</Label>
            <Select
              name="targetCurrency"
              value={baseCode}
              onChange={(e) => setBaseCode(e.target.value)}
            >
              <option value="">Select Base Currency</option>
              {supportedCodes !== null
                ? supportedCodes.map((item, idx) => (
                    <option key={idx} value={item[0]}>
                      {item[1]}
                    </option>
                  ))
                : null}
            </Select>
          </FormItem>

          <FormItem>
            <Label htmlFor="targetCurrency">To</Label>
            <Select
              name="targetCurrency"
              value={targetCode}
              onChange={(e) => setTargetCode(e.target.value)}
            >
              <option value="">Select Target Currency</option>

              {supportedCodes !== null
                ? supportedCodes.map((item, idx) => (
                    <option key={idx} value={item[0]}>
                      {item[1]}
                    </option>
                  ))
                : null}
            </Select>
          </FormItem>
          <Button type="submit">Convert</Button>
        </FormSection>
        <FormSection>
          {error !== null ? <h2>Error while fetching! Try again</h2> : null}
          {conversionPairData !== null ? (
            <Text name="convertedValue">{`${conversionPairData?.amount} ${
              conversionPairData?.base
            } equals ${conversionPairData?.convertedValue ?? 0} ${
              conversionPairData?.target
            }`}</Text>
          ) : null}
        </FormSection>
      </Form>
    </>
  );
}
