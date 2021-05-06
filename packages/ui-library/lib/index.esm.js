// build/global-inject.js
import * as React from "react";

// src/components/Button/index.jsx
import {oneOf} from "prop-types";
import styled from "styled-components";
var getColor = (p) => {
  switch (p.variant) {
    case "secondary":
      return p.theme.colorSecondary;
    case "primary":
    default:
      return p.theme.colorPrimary;
  }
};
var StyledButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(p) => getColor(p)};
`;
var Button = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledButton, {
  ...props
}, "I SHOULD BE IN APP - ", children);
Button.propTypes = {
  variant: oneOf(["", "primary", "secondary"])
};
Button.defaultProps = {
  variant: ""
};
var Button_default = Button;

// src/components/Link/index.jsx
import styled2 from "styled-components";
var StyledA = styled2.a`
  font-family: 'Courier New', Courier, monospace;
  color: ${(p) => p.theme.colorLink};
`;
var Link = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledA, {
  ...props
}, "I MUST NOT BE IN APP - ", children);
var Link_default = Link;

// src/theme/default.js
var default_default = {
  colorPrimary: "lime",
  colorSecondary: "#ccc",
  colorLink: "#306eff"
};
export {
  Button_default as Button,
  Link_default as Link,
  default_default as defaultTheme
};
