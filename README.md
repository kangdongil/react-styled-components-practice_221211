## 0.0 설치하기
```shell
    npx create-react-app . # CRA 설치하기
    npm i styled-components # Styled-Component 설치하기
```

## 1.0 Styled-Component 선언하기
  ```javascript
  import styled from "styled-components"; // Styled-Component를 import하기

  const StyledComponent = styled.HTML_TAG`CSS_CODE`;
  
  <StyledComponent>
    ...
  </StyleComponent>
  ```
  1. `styled`를 import한다
  2. 어떤 `HTML Tag<>`를 사용할지 styled의 method에 설명한다
  3. `BackTick`(`\&grave;`) 안에 `CSS`코드를 작성한다
  4. `<Component>`를 사용한다
