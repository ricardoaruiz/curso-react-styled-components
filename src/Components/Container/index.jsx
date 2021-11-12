import React from "react";
import styled, { css } from 'styled-components'

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.body};
    min-height: 90vh;
    padding: 0px 15vw;

    @media (max-width: 800px) {
      flex-direction: column;
    }  
  `};
}

`

const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${theme.text};
  `};
`

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Extrato />
      </Content>
    </Container>
  );
};

