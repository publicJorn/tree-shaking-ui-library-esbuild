var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
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

// build/global-inject.js
var React;
var init_global_inject = __esm(() => {
  React = __toModule(require("react"));
});

// ../../node_modules/styled-normalize/dist/index.js
var require_dist = __commonJS((exports) => {
  init_global_inject();
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Normalize = exports.normalize = void 0;
  var _styledComponents = require("styled-components");
  var normalize2 = (0, _styledComponents.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);
  exports.normalize = normalize2;
  var Normalize = (0, _styledComponents.createGlobalStyle)(normalize2);
  exports.Normalize = Normalize;
  var _default = normalize2;
  exports.default = _default;
});

// src/index.js
__markAsModule(exports);
__export(exports, {
  Button: () => Button_default,
  GlobalStyles: () => GlobalStyles_default,
  Link: () => Link_default,
  darkTheme: () => dark_default,
  defaultTheme: () => default_default
});
init_global_inject();

// src/components/Button/index.jsx
init_global_inject();
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

// src/components/GlobalStyles/index.js
init_global_inject();
var import_styled_components3 = __toModule(require("styled-components"));
var import_styled_normalize = __toModule(require_dist());

// src/mediaQueries/index.js
init_global_inject();
var import_styled_components2 = __toModule(require("styled-components"));

// src/theme/parts/breakpoints.js
init_global_inject();
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992
};
var breakpoints_default = breakpoints;

// src/mediaQueries/index.js
var keys = Object.keys(breakpoints_default);
var step = 5;
var up = (key) => `@media (min-width: ${breakpoints_default[key]}px)`;
var down = (key) => {
  const nextKey = keys[keys.indexOf(key) + 1];
  if (!nextKey)
    return up(keys[0]);
  return `@media (max-width: ${breakpoints_default[nextKey] - step / 100}px)`;
};
var only = (key) => {
  const nextKey = keys[keys.indexOf(key) + 1];
  if (!nextKey)
    return up(key);
  return `@media (min-width: ${breakpoints_default[key]}px) and (max-width: ${breakpoints_default[nextKey] - step / 100}px)`;
};
var queryFactory = (args, query) => import_styled_components2.css`
  ${query} {
    ${(0, import_styled_components2.css)(...args)}
  }
`;
var mediaQueries = Object.keys(breakpoints_default).reduce((accumulator, label) => ({
  ...accumulator,
  [`${label}Down`]: (...args) => queryFactory(args, down(label)),
  [`${label}`]: (...args) => queryFactory(args, only(label)),
  [`${label}Up`]: (...args) => queryFactory(args, up(label))
}), {});
var mediaQueries_default = mediaQueries;

// src/components/GlobalStyles/index.js
var GlobalStyles_default = import_styled_components3.createGlobalStyle`
  ${import_styled_normalize.normalize}

  html {
    background-color: ${(p) => p.theme.tokens.colorBackground};
    color: ${(p) => p.theme.colorText};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${(p) => p.theme.tokens.baseFontSize};
    font-weight: ${(p) => p.theme.tokens.fontWeightRegular};
    line-height: ${(p) => p.theme.tokens.lineHeightText};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  h1 {
    line-height: ${(p) => p.theme.tokens.lineHeightHeading};
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    font-size: ${(p) => p.theme.tokens.fontSizeXXLarge};
    margin: 0 0 ${(p) => p.theme.tokens.spacing05} 0;

    ${mediaQueries_default.xs`
      font-size: ${(p) => p.theme.tokens.fontSizeXLarge};
    `}
  }

  h2 {
    line-height: ${(p) => p.theme.tokens.lineHeightHeading};
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    font-size: ${(p) => p.theme.tokens.fontSizeXLarge};
    margin: ${(p) => p.theme.tokens.spacing09} 0
      ${(p) => p.theme.tokens.spacing04} 0;

    ${mediaQueries_default.xs`
      font-size: ${(p) => p.theme.tokens.fontSizeLarge};
      margin-top: ${(p) => p.theme.tokens.spacing07};
    `}
  }
 
  h3 {
    line-height: ${(p) => p.theme.tokens.lineHeightHeading};
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    font-size: ${(p) => p.theme.tokens.fontSizeLarge};
    margin: ${(p) => p.theme.tokens.spacing07} 0
      ${(p) => p.theme.tokens.spacing04} 0;

    ${mediaQueries_default.xs`
      font-size: ${(p) => p.theme.tokens.fontSizeMedium};
      margin-top: ${(p) => p.theme.tokens.spacing05};
    `}
  }

  p {
    font-size: ${(p) => p.theme.tokens.fontSizeMedium};
    margin: 0 0 ${(p) => p.theme.tokens.spacing05} 0;
  }
  
  small {
    font-size: ${(p) => p.theme.tokens.fontSizeSmall};
    color: ${(p) => p.theme.colorTextLabel};
  }
  
  a {
    text-decoration-skip-ink: auto;
    color: ${(p) => p.theme.colorTextLink};
    
    &:hover,
    &:active {
      color: ${(p) => p.theme.colorTextLinkHover};
    }
  }
  
  a[disabled] {
    pointer-events: none;
  }
`;

// src/components/Link/index.jsx
init_global_inject();
var import_styled_components4 = __toModule(require("styled-components"));
var StyledA = import_styled_components4.default.a`
  font-family: 'Courier New', Courier, monospace;
  color: ${(p) => p.theme.colorLink};
`;
var Link = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledA, {
  ...props
}, "I MUST NOT BE IN APP - ", children);
var Link_default = Link;

// src/theme/index.js
init_global_inject();

// src/theme/default.js
init_global_inject();

// src/theme/parts/spacings.js
init_global_inject();
var spacings = {
  baseFontSize: "16px",
  spacing01: "0.125rem",
  spacing02: "0.25rem",
  spacing03: "0.5rem",
  spacing04: "0.75rem",
  spacing05: "1rem",
  spacing06: "1.5rem",
  spacing07: "2rem",
  spacing08: "2.5rem",
  spacing09: "3rem",
  spacing10: "4rem",
  spacing11: "5rem",
  spacing12: "6rem",
  lineHeightText: "150%",
  lineHeightHeading: "125%",
  fontWeightRegular: "500",
  fontWeightSemiBold: "600",
  fontWeightBold: "700",
  fontSizeSmall: "0.875rem",
  fontSizeMedium: "1rem",
  fontSizeLarge: "1.125rem",
  fontSizeXLarge: "1.5rem",
  fontSizeXXLarge: "2rem",
  iconSizeSmall: "1rem",
  iconSizeDefault: "1.25rem",
  iconSizeLarge: "1.5rem",
  iconSizeXLarge: "2rem"
};
var spacings_default = spacings;

// src/theme/parts/palletteGray.js
init_global_inject();
var palletteGray = {
  colorPaletteGray50: "#FAFAFA",
  colorPaletteGray100: "#F5F5F5",
  colorPaletteGray200: "#EEEEEE",
  colorPaletteGray300: "#E0E0E0",
  colorPaletteGray400: "#BDBDBD",
  colorPaletteGray500: "#9E9E9E",
  colorPaletteGray600: "#757575",
  colorPaletteGray700: "#616161",
  colorPaletteGray800: "#424242",
  colorPaletteGray900: "#212121"
};
var palletteGray_default = palletteGray;

