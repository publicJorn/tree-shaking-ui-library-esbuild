// components/Button/index.js
import React from "react";
import styled from "styled-components";
var StyledButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;

  ${(p) => {
  switch (p.variant) {
    case "secondary":
      return "background-color: #ccc;";
    default:
      return "background-color: lime;";
  }
}}
`;
var Button = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledButton, {
  ...props
}, "I SHOULD BE HERE");
var Button_default = Button;

// components/Link/index.js
import React2 from "react";
import styled2 from "styled-components";
var StyledA = styled2.a`
  font-family: 'Courier New', Courier, monospace;
  color: #306eff;
`;
var Link = ({children, ...props}) => /* @__PURE__ */ React2.createElement(StyledA, {
  ...props
}, "I MUST NOT BE HERE");
var Link_default = Link;
export {
  Button_default as Button,
  Link_default as Link
};
