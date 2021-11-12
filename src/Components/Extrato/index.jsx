import React from 'react'
import { extratoLista } from '../../info'
import { Items } from '../Items'

import { Box, Button } from '../ui/index'

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Items key={id} type={type} from={from} value={value} date={date} />
      ))}
      <Button>Ver mais</Button>
    </Box>
  )
}

export default Extrato
