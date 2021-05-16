import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyles } from 'ui-library'

const PageWrapper = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles p={defaultTheme} />
    {children}
  </ThemeProvider>
)

export default PageWrapper
