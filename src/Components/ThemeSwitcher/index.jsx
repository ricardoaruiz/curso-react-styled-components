import React from 'react'

import themeOff from '../../assets/images/themeOff.svg';
import themeOn from '../../assets/images/themeOn.svg';
import { Icon } from '../ui'

const light = <Icon src={themeOn} alt="Tema claro" />
const dark = <Icon src={themeOff} alt="Tema escuro" />

export const ThemeSwitcher = ({ isThemeOn }) => (isThemeOn ? light : dark)

