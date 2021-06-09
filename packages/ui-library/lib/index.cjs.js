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

// ../../node_modules/react-collapse/lib/Collapse.js
var require_Collapse = __commonJS((exports) => {
  init_global_inject();
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Collapse = void 0;
  var _react = _interopRequireDefault(require("react"));
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var Collapse = /* @__PURE__ */ function(_React$Component) {
    _inherits(Collapse2, _React$Component);
    var _super = _createSuper(Collapse2);
    function Collapse2(props) {
      var _this;
      _classCallCheck(this, Collapse2);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "timeout", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "content", void 0);
      _defineProperty(_assertThisInitialized(_this), "onResize", function() {
        global.clearTimeout(_this.timeout);
        if (!_this.container || !_this.content) {
          return;
        }
        var _this$props = _this.props, isOpened = _this$props.isOpened, checkTimeout = _this$props.checkTimeout;
        var containerHeight = _this.container.clientHeight;
        var contentHeight = _this.content.clientHeight;
        var isFullyOpened = isOpened && contentHeight === containerHeight;
        var isFullyClosed = !isOpened && containerHeight === 0;
        if (isFullyOpened || isFullyClosed) {
          _this.onRest({
            isFullyOpened,
            isFullyClosed,
            isOpened,
            containerHeight,
            contentHeight
          });
        } else {
          _this.onWork({
            isFullyOpened,
            isFullyClosed,
            isOpened,
            containerHeight,
            contentHeight
          });
          _this.timeout = setTimeout(function() {
            return _this.onResize();
          }, checkTimeout);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onRest", function(_ref) {
        var isFullyOpened = _ref.isFullyOpened, isFullyClosed = _ref.isFullyClosed, isOpened = _ref.isOpened, containerHeight = _ref.containerHeight, contentHeight = _ref.contentHeight;
        if (!_this.container || !_this.content) {
          return;
        }
        var hasOpened = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
        var hasClosed = !isOpened && _this.container.style.height === "0px";
        if (hasOpened || hasClosed) {
          _this.container.style.overflow = isOpened ? "initial" : "hidden";
          _this.container.style.height = isOpened ? "auto" : "0px";
          var onRest = _this.props.onRest;
          if (onRest) {
            onRest({
              isFullyOpened,
              isFullyClosed,
              isOpened,
              containerHeight,
              contentHeight
            });
          }
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onWork", function(_ref2) {
        var isFullyOpened = _ref2.isFullyOpened, isFullyClosed = _ref2.isFullyClosed, isOpened = _ref2.isOpened, containerHeight = _ref2.containerHeight, contentHeight = _ref2.contentHeight;
        if (!_this.container || !_this.content) {
          return;
        }
        var isOpenining = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
        var isClosing = !isOpened && _this.container.style.height === "0px";
        if (isOpenining || isClosing) {
          return;
        }
        _this.container.style.overflow = "hidden";
        _this.container.style.height = isOpened ? "".concat(contentHeight, "px") : "0px";
        var onWork = _this.props.onWork;
        if (onWork) {
          onWork({
            isFullyOpened,
            isFullyClosed,
            isOpened,
            containerHeight,
            contentHeight
          });
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onRefContainer", function(container) {
        _this.container = container;
      });
      _defineProperty(_assertThisInitialized(_this), "onRefContent", function(content) {
        _this.content = content;
      });
      if (props.initialStyle) {
        _this.initialStyle = props.initialStyle;
      } else {
        _this.initialStyle = props.isOpened ? {
          height: "auto",
          overflow: "initial"
        } : {
          height: "0px",
          overflow: "hidden"
        };
      }
      return _this;
    }
    _createClass(Collapse2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.onResize();
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var _this$props2 = this.props, theme3 = _this$props2.theme, isOpened = _this$props2.isOpened, children = _this$props2.children;
        return children !== nextProps.children || isOpened !== nextProps.isOpened || Object.keys(theme3).some(function(c) {
          return theme3[c] !== nextProps.theme[c];
        });
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate() {
        if (!this.container || !this.content) {
          return null;
        }
        if (this.container.style.height === "auto") {
          var contentHeight = this.content.clientHeight;
          this.container.style.height = "".concat(contentHeight, "px");
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.onResize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        global.clearTimeout(this.timeout);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props, theme3 = _this$props3.theme, children = _this$props3.children, isOpened = _this$props3.isOpened;
        return /* @__PURE__ */ _react["default"].createElement("div", {
          ref: this.onRefContainer,
          className: theme3.collapse,
          style: this.initialStyle,
          "aria-hidden": !isOpened
        }, /* @__PURE__ */ _react["default"].createElement("div", {
          ref: this.onRefContent,
          className: theme3.content
        }, children));
      }
    }]);
    return Collapse2;
  }(_react["default"].Component);
  exports.Collapse = Collapse;
  _defineProperty(Collapse, "defaultProps", {
    theme: {
      collapse: "ReactCollapse--collapse",
      content: "ReactCollapse--content"
    },
    initialStyle: void 0,
    onRest: void 0,
    onWork: void 0,
    checkTimeout: 50
  });
});

// ../../node_modules/react-collapse/lib/UnmountClosed.js
var require_UnmountClosed = __commonJS((exports) => {
  init_global_inject();
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UnmountClosed = void 0;
  var _react = _interopRequireDefault(require("react"));
  var _Collapse = require_Collapse();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var UnmountClosed = /* @__PURE__ */ function(_React$PureComponent) {
    _inherits(UnmountClosed2, _React$PureComponent);
    var _super = _createSuper(UnmountClosed2);
    function UnmountClosed2(props) {
      var _this;
      _classCallCheck(this, UnmountClosed2);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "onWork", function(_ref) {
        var isOpened = _ref.isOpened, rest = _objectWithoutProperties(_ref, ["isOpened"]);
        _this.setState({
          isResting: false,
          isOpened
        });
        var onWork = _this.props.onWork;
        if (onWork) {
          onWork(_objectSpread({
            isOpened
          }, rest));
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onRest", function(_ref2) {
        var isOpened = _ref2.isOpened, rest = _objectWithoutProperties(_ref2, ["isOpened"]);
        _this.setState({
          isResting: true,
          isOpened,
          isInitialRender: false
        });
        var onRest = _this.props.onRest;
        if (onRest) {
          onRest(_objectSpread({
            isOpened
          }, rest));
        }
      });
      _defineProperty(_assertThisInitialized(_this), "getInitialStyle", function() {
        var _this$state = _this.state, isOpened = _this$state.isOpened, isInitialRender = _this$state.isInitialRender;
        if (isInitialRender) {
          return isOpened ? {
            height: "auto",
            overflow: "initial"
          } : {
            height: "0px",
            overflow: "hidden"
          };
        }
        return {
          height: "0px",
          overflow: "hidden"
        };
      });
      _this.state = {
        isResting: true,
        isOpened: props.isOpened,
        isInitialRender: true
      };
      return _this;
    }
    _createClass(UnmountClosed2, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var isOpened = this.props.isOpened;
        if (prevProps.isOpened !== isOpened) {
          this.setState({
            isResting: false,
            isOpened,
            isInitialRender: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state2 = this.state, isResting = _this$state2.isResting, isOpened = _this$state2.isOpened;
        return isResting && !isOpened ? null : /* @__PURE__ */ _react["default"].createElement(_Collapse.Collapse, _extends({}, this.props, {
          initialStyle: this.getInitialStyle(),
          onWork: this.onWork,
          onRest: this.onRest
        }));
      }
    }]);
    return UnmountClosed2;
  }(_react["default"].PureComponent);
  exports.UnmountClosed = UnmountClosed;
  _defineProperty(UnmountClosed, "defaultProps", {
    onWork: void 0,
    onRest: void 0
  });
});

// ../../node_modules/react-collapse/lib/index.js
var require_lib = __commonJS((exports, module2) => {
  init_global_inject();
  "use strict";
  var _require = require_Collapse();
  var Collapse = _require.Collapse;
  var _require2 = require_UnmountClosed();
  var UnmountClosed = _require2.UnmountClosed;
  module2.exports = UnmountClosed;
  UnmountClosed.Collapse = Collapse;
  UnmountClosed.UnmountClosed = UnmountClosed;
});

// src/index.js
__markAsModule(exports);
__export(exports, {
  Alert: () => Alert_default,
  Button: () => Button_default,
  CGLogo: () => CGLogo_default,
  Collapsible: () => Collapsible_default,
  GitLabLogo: () => GitLabLogo_default,
  Link: () => Link_default,
  NLXLogo: () => NLXLogo_default,
  Spinner: () => Spinner_default,
  darkTheme: () => dark_default,
  defaultTheme: () => default_default,
  mediaQueries: () => mediaQueries_default
});
init_global_inject();

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

// src/theme/parts/breakpoints.js
init_global_inject();
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992
};
var breakpoints_default = breakpoints;

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

