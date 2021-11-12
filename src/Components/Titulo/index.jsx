import styled, { css } from 'styled-components'

const Titulo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.text};
    padding: 25px 0;  
  `};
`

export default Titulo;
