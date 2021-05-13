import { ThemeProvider } from 'styled-components'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { defaultTheme, darkTheme } from '../src/theme'
import GlobalStyles from '../src/components/GlobalStyles'

const themes = [defaultTheme, darkTheme]

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  withThemesProvider(themes, ThemeProvider),
]