// src/mediaQueries/index.js
init_global_inject();
var import_styled_components = __toModule(require("styled-components"));
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
var queryFactory = (args, query) => import_styled_components.css`
  ${query} {
    ${(0, import_styled_components.css)(...args)}
  }
`;
var mediaQueries = Object.keys(breakpoints_default).reduce((accumulator, label) => ({
  ...accumulator,
  [`${label}Down`]: (...args) => queryFactory(args, down(label)),
  [`${label}`]: (...args) => queryFactory(args, only(label)),
  [`${label}Up`]: (...args) => queryFactory(args, up(label))
}), {});
var mediaQueries_default = mediaQueries;

// src/components/Alert/index.js
init_global_inject();
var import_react2 = __toModule(require("react"));
var import_prop_types3 = __toModule(require("prop-types"));

// src/components/Alert/propTypeAction.js
init_global_inject();

// src/components/Alert/ActionButton/index.js
init_global_inject();
var import_react = __toModule(require("react"));
var import_prop_types2 = __toModule(require("prop-types"));

// src/components/Button/index.jsx
init_global_inject();
var import_prop_types = __toModule(require("prop-types"));
var import_styled_components2 = __toModule(require("styled-components"));
var getColor = (p) => {
  switch (p.variant) {
    case "secondary":
      return p.theme.colorSecondary;
    case "primary":
    default:
      return p.theme.colorPrimary;
  }
};
var StyledButton = import_styled_components2.default.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(p) => getColor(p)};
`;
var Button = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledButton, {
  ...props
}, "I SHOULD BE IN APP - ", children);
Button.propTypes = {
  children: import_prop_types.node,
  variant: (0, import_prop_types.oneOf)(["", "primary", "secondary"])
};
Button.defaultProps = {
  variant: ""
};
var Button_default = Button;

// src/components/Alert/ActionButton/index.js
var ActionButton = (props) => {
  const type = props.onClick ? {type: "button"} : {};
  return /* @__PURE__ */ import_react.default.createElement(Button_default, {
    size: "small",
    variant: "link",
    ...type,
    ...props
  });
};
ActionButton.propTypes = {
  onClick: import_prop_types2.func
};
var ActionButton_default = ActionButton;

// src/components/Alert/propTypeAction.js
var propTypeAction = (components, key, componentName) => {
  let error = "";
  components.some((component) => {
    if (component.type.name !== ActionButton_default.name) {
      const givenType = typeof component.type === "string" ? component.type : component.type.name || "unknown";
      error = `Invalid component \`${givenType}\` passed to prop \`actions\` in \`${componentName}\`. Only \`Alert.ActionButton\` is allowed.`;
      return true;
    }
    return false;
  });
  if (error)
    return new Error(error);
};
var propTypeAction_default = propTypeAction;

