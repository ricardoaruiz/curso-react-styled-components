import React from 'react'
import styled from 'styled-components'
import { Item } from '../Item'

export const ItemsWrapper = styled.div`
  box-shadow: 0px 2px 4px 0px rgba(0,0,0.4);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`

export const Items = (props) => {
  return <ItemsWrapper>
    <Item { ...props } />
    <span>{props.date}</span>
  </ItemsWrapper>
}