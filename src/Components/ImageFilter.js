import React from 'react'

import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'

import { Icon } from '../Components/ui/index'

const images = {
  Restaurante: <Icon src={alimentacao} alt="restaurante" />,
  Utilidade: <Icon src={utilidades} alt="utilidades" />,
  Saude: <Icon src={saude} alt="saude" />,
  Transporte: <Icon src={transporte} alt="transporte" />,
  default: <Icon src={outros} alt="outros" />,
}

export const imageFilter = (type) => {
  return images[type] || images.default
}