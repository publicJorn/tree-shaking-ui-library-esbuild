import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withThemes } from 'storybook-addon-themes/react'
import { defaultTheme, darkTheme } from '../src/theme'
import GlobalStyles from '../src/components/GlobalStyles'

addDecorator(withThemes)

const Decorator = ({ themes, themeName, children }) => {
  const theme = themes.find((t) => t.name === themeName)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export const parameters = {
  themes: {
    default: 'default',
    list: [
      { ...defaultTheme, color: defaultTheme.tokens.colorBackground },
      { ...darkTheme, color: darkTheme.tokens.colorBackground }
    ],
    clearable: false,
    Decorator,
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  }
}
