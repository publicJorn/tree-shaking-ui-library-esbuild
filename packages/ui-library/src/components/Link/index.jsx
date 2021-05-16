import styled from 'styled-components'

const StyledA = styled.a`
  font-family: 'Courier New', Courier, monospace;
  color: ${(p) => p.theme.colorLink};
`

const Link = ({ children, ...props }) => <StyledA {...props}>I MUST NOT BE IN APP - {children}</StyledA>

export default Link