// src/components/Alert/index.styles.js
init_global_inject();
var import_styled_components7 = __toModule(require("styled-components"));

// src/components/Alert/info.style.js
init_global_inject();
var import_styled_components3 = __toModule(require("styled-components"));
var getSvg = (fillColor) => `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>`;
var style = (p) => {
  return import_styled_components3.css`
    background-color: ${p.theme.colorAlertInfoBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(getSvg(p.theme.colorAlertInfo))});
    border-left-color: ${p.theme.colorAlertInfo};
  `;
};
var info_style_default = style;

// src/components/Alert/warning.style.js
init_global_inject();
var import_styled_components4 = __toModule(require("styled-components"));
var getSvg2 = (fillColor) => `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"/></svg>`;
var style2 = (p) => {
  return import_styled_components4.css`
    background-color: ${p.theme.colorAlertWarningBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(getSvg2(p.theme.colorAlertWarning))});
    border-left-color: ${p.theme.colorAlertWarning};
  `;
};
var warning_style_default = style2;

// src/components/Alert/error.style.js
init_global_inject();
var import_styled_components5 = __toModule(require("styled-components"));
var getSvg3 = (fillColor) => `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/></svg>`;
var style3 = (p) => {
  return import_styled_components5.css`
    background-color: ${p.theme.colorAlertErrorBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(getSvg3(p.theme.colorAlertError))});
    border-left-color: ${p.theme.colorAlertError};
  `;
};
var error_style_default = style3;

