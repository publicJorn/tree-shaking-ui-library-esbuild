// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import NLXLogo from './index'

const nlxLogoStory = {
  title: 'Components/NLXLogo',
  parameters: {
    componentSubtitle: 'The NLX logo.',
  },
  argTypes: {
    onDark: {
      description: 'Try setting this while in the dark theme',
    },
  },
  component: NLXLogo,
}

export default nlxLogoStory

export const TheLogo = (props) => (
  <NLXLogo {...props} style={{ height: '50px' }} />
)
TheLogo.args = {
  onDark: false,
}