// src/theme/default.js
var tokens = {
  ...spacings_default,
  ...palletteGray_default,
  colorBrand1: "#FFBC2C",
  colorBrand2: "#E0E4EA",
  colorBrand3: "#262D30",
  colorBrand4: "#474E57",
  colorInfo: "#0B71A1",
  colorInfoLight: "#D3F3FD",
  colorWarning: "#FFBC2C",
  colorWarningLight: "#FCF8DA",
  colorError: "#F02B41",
  colorErrorLight: "#FFDDE2",
  colorSuccess: "#39870C",
  colorSuccessLight: "#DCE8D1",
  colorBackground: "#FFFFFF",
  colorBackgroundAlt: palletteGray_default.colorPaletteGray100,
  colorFocus: "#0B71A1"
};
var theme = {
  name: "default",
  tokens,
  breakpoints: breakpoints_default
};
theme.colorText = tokens.colorPaletteGray900;
theme.colorTextInverse = tokens.colorPaletteGray50;
theme.colorTextLabel = tokens.colorPaletteGray600;
theme.colorTextDisabled = "rgba(0, 0, 0, 0.3)";
theme.colorTextLink = "#0B71A1";
theme.colorTextLinkHover = "#005282";
theme.colorTextLinkDisabled = "rgba(0, 0, 0, 0.2)";
theme.colorAlertInfo = tokens.colorInfo;
theme.colorAlertInfoBackground = tokens.colorInfoLight;
theme.colorAlertWarning = tokens.colorWarning;
theme.colorAlertWarningBackground = tokens.colorWarningLight;
theme.colorAlertError = tokens.colorError;
theme.colorAlertErrorBackground = tokens.colorErrorLight;
theme.colorAlertSuccess = tokens.colorSuccess;
theme.colorAlertSuccessBackground = tokens.colorSuccessLight;
theme.colorBackgroundButtonPrimary = tokens.colorBrand1;
theme.colorBackgroundButtonPrimaryHover = "#E5A827";
theme.colorBackgroundButtonPrimaryDisabled = "rgba(0, 0, 0, 0.1)";
theme.colorTextButtonPrimary = theme.colorText;
theme.colorTextButtonPrimaryDisabled = theme.colorTextDisabled;
theme.colorBackgroundButtonSecondary = tokens.colorBrand2;
theme.colorBackgroundButtonSecondaryHover = "#CCCFD5";
theme.colorBackgroundButtonSecondaryDisabled = "rgba(0, 0, 0, 0.1)";
theme.colorBackgroundButtonSecondarySelected = "#0B71A1";
theme.colorTextButtonSecondary = theme.colorText;
theme.colorTextButtonSecondaryDisabled = theme.colorTextDisabled;
theme.colorTextButtonSecondarySelected = theme.colorTextInverse;
theme.colorBackgroundButtonDanger = theme.colorAlertError;
theme.colorBackgroundButtonDangerHover = "#D7263A";
theme.colorBackgroundButtonDangerDisabled = "rgba(0, 0, 0, 0.1)";
theme.colorTextButtonDanger = theme.colorTextInverse;
theme.colorTextButtonDangerDisabled = "rgba(0, 0, 0, 0.3)";
theme.colorTextButtonLink = theme.colorTextLink;
theme.colorTextButtonLinkHover = theme.colorTextLinkHover;
theme.colorTextButtonLinkDisabled = theme.colorTextLinkDisabled;
theme.colorBackgroundInput = "#ffffff";
theme.colorBackgroundInputDisabled = "rgba(0, 0, 0, 0.05)";
theme.colorBorderInput = tokens.colorPaletteGray500;
theme.colorBorderInputDisabled = "transparent";
theme.colorBorderInputError = tokens.colorError;
theme.colorBorderInputFocus = tokens.colorFocus;
theme.colorTextInputLabel = tokens.colorPaletteGray800;
theme.colorTextInputLabelDisabled = "rgba(0, 0, 0, 0.2)";
theme.colorTextInputPlaceholder = tokens.colorPaletteGray600;
theme.colorTextInputDisabled = theme.colorTextDisabled;
theme.colorTextInputError = tokens.colorError;
theme.colorBackgroundChoiceSelected = "#0B71A1";
theme.colorBackgroundChoiceDisabled = "rgba(0, 0, 0, 0.1)";
theme.colorBorderChoice = tokens.colorPaletteGray500;
theme.colorBorderChoiceFocus = tokens.colorFocus;
theme.colorBackgroundDropdown = theme.colorBackgroundInput;
theme.colorBackgroundDropdownHover = tokens.colorPaletteGray200;
theme.colorBackgroundDropdownActive = tokens.colorPaletteGray400;
theme.colorBackgroundDropdownSelected = tokens.colorPaletteGray300;
theme.colorBorderDropdownFocus = tokens.colorFocus;
theme.colorBackgroundSwitch = tokens.colorPaletteGray400;
theme.colorBackgroundSwitchChecked = "#0B71A1";
theme.colorBackgroundSwitchDisabled = tokens.colorPaletteGray200;
theme.colorBackgroundSwitchIndicatorDisabled = tokens.colorPaletteGray400;
theme.colorBackgroundDrawer = tokens.colorBackground;
theme.colorBackgroundSelect = theme.colorBackgroundInput;
theme.colorBackgroundSelectOptionHover = "rgba(0, 0, 0, 0.05)";
theme.colorBackgroundSelectOptionSelect = "rgba(0, 0, 0, 0.2)";
theme.colorBackgroundSelectSeparator = "hsl(0, 0%, 80%)";
theme.colorBackgroundSelectDisabled = "rgba(0, 0, 0, 0.05)";
theme.colorBorderSelect = tokens.colorPaletteGray500;
theme.colorBorderSelectDisabled = "transparent";
theme.colorBorderSelectError = tokens.colorError;
theme.colorBorderSelectFocus = tokens.colorFocus;
theme.colorTextSelectLabel = tokens.colorPaletteGray800;
theme.colorTextSelectLabelDisabled = "rgba(0, 0, 0, 0.2)";
theme.colorTextSelectPlaceholder = tokens.colorPaletteGray600;
theme.colorTextSelectDisabled = theme.colorTextDisabled;
theme.colorTextSelectError = tokens.colorError;
var default_default = theme;

