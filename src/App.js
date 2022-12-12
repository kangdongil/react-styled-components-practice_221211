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

const Emoji = styled.span`
    font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} .9s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😝</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