// src/components/Alert/success.style.js
init_global_inject();
var import_styled_components6 = __toModule(require("styled-components"));
var getSvg4 = (fillColor) => `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>`;
var style4 = (p) => {
  return import_styled_components6.css`
    background-color: ${p.theme.colorAlertSuccessBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(getSvg4(p.theme.colorAlertSuccess))});
    border-left-color: ${p.theme.colorAlertSuccess};
  `;
};
var success_style_default = style4;

// src/components/Alert/index.styles.js
var Container = import_styled_components7.default.div`
  padding: ${(p) => p.theme.tokens.spacing05} ${(p) => p.theme.tokens.spacing05}
    ${(p) => p.theme.tokens.spacing05} 3rem;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 14px 18px;
  border-left: ${(p) => p.theme.tokens.spacing02} solid;

  ${(p) => {
  switch (p.variant) {
    case "info":
      return info_style_default(p);
    case "warning":
      return warning_style_default(p);
    case "error":
      return error_style_default(p);
    case "success":
      return success_style_default(p);
    default:
      return info_style_default(p);
  }
}}
`;
var Title = import_styled_components7.default.p`
  font-weight: ${(p) => p.theme.tokens.fontWeightBold};
  margin: 0;
`;
var Content = import_styled_components7.default.p`
  margin: 0;
`;
var Actions = import_styled_components7.default.p`
  margin: ${(p) => p.theme.tokens.spacing03} 0 0 0;

  button,
  a {
    margin-right: ${(p) => p.theme.tokens.spacing06};
  }
`;

// src/components/Alert/index.js
var Alert = ({title, children, actions, ...props}) => /* @__PURE__ */ import_react2.default.createElement(Container, {
  role: "alert",
  ...props
}, title && title.length > 1 ? /* @__PURE__ */ import_react2.default.createElement(Title, {
  "data-testid": "title"
}, title) : null, /* @__PURE__ */ import_react2.default.createElement(Content, {
  "data-testid": "content"
}, children), actions.length ? /* @__PURE__ */ import_react2.default.createElement(Actions, null, actions) : null);
Alert.propTypes = {
  children: import_prop_types3.node,
  title: import_prop_types3.string,
  variant: (0, import_prop_types3.oneOf)(["info", "warning", "success", "error"]),
  actions: (0, import_prop_types3.arrayOf)(propTypeAction_default)
};
Alert.defaultProps = {
  variant: "info",
  actions: []
};
Alert.ActionButton = ActionButton_default;
var Alert_default = Alert;

// src/components/CGLogo/index.js
init_global_inject();
var import_react3 = __toModule(require("react"));
var CGLogo = ({...props}) => /* @__PURE__ */ import_react3.default.createElement("svg", {
  viewBox: "0 0 282 282",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ import_react3.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ import_react3.default.createElement("circle", {
  fill: "#FFBC2C",
  cx: "141",
  cy: "141",
  r: "141"
}), /* @__PURE__ */ import_react3.default.createElement("path", {
  d: "M120 163.955c7.03 0 12.78 5.724 12.78 12.723 0 2.972-1.062 5.724-3.195 8.057C118.507 195.972 103.594 200 85.705 200 51.413 200 25 172.43 25 138.5S52.053 77 86.777 77c15.124 0 29.397 4.666 40.684 13.78 3.195 2.542 5.539 6.79 5.539 11.027 0 7.419-5.97 13.361-13.421 13.361-3.405 0-6.39-1.057-8.944-3.39-6.6-4.457-15.765-6.79-24.068-6.79-18.319 0-31.74 15.694-31.74 34.14 0 18.446 14.693 34.988 31.95 34.988 10.867 0 16.186-.429 26.412-7.847a11.116 11.116 0 016.81-2.314z",
  fill: "#FFF",
  fillRule: "nonzero"
}), /* @__PURE__ */ import_react3.default.createElement("path", {
  d: "M174.815 139.148c0 18.446 14.687 34.988 31.937 34.988 8.52 0 12.985 0 19.592-3.39V155.26h-10.862c-7.028 0-12.565-5.514-12.565-12.513 0-7 5.537-12.723 12.565-12.723h28.953c7.029 0 12.565 5.723 12.565 12.723v46.444c0 5.723-4.255 9.751-9.581 9.751-4.255 0-7.028-3.18-9.371-6.79l-.64-1.057c-9.161 6.79-18.953 8.904-31.728 8.904-34.28 0-60.68-27.57-60.68-61.5S172.041 77 206.752 77c15.117 0 29.384 4.666 40.667 13.78 3.194 2.542 5.536 6.79 5.536 11.027 0 7.419-5.967 13.361-13.415 13.361-3.404 0-6.388-1.057-8.94-3.39-6.598-4.457-15.759-6.79-24.059-6.79-18.31.02-31.726 15.714-31.726 34.16z",
  fill: "#474E57",
  fillRule: "nonzero"
})));
var CGLogo_default = CGLogo;

// src/components/Collapsible/index.js
init_global_inject();
var import_react5 = __toModule(require("react"));
var import_prop_types5 = __toModule(require("prop-types"));
var import_react_collapse = __toModule(require_lib());

// src/components/Collapsible/index.styles.js
init_global_inject();
var import_styled_components9 = __toModule(require("styled-components"));

// src/components/IconFlippingChevron/index.js
init_global_inject();
var import_prop_types4 = __toModule(require("prop-types"));
var import_styled_components8 = __toModule(require("styled-components"));

// src/components/IconFlippingChevron/IconChevronDown.js
init_global_inject();
var import_react4 = __toModule(require("react"));
var IconChevronDown = (props) => /* @__PURE__ */ import_react4.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "20",
  height: "20",
  ...props
}, /* @__PURE__ */ import_react4.default.createElement("path", {
  d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
}));
var IconChevronDown_default = IconChevronDown;

// src/components/IconFlippingChevron/index.js
var IconFlippingChevron = (0, import_styled_components8.default)(IconChevronDown_default).withConfig({
  shouldForwardProp: (prop, defaultValidator) => !["flipHorizontal", "animationDuration"].includes(prop) && defaultValidator(prop)
})`
  fill: ${(p) => p.theme.colorText};
  transition: ${(p) => p.animationDuration}ms ease-in-out;

  ${(p) => p.flipHorizontal ? import_styled_components8.css`
          transform: rotate(180deg);
        ` : ""}
`;
IconFlippingChevron.propTypes = {
  flipHorizontal: import_prop_types4.bool,
  animationDuration: import_prop_types4.number
};
IconFlippingChevron.defaultProps = {
  animationDuration: 150
};
var IconFlippingChevron_default = IconFlippingChevron;

// src/components/Collapsible/index.styles.js
var Wrapper = import_styled_components9.default.div`
  & .ReactCollapse--collapse {
    transition: ${(p) => p.animate ? "height 300ms" : "none"};
  }
`;
var CollapsibleButton = import_styled_components9.default.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
var CollapsibleTitle = import_styled_components9.default.div`
  flex-grow: 1;
`;
var CollapsibleChevron = (0, import_styled_components9.default)(IconFlippingChevron_default)`
  flex-grow: 0;
  transition: ${(p) => p.animate ? "300ms ease-in-out" : "none"};
`;

// src/components/Collapsible/index.js
var createRandomId = () => `r${Math.random().toString(36).slice(8)}`;
var Collapsible = ({
  title,
  ariaLabel,
  initiallyOpen,
  animate,
  onToggle,
  children
}) => {
  const [isOpen, setIsOpen] = (0, import_react5.useState)(initiallyOpen);
  const [id, setId] = (0, import_react5.useState)();
  const toggle = (0, import_react5.useCallback)(() => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  }, [setIsOpen, isOpen, onToggle]);
  (0, import_react5.useEffect)(() => {
    setId(createRandomId());
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement(Wrapper, {
    animate,
    "data-testid": "collapsible"
  }, /* @__PURE__ */ import_react5.default.createElement(CollapsibleButton, {
    "aria-haspopup": "true",
    "aria-expanded": isOpen,
    "aria-controls": id,
    "aria-label": ariaLabel || title,
    onClick: toggle
  }, /* @__PURE__ */ import_react5.default.createElement(CollapsibleTitle, null, title), /* @__PURE__ */ import_react5.default.createElement(CollapsibleChevron, {
    flipHorizontal: isOpen,
    animate
  })), /* @__PURE__ */ import_react5.default.createElement(import_react_collapse.default, {
    isOpened: isOpen
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    id
  }, children)));
};
Collapsible.propTypes = {
  title: import_prop_types5.node.isRequired,
  ariaLabel: (props) => {
    if (typeof props.title !== "string" && !props.ariaLabel) {
      return new Error("If Collapsible title is not a string, please provide an ariaLabel");
    }
  },
  initiallyOpen: import_prop_types5.bool,
  animate: import_prop_types5.bool,
  onToggle: import_prop_types5.func,
  children: import_prop_types5.node.isRequired
};
var noop = (isOpen) => {
};
Collapsible.defaultProps = {
  initiallyOpen: false,
  animate: true,
  onToggle: noop
};
var Collapsible_default = Collapsible;

// src/components/GitLabLogo/index.js
init_global_inject();
var import_react6 = __toModule(require("react"));
var GitLabLogo = ({...props}) => /* @__PURE__ */ import_react6.default.createElement("svg", {
  viewBox: "0 0 26 24",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ import_react6.default.createElement("g", {
  fillRule: "nonzero",
  fill: "none"
}, /* @__PURE__ */ import_react6.default.createElement("path", {
  d: "M25.962 13.726l-1.454-4.474-2.88-8.866a.495.495 0 0 0-.942 0l-2.881 8.866H8.238L5.358.386a.495.495 0 0 0-.943 0l-2.88 8.866L.08 13.726a.99.99 0 0 0 .36 1.107l12.58 9.141 12.581-9.14a.99.99 0 0 0 .36-1.108",
  fill: "#FC6D26"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  fill: "#E24329",
  d: "M13.021 23.974l4.784-14.722H8.238z"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  fill: "#FC6D26",
  d: "M13.021 23.974L8.238 9.252H1.534z"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  d: "M1.534 9.252L.081 13.726a.99.99 0 0 0 .36 1.107l12.58 9.14L1.534 9.254z",
  fill: "#FCA326"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  d: "M1.534 9.252h6.704L5.358.386a.495.495 0 0 0-.943 0l-2.88 8.866z",
  fill: "#E24329"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  fill: "#FC6D26",
  d: "M13.021 23.974l4.784-14.722h6.704z"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  d: "M24.509 9.252l1.453 4.474a.99.99 0 0 1-.36 1.107l-12.58 9.14 11.487-14.72z",
  fill: "#FCA326"
}), /* @__PURE__ */ import_react6.default.createElement("path", {
  d: "M24.509 9.252h-6.704l2.88-8.866a.495.495 0 0 1 .943 0l2.88 8.866z",
  fill: "#E24329"
})));
var GitLabLogo_default = GitLabLogo;

// src/components/Link/index.jsx
init_global_inject();
var import_prop_types6 = __toModule(require("prop-types"));
var import_styled_components10 = __toModule(require("styled-components"));
var StyledA = import_styled_components10.default.a`
  font-family: 'Courier New', Courier, monospace;
  color: ${(p) => p.theme.colorLink};
`;
var Link = ({children, ...props}) => /* @__PURE__ */ React.createElement(StyledA, {
  ...props
}, "I MUST NOT BE IN APP - ", children);
Link.propTypes = {
  children: import_prop_types6.node
};
var Link_default = Link;

// src/components/NLXLogo/index.js
init_global_inject();
var import_react7 = __toModule(require("react"));
var import_prop_types7 = __toModule(require("prop-types"));
var NLXLogo = ({onDark, ...props}) => {
  const color = onDark === true ? "#ffffff" : "#6C757D";
  return /* @__PURE__ */ import_react7.default.createElement("svg", {
    viewBox: "0 0 56 22",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ import_react7.default.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    d: "M50.423 14.254a3.044 3.044 0 0 0 2.358 1.314 2.425 2.425 0 0 0 1.708-.739 2.434 2.434 0 0 0 .685-1.733 1.844 1.844 0 0 0-.272-1.089l-3.398-3.635 3.514-4.157c.18-.347.269-.733.26-1.123a2.359 2.359 0 0 0-.618-1.754 2.35 2.35 0 0 0-1.694-.76 3.073 3.073 0 0 0-2.618 1.35l-2.381 2.999-2.41-3A3.073 3.073 0 0 0 42.94.58a2.35 2.35 0 0 0-1.694.76 2.359 2.359 0 0 0-.618 1.753c-.01.39.081.778.266 1.123l3.514 4.157-3.404 3.635a1.884 1.884 0 0 0-.26 1.089 2.425 2.425 0 0 0 2.393 2.472 3.056 3.056 0 0 0 2.357-1.314l2.474-3.185 2.456 3.185z",
    fill: "#FEBF24"
  }), /* @__PURE__ */ import_react7.default.createElement("path", {
    d: "M36.767 21.861a2.464 2.464 0 0 0 2.468-2.437 2.493 2.493 0 0 0-2.468-2.472h-7.779V3.202A2.62 2.62 0 0 0 26.37.579a2.62 2.62 0 0 0-2.618 2.623v16.036c-.004.697.27 1.367.762 1.86.492.493 1.16.768 1.856.763h10.397zM0 19.238a2.613 2.613 0 0 0 .763 1.858c.492.493 1.16.768 1.855.765a2.604 2.604 0 0 0 1.855-.765 2.613 2.613 0 0 0 .763-1.858V8.783l8.056 6.223v4.232a2.62 2.62 0 0 0 2.618 2.623 2.62 2.62 0 0 0 2.618-2.623V3.202A2.62 2.62 0 0 0 15.91.579a2.62 2.62 0 0 0-2.618 2.623v5.094l-9.218-7.19A2.407 2.407 0 0 0 2.468.579 2.534 2.534 0 0 0 0 3.126v16.112z",
    fill: color
  })));
};
NLXLogo.propTypes = {
  onDark: import_prop_types7.bool
};
NLXLogo.defaultProps = {
  onDark: false
};
var NLXLogo_default = NLXLogo;

// src/components/Spinner/index.js
init_global_inject();
var import_react8 = __toModule(require("react"));

// src/components/Spinner/index.styles.js
init_global_inject();
var import_styled_components11 = __toModule(require("styled-components"));
var rotate = import_styled_components11.keyframes`
  100% {
    transform:rotate(360deg);
  }
`;
var StyledSvg = import_styled_components11.default.svg`
  width: ${(p) => p.theme.tokens.spacing06};
  height: ${(p) => p.theme.tokens.spacing06};
  margin-right: ${(p) => p.theme.tokens.spacing04};
  animation: ${rotate} 0.75s linear infinite;
  fill: ${(p) => p.theme.colorTextLink};
`;

// src/components/Spinner/index.js
var Spinner = ({...props}) => /* @__PURE__ */ import_react8.default.createElement(StyledSvg, {
  viewBox: "0 0 24 24",
  title: "I MUST NOT BE HERE",
  ...props
}, /* @__PURE__ */ import_react8.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ import_react8.default.createElement("path", {
  d: "M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z"
}));
var Spinner_default = Spinner;
