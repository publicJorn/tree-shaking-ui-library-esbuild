// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import spacings from './parts/spacings'
import palletteGray from './parts/palletteGray'
import breakpoints from './parts/breakpoints'

const tokens = {
  ...spacings,
  ...palletteGray,

  // Brand
  colorBrand1: '#FFBC2C',
  colorBrand2: '#33373E',
  colorBrand3: '#474E57',
  colorBrand4: '#36C6FF',

  // Sub-colors
  colorInfo: '#36C6FF',
  colorInfoLight: '#6CA9C6',
  colorWarning: '#FFBC2C',
  colorWarningLight: '#FFD680',
  colorError: '#ff646e',
  colorErrorLight: '#F67F8D',
  colorSuccess: '#75A25B',
  colorSuccessLight: '#88B76D',

  // Generics
  colorBackground: palletteGray.colorPaletteGray900,
  colorBackgroundAlt: '#313131',
  colorFocus: '#36C6FF',
}

const theme = {
  name: 'dark',
  tokens,
  breakpoints,
}

// Text
theme.colorText = tokens.colorPaletteGray300
theme.colorTextInverse = tokens.colorPaletteGray900

theme.colorTextLabel = tokens.colorPaletteGray500
theme.colorTextDisabled = 'rgba(255, 255, 255, 0.3)'

theme.colorTextLink = tokens.colorBrand4
theme.colorTextLinkHover = '#82CFE8'
theme.colorTextLinkDisabled = 'rgba(255, 255, 255, 0.2)'

// Alert
theme.colorAlertInfo = tokens.colorInfo
theme.colorAlertInfoBackground = '#434950'
theme.colorAlertWarning = tokens.colorWarning
theme.colorAlertWarningBackground = '#4D4941'
theme.colorAlertError = tokens.colorError
theme.colorAlertErrorBackground = '#4F4344'
theme.colorAlertSuccess = tokens.colorSuccess
theme.colorAlertSuccessBackground = '#454B42'

// Buttons
theme.colorBackgroundButtonPrimary = tokens.colorBrand1
theme.colorBackgroundButtonPrimaryHover = '#FFD06B'
theme.colorBackgroundButtonPrimaryDisabled = 'rgba(255, 255, 255, 0.1)'
theme.colorTextButtonPrimary = theme.colorTextInverse
theme.colorTextButtonPrimaryDisabled = theme.colorTextDisabled

theme.colorBackgroundButtonSecondary = 'rgba(255, 255, 255, 0.3)'
theme.colorBackgroundButtonSecondaryHover = 'rgba(255, 255, 255, 0.4)'
theme.colorBackgroundButtonSecondaryDisabled = 'rgba(255, 255, 255, 0.1)'
theme.colorBackgroundButtonSecondarySelected = tokens.colorBrand4
theme.colorTextButtonSecondary = tokens.colorPaletteGray100
theme.colorTextButtonSecondaryDisabled = theme.colorTextDisabled
theme.colorTextButtonSecondarySelected = theme.colorTextInverse

theme.colorBackgroundButtonDanger = theme.colorAlertError
theme.colorBackgroundButtonDangerHover = '#F46B7A'
theme.colorBackgroundButtonDangerDisabled = 'rgba(255, 255, 255, 0.1)'
theme.colorTextButtonDanger = theme.colorTextInverse
theme.colorTextButtonDangerDisabled = 'rgba(255, 255, 255, 0.3)'

theme.colorTextButtonLink = theme.colorTextLink
theme.colorTextButtonLinkHover = theme.colorTextLinkHover
theme.colorTextButtonLinkDisabled = theme.colorTextLinkDisabled

// Input
theme.colorBackgroundInput = 'rgba(255, 255, 255, 0.1)'
theme.colorBackgroundInputDisabled = 'rgba(255, 255, 255, 0.05)'
theme.colorBorderInput = 'transparent'
theme.colorBorderInputDisabled = 'transparent'
theme.colorBorderInputError = tokens.colorError
theme.colorBorderInputFocus = tokens.colorFocus
theme.colorTextInputLabel = tokens.colorPaletteGray400
theme.colorTextInputLabelDisabled = 'rgba(255, 255, 255, 0.3)'
theme.colorTextInputPlaceholder = 'rgba(255, 255, 255, 0.6)'
theme.colorTextInputDisabled = theme.colorTextDisabled
theme.colorTextInputError = tokens.colorError

// Checkbox & Radio
theme.colorBackgroundChoiceSelected = tokens.colorPaletteGray300
theme.colorBackgroundChoiceDisabled = 'rgba(255, 255, 255, 0.1)'
theme.colorBorderChoice = tokens.colorPaletteGray500
theme.colorBorderChoiceFocus = tokens.colorFocus

// Dropdown, Select, Popover
theme.colorBackgroundDropdown = theme.colorBackgroundInput
theme.colorBackgroundDropdownHover = '#515151'
theme.colorBackgroundDropdownActive = tokens.colorPaletteGray600
theme.colorBackgroundDropdownSelected = tokens.colorPaletteGray700
theme.colorBorderDropdownFocus = tokens.colorFocus

// Switch
theme.colorBackgroundSwitch = tokens.colorPaletteGray600
theme.colorBackgroundSwitchChecked = tokens.colorBrand4
theme.colorBackgroundSwitchDisabled = 'rgba(255, 255, 255, 0.1)'
theme.colorBackgroundSwitchIndicatorDisabled = 'rgba(255, 255, 255, 0.2)'

// Drawer
theme.colorBackgroundDrawer = tokens.colorBackgroundAlt

// Select
theme.colorBackgroundSelect = '#383838'
theme.colorBackgroundSelectOptionHover = 'rgba(255, 255, 255, 0.1)'
theme.colorBackgroundSelectOptionSelect = 'rgba(255, 255, 255, 0.2)'
theme.colorBackgroundSelectDisabled = 'rgba(255, 255, 255, 0.1)'
theme.colorBackgroundSelectSeparator = 'rgba(255, 255, 255, 0.2)'
theme.colorBorderSelect = 'transparent'
theme.colorBorderSelectDisabled = 'transparent'
theme.colorBorderSelectError = tokens.colorError
theme.colorBorderSelectFocus = tokens.colorFocus
theme.colorTextSelectLabel = tokens.colorPaletteGray400
theme.colorTextSelectLabelDisabled = 'rgba(255, 255, 255, 0.3)'
theme.colorTextSelectPlaceholder = 'rgba(255, 255, 255, 0.6)'
theme.colorTextSelectDisabled = theme.colorTextDisabled
theme.colorTextSelectError = tokens.colorError

export default theme
