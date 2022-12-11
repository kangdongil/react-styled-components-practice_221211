## 0.0 환경설정하기
### 0.1 NPM Packages
```shell
    npx create-react-app . # CRA 설치하기
    npm i styled-components # Styled-Component 설치하기
```
### 0.2 VSCode Extension
- `jpoissonnier.vscode-styled-components`
### 0.3 VSCode Settings
```yaml
{
    "emmet.triggerExpansionOnTab": true,
    "editor.formatOnSave": true
}
```

## 1.0 Styled-Component 선언하기
  ```javascript
  import styled from "styled-components";

  const StyledComponent = styled.HTML_TAG`CSS_CODE`;
  
  <StyledComponent>...</StyleComponent>
  ```
  1. `styled`를 import한다
  2. 어떤 `HTML Tag<>`를 사용할지 styled의 method에 설명한다
  3. `BackTick`(`` ` ``) 안에 `CSS`코드를 작성한다
  4. `<Component>`를 사용한다

### 1.1 Styled-Component Adapt&Extend하기
- `Prop`으로 CSS값 받아오기
  ```javascript
  const Box = styled.div`
    background-color: ${props => props.bgColor};
    width: 100px;
    height: 100px;
  `

  ...
  <Box bgColor="teal" />
  ```
  1. CSS값로 받아올 변수를 `Prop`에 제시한다
  2. `${}` 안에 CSS값을 받아올 javascript 코드를 작성한다.
    - `props` 인자 안 `propKey`를 return하는 함수 작성하기

### 1.2 `As` Property
- CSS 스타일은 유지하고 HTML TAG종류만 바꿀 수 있다
```javascript
const Container = styled.div`...`;
const Btn = styled.button`...`;

<Container as="header">
  <Btn as="a" href="/">Log in</Btn>
</Container>
```

### 1.3 `Attrs` Method
- 컨테이너에 동일한 property를 준다
```javascript
const Btn = styled.button.attrs({
  required: true,
  minLength: 15,
})`
  ...
`;
```