import App from '../components/App';
import * as React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Submit = styled.div`
  padding: 10px;
  border: solid 0.5px #DDD;
  width: 300px;
  height: 50px;
  margin: auto;
  text-align: center;
`;


export default () => (
  <>
    <Title>ToDos</Title>
    <Submit>
      <input name="submit todo"></input>
      <button>提出</button>
    </Submit>
    <App>
      <p>Index Page</p>
    </App>
  </>
);
