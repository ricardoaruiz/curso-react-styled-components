import React from 'react'

import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'

import { FilterIcon } from '../Components/ui'

const images = {
  Restaurante: <FilterIcon src={alimentacao} alt="restaurante" />,
  Utilidade: <FilterIcon src={utilidades} alt="utilidades" />,
  Saude: <FilterIcon src={saude} alt="saude" />,
  Transporte: <FilterIcon src={transporte} alt="transporte" />,
  default: <FilterIcon src={outros} alt="outros" />,
}

export const imageFilter = (type) => {
  return images[type] || images.default
}