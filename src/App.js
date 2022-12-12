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
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} .7s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 64px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😝</span>
      </Box>
    </Wrapper>
  );
}

export default App;