// src/theme/dark.js
init_global_inject();
var tokens2 = {
  ...spacings_default,
  ...palletteGray_default,
  colorBrand1: "#FFBC2C",
  colorBrand2: "#33373E",
  colorBrand3: "#474E57",
  colorBrand4: "#36C6FF",
  colorInfo: "#36C6FF",
  colorInfoLight: "#6CA9C6",
  colorWarning: "#FFBC2C",
  colorWarningLight: "#FFD680",
  colorError: "#ff646e",
  colorErrorLight: "#F67F8D",
  colorSuccess: "#75A25B",
  colorSuccessLight: "#88B76D",
  colorBackground: palletteGray_default.colorPaletteGray900,
  colorBackgroundAlt: "#313131",
  colorFocus: "#36C6FF"
};
var theme2 = {
  name: "dark",
  tokens: tokens2,
  breakpoints: breakpoints_default
};
theme2.colorText = tokens2.colorPaletteGray300;
theme2.colorTextInverse = tokens2.colorPaletteGray900;
theme2.colorTextLabel = tokens2.colorPaletteGray500;
theme2.colorTextDisabled = "rgba(255, 255, 255, 0.3)";
theme2.colorTextLink = tokens2.colorBrand4;
theme2.colorTextLinkHover = "#82CFE8";
theme2.colorTextLinkDisabled = "rgba(255, 255, 255, 0.2)";
theme2.colorAlertInfo = tokens2.colorInfo;
theme2.colorAlertInfoBackground = "#434950";
theme2.colorAlertWarning = tokens2.colorWarning;
theme2.colorAlertWarningBackground = "#4D4941";
theme2.colorAlertError = tokens2.colorError;
theme2.colorAlertErrorBackground = "#4F4344";
theme2.colorAlertSuccess = tokens2.colorSuccess;
theme2.colorAlertSuccessBackground = "#454B42";
theme2.colorBackgroundButtonPrimary = tokens2.colorBrand1;
theme2.colorBackgroundButtonPrimaryHover = "#FFD06B";
theme2.colorBackgroundButtonPrimaryDisabled = "rgba(255, 255, 255, 0.1)";
theme2.colorTextButtonPrimary = theme2.colorTextInverse;
theme2.colorTextButtonPrimaryDisabled = theme2.colorTextDisabled;
theme2.colorBackgroundButtonSecondary = "rgba(255, 255, 255, 0.3)";
theme2.colorBackgroundButtonSecondaryHover = "rgba(255, 255, 255, 0.4)";
theme2.colorBackgroundButtonSecondaryDisabled = "rgba(255, 255, 255, 0.1)";
theme2.colorBackgroundButtonSecondarySelected = tokens2.colorBrand4;
theme2.colorTextButtonSecondary = tokens2.colorPaletteGray100;
theme2.colorTextButtonSecondaryDisabled = theme2.colorTextDisabled;
theme2.colorTextButtonSecondarySelected = theme2.colorTextInverse;
theme2.colorBackgroundButtonDanger = theme2.colorAlertError;
theme2.colorBackgroundButtonDangerHover = "#F46B7A";
theme2.colorBackgroundButtonDangerDisabled = "rgba(255, 255, 255, 0.1)";
theme2.colorTextButtonDanger = theme2.colorTextInverse;
theme2.colorTextButtonDangerDisabled = "rgba(255, 255, 255, 0.3)";
theme2.colorTextButtonLink = theme2.colorTextLink;
theme2.colorTextButtonLinkHover = theme2.colorTextLinkHover;
theme2.colorTextButtonLinkDisabled = theme2.colorTextLinkDisabled;
theme2.colorBackgroundInput = "rgba(255, 255, 255, 0.1)";
theme2.colorBackgroundInputDisabled = "rgba(255, 255, 255, 0.05)";
theme2.colorBorderInput = "transparent";
theme2.colorBorderInputDisabled = "transparent";
theme2.colorBorderInputError = tokens2.colorError;
theme2.colorBorderInputFocus = tokens2.colorFocus;
theme2.colorTextInputLabel = tokens2.colorPaletteGray400;
theme2.colorTextInputLabelDisabled = "rgba(255, 255, 255, 0.3)";
theme2.colorTextInputPlaceholder = "rgba(255, 255, 255, 0.6)";
theme2.colorTextInputDisabled = theme2.colorTextDisabled;
theme2.colorTextInputError = tokens2.colorError;
theme2.colorBackgroundChoiceSelected = tokens2.colorPaletteGray300;
theme2.colorBackgroundChoiceDisabled = "rgba(255, 255, 255, 0.1)";
theme2.colorBorderChoice = tokens2.colorPaletteGray500;
theme2.colorBorderChoiceFocus = tokens2.colorFocus;
theme2.colorBackgroundDropdown = theme2.colorBackgroundInput;
theme2.colorBackgroundDropdownHover = "#515151";
theme2.colorBackgroundDropdownActive = tokens2.colorPaletteGray600;
theme2.colorBackgroundDropdownSelected = tokens2.colorPaletteGray700;
theme2.colorBorderDropdownFocus = tokens2.colorFocus;
theme2.colorBackgroundSwitch = tokens2.colorPaletteGray600;
theme2.colorBackgroundSwitchChecked = tokens2.colorBrand4;
theme2.colorBackgroundSwitchDisabled = "rgba(255, 255, 255, 0.1)";
theme2.colorBackgroundSwitchIndicatorDisabled = "rgba(255, 255, 255, 0.2)";
theme2.colorBackgroundDrawer = tokens2.colorBackgroundAlt;
theme2.colorBackgroundSelect = "#383838";
theme2.colorBackgroundSelectOptionHover = "rgba(255, 255, 255, 0.1)";
theme2.colorBackgroundSelectOptionSelect = "rgba(255, 255, 255, 0.2)";
theme2.colorBackgroundSelectDisabled = "rgba(255, 255, 255, 0.1)";
theme2.colorBackgroundSelectSeparator = "rgba(255, 255, 255, 0.2)";
theme2.colorBorderSelect = "transparent";
theme2.colorBorderSelectDisabled = "transparent";
theme2.colorBorderSelectError = tokens2.colorError;
theme2.colorBorderSelectFocus = tokens2.colorFocus;
theme2.colorTextSelectLabel = tokens2.colorPaletteGray400;
theme2.colorTextSelectLabelDisabled = "rgba(255, 255, 255, 0.3)";
theme2.colorTextSelectPlaceholder = "rgba(255, 255, 255, 0.6)";
theme2.colorTextSelectDisabled = theme2.colorTextDisabled;
theme2.colorTextSelectError = tokens2.colorError;
var dark_default = theme2;
