import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'ui-library'

const PageWrapper = ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>

export default PageWrapper
