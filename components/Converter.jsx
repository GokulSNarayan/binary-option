import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: "#000";
`;
const Text = styled.h2`
  color: "#000";
`;
const Form = styled.form`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  background-color: "#cccccc99";
  border-radius: 8px;
  box-shadow: rgb(35 55 80 / 30%) 0px 6px 12px;
  margin-bottom: 100px;
`;
const Label = styled.label`
  color: "#000";
  margin-right: 5px;
  margin-bottom: 2px;
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

const FormItem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
`;
const FormSection = styled.section`
  display: flex;
  margin: 0 auto;
  width: 80%;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  height: 35px;
  width: 100px;
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
          <FormItem>
            <Label htmlFor="currencyValue">Amount</Label>
            <Input name="currencyValue" />
          </FormItem>
          <FormItem>
            <Label htmlFor="baseCurrency">From</Label>
            <Select name="baseCurrency">
              {data.map((item, idx) => (
                <option key={idx} value={item[0]}>
                  {item[1]}
                </option>
              ))}
            </Select>
          </FormItem>

          <FormItem>
            <Label htmlFor="baseCurrency">To</Label>
            <Select name="baseCurrency">
              {data.map((item, idx) => (
                <option key={idx} value={item[0]}>
                  {item[1]}
                </option>
              ))}
            </Select>
          </FormItem>
          <Button type="submit">Convert</Button>
        </FormSection>
        <FormSection>
          <Text name="convertedValue">{`1 USD equals 45 INR`}</Text>
        </FormSection>
      </Form>
    </>
  );
}
