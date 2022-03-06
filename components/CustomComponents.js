
import styled from "styled-components";

export const Title = styled.h1`
color: "#000";
`;
export const Text = styled.h2`
color: "#000";
`;
export const Form = styled.form`
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
export const Label = styled.label`
color: "#000";
margin-right: 5px;
margin-bottom: 2px;
`;
export const Select = styled.select`
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

export const Input = styled.input`
height: 35px;
background: white;
color: gray;
padding-left: 5px;
font-size: 14px;
border: none;
margin-right: 5px;
`;

export const FormItem = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-right: 1rem;
`;
export const FormSection = styled.section`
display: flex;
margin: 0 auto;
width: 80%;
align-items: flex-end;
justify-content: center;
margin-bottom: 2rem;
`;

export const Button = styled.button`
height: 35px;
width: 100px;
background-color: #65cca1;
font-size: 14px;
border: none;
justify-self: center;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
`;

export const SubTitle = styled.h3`
  color: "#000";
`;
export const Table = styled.table`
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