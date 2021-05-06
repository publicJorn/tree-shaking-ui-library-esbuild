import { ThemeProvider } from 'styled-components'
import { withThemes } from '@react-theming/storybook-addon'
import { defaultTheme } from '../src/theme'

export const decorators = [withThemes(ThemeProvider, [defaultTheme])]
