import React from 'react'
import { extratoLista } from '../../info'

import { Box, Button } from '../ui/index'

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <div key={id}>
          <div>{type}</div>
          <div>{from}</div>
        </div>
      ))}
      <Button>Ver mais</Button>
    </Box>
  )
}

export default Extrato
