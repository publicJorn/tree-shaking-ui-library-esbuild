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

// components/index.js
__markAsModule(exports);
__export(exports, {
  Button: () => Button_default,
  Link: () => Link_default
});

// components/Button/index.js
var import_react = __toModule(require("react"));
var import_styled_components = __toModule(require("styled-components"));
var StyledButton = import_styled_components.default.button`
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
var Button = ({children, ...props}) => /* @__PURE__ */ import_react.default.createElement(StyledButton, {
  ...props
}, "I SHOULD BE HERE");
var Button_default = Button;

// components/Link/index.js
var import_react2 = __toModule(require("react"));
var import_styled_components2 = __toModule(require("styled-components"));
var StyledA = import_styled_components2.default.a`
  font-family: 'Courier New', Courier, monospace;
  color: #306eff;
`;
var Link = ({children, ...props}) => /* @__PURE__ */ import_react2.default.createElement(StyledA, {
  ...props
}, "I MUST NOT BE HERE");
var Link_default = Link;
