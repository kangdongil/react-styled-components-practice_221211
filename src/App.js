import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input`
  background-color: tomato;

`;

function App() {
  return (
    <Father as="header">
      <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required />
    </Father>
  );
}

export default App;
