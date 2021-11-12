import React from 'react'

import themeOn from '../../assets/themeOn.svg';
import themeOff from '../../assets/themeOff.svg';
import { Icon } from '../ui'

const light = <Icon src={themeOn} alt="Tema claro" />
const dark = <Icon src={themeOff} alt="Tema escuro" />

export const ThemeSwitcher = ({ isThemeOn }) => (isThemeOn ? light : dark)

