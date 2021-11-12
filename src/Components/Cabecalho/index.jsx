import React from "react";
import styled, { css } from 'styled-components'
import bank_logo from "../../assets/images/bank_logo.svg";

import * as variables from '../ui/variables'

const StyledHeader = styled.nav`
  background-color: ${variables.primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const Button = styled.a`
  ${({ secondary = false }) => css`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    color: ${secondary ? variables.primaryColor : 'white'};
    background: ${secondary ? 'white' : 'transparent'}
  `}

`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Button href="https://google.com">
          Ajuda
        </Button>
        <Button href="https://google.com" secondary>
          Sair
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
