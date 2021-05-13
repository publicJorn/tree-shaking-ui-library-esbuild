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
  colorBrand2: '#E0E4EA',
  colorBrand3: '#262D30',
  colorBrand4: '#474E57',

  // Sub-colors
  colorInfo: '#0B71A1',
  colorInfoLight: '#D3F3FD',
  colorWarning: '#FFBC2C',
  colorWarningLight: '#FCF8DA',
  colorError: '#F02B41',
  colorErrorLight: '#FFDDE2',
  colorSuccess: '#39870C',
  colorSuccessLight: '#DCE8D1',

  // Generics
  colorBackground: '#FFFFFF',
  colorBackgroundAlt: palletteGray.colorPaletteGray100,
  colorFocus: '#0B71A1',
}

const theme = {
  name: 'default',
  tokens,
  breakpoints,
}

// Text
theme.colorText = tokens.colorPaletteGray900
theme.colorTextInverse = tokens.colorPaletteGray50

theme.colorTextLabel = tokens.colorPaletteGray600
theme.colorTextDisabled = 'rgba(0, 0, 0, 0.3)'

theme.colorTextLink = '#0B71A1'
theme.colorTextLinkHover = '#005282'
theme.colorTextLinkDisabled = 'rgba(0, 0, 0, 0.2)'

// Alert
theme.colorAlertInfo = tokens.colorInfo
theme.colorAlertInfoBackground = tokens.colorInfoLight
theme.colorAlertWarning = tokens.colorWarning
theme.colorAlertWarningBackground = tokens.colorWarningLight
theme.colorAlertError = tokens.colorError
theme.colorAlertErrorBackground = tokens.colorErrorLight
theme.colorAlertSuccess = tokens.colorSuccess
theme.colorAlertSuccessBackground = tokens.colorSuccessLight

// Buttons
theme.colorBackgroundButtonPrimary = tokens.colorBrand1
theme.colorBackgroundButtonPrimaryHover = '#E5A827'
theme.colorBackgroundButtonPrimaryDisabled = 'rgba(0, 0, 0, 0.1)'
theme.colorTextButtonPrimary = theme.colorText
theme.colorTextButtonPrimaryDisabled = theme.colorTextDisabled

theme.colorBackgroundButtonSecondary = tokens.colorBrand2
theme.colorBackgroundButtonSecondaryHover = '#CCCFD5'
theme.colorBackgroundButtonSecondaryDisabled = 'rgba(0, 0, 0, 0.1)'
theme.colorBackgroundButtonSecondarySelected = '#0B71A1'
theme.colorTextButtonSecondary = theme.colorText
theme.colorTextButtonSecondaryDisabled = theme.colorTextDisabled
theme.colorTextButtonSecondarySelected = theme.colorTextInverse

theme.colorBackgroundButtonDanger = theme.colorAlertError
theme.colorBackgroundButtonDangerHover = '#D7263A'
theme.colorBackgroundButtonDangerDisabled = 'rgba(0, 0, 0, 0.1)'
theme.colorTextButtonDanger = theme.colorTextInverse
theme.colorTextButtonDangerDisabled = 'rgba(0, 0, 0, 0.3)'

theme.colorTextButtonLink = theme.colorTextLink
theme.colorTextButtonLinkHover = theme.colorTextLinkHover
theme.colorTextButtonLinkDisabled = theme.colorTextLinkDisabled

// Input
theme.colorBackgroundInput = '#ffffff'
theme.colorBackgroundInputDisabled = 'rgba(0, 0, 0, 0.05)'
theme.colorBorderInput = tokens.colorPaletteGray500
theme.colorBorderInputDisabled = 'transparent'
theme.colorBorderInputError = tokens.colorError
theme.colorBorderInputFocus = tokens.colorFocus
theme.colorTextInputLabel = tokens.colorPaletteGray800
theme.colorTextInputLabelDisabled = 'rgba(0, 0, 0, 0.2)'
theme.colorTextInputPlaceholder = tokens.colorPaletteGray600
theme.colorTextInputDisabled = theme.colorTextDisabled
theme.colorTextInputError = tokens.colorError

// Checkbox & Radio
theme.colorBackgroundChoiceSelected = '#0B71A1'
theme.colorBackgroundChoiceDisabled = 'rgba(0, 0, 0, 0.1)'
theme.colorBorderChoice = tokens.colorPaletteGray500
theme.colorBorderChoiceFocus = tokens.colorFocus

// Dropdown, Select, Popover
theme.colorBackgroundDropdown = theme.colorBackgroundInput
theme.colorBackgroundDropdownHover = tokens.colorPaletteGray200
theme.colorBackgroundDropdownActive = tokens.colorPaletteGray400
theme.colorBackgroundDropdownSelected = tokens.colorPaletteGray300
theme.colorBorderDropdownFocus = tokens.colorFocus

// Switch
theme.colorBackgroundSwitch = tokens.colorPaletteGray400
theme.colorBackgroundSwitchChecked = '#0B71A1'
theme.colorBackgroundSwitchDisabled = tokens.colorPaletteGray200
theme.colorBackgroundSwitchIndicatorDisabled = tokens.colorPaletteGray400

// Drawer
theme.colorBackgroundDrawer = tokens.colorBackground

// Select
theme.colorBackgroundSelect = theme.colorBackgroundInput
theme.colorBackgroundSelectOptionHover = 'rgba(0, 0, 0, 0.05)'
theme.colorBackgroundSelectOptionSelect = 'rgba(0, 0, 0, 0.2)'
theme.colorBackgroundSelectSeparator = 'hsl(0, 0%, 80%)'
theme.colorBackgroundSelectDisabled = 'rgba(0, 0, 0, 0.05)'
theme.colorBorderSelect = tokens.colorPaletteGray500
theme.colorBorderSelectDisabled = 'transparent'
theme.colorBorderSelectError = tokens.colorError
theme.colorBorderSelectFocus = tokens.colorFocus
theme.colorTextSelectLabel = tokens.colorPaletteGray800
theme.colorTextSelectLabelDisabled = 'rgba(0, 0, 0, 0.2)'
theme.colorTextSelectPlaceholder = tokens.colorPaletteGray600
theme.colorTextSelectDisabled = theme.colorTextDisabled
theme.colorTextSelectError = tokens.colorError

export default theme
