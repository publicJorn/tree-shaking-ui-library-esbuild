var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// src/index.js
__markAsModule(exports);
__export(exports, {
  Button: () => Button_default,
  Link: () => Link_default,
  defaultTheme: () => default_default
});

// build/global-inject.js
var React = __toModule(require("react"));

// src/components/Button/index.jsx
var import_prop_types = __toModule(require("prop-types"));
var import_styled_components = __toModule(require("styled-components"));
var getColor = (p) => {
  switch (p.variant) {
    case "secondary":
      return p.theme.colorSecondary;
    case "primary":
    default:
      return p.theme.colorPrimary;
  }
};
var StyledButton = import_styled_components.default.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(p) => getColor(p)};
`;
var Button = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledButton, {
  ...props
}, "I SHOULD BE IN APP - ", children);
Button.propTypes = {
  variant: (0, import_prop_types.oneOf)(["", "primary", "secondary"])
};
Button.defaultProps = {
  variant: ""
};
var Button_default = Button;

// src/components/Link/index.jsx
var import_styled_components2 = __toModule(require("styled-components"));
var StyledA = import_styled_components2.default.a`
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
