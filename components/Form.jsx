import styled from "styled-components";
const Form = styled.form`
  background-color: "#fff";
  width: 50%;
`;

export default function CustomForm({ childen }) {
  return <Form>{childen}</Form>;
}
