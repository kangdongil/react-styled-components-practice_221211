import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display:flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 25px;
  }
  50% {
    transform: rotate(180deg);
    border-radius: 75px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 25px;
  }
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  animation: ${rotationAnimation} 1s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
