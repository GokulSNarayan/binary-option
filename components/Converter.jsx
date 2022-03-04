import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: "#000";
`;
const Text = styled.h2`
  color: "#000";
`;
const Form = styled.form`
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: "#fff";
  width: 75%;
  margin: 0 auto;
`;
const Label = styled.label`
  color: "#000";
  margin-right: 5px;
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

const Input = styled.input`
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-right: 5px;
`;

const FormSection = styled.section`
  min-width: 75%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  height: 35px;
  width: 100px;
  margin-bottom: 20px;
  background-color: #65cca1;
  font-size: 14px;
  border: none;
  justify-self: center;
`;

const apiUrl = "https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee/";

export default function Converter() {
  const data = [
    ["AED", "UAE Dirham"],
    ["AFN", "Afghan Afghani"],
    ["ALL", "Albanian Lek"],
  ];

  const handleConvert = (event) => {
    event.preventDefault();
    console.log("button clicked");
  };
  return (
    <>
      <Title>Currency Converter</Title>
      <Form onSubmit={handleConvert}>
        <FormSection>
          <Label for="baseCurrency">Base Currency</Label>
          <Select name="baseCurrency">
            {data.map((item, idx) => (
              <option key={idx} value={item[0]}>
                {item[1]}
              </option>
            ))}
          </Select>
          <Label for="currencyValue">Value</Label>
          <Input name="currencyValue" />
        </FormSection>
        <FormSection>
          <Label for="baseCurrency">Target Currency</Label>
          <Select name="baseCurrency">
            {data.map((item, idx) => (
              <option key={idx} value={item[0]}>
                {item[1]}
              </option>
            ))}
          </Select>
        </FormSection>
        <Button type="submit">Convert</Button>
      </Form>
      <Label for="convertedValue">Converted Value</Label>
      <Text name="convertedValue">45</Text>
    </>
  );
}
