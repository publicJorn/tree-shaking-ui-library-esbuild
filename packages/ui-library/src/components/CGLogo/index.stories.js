// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import CGLogo from './index'

const cgLogoStory = {
  title: 'Components/CGLogo',
  parameters: {
    componentSubtitle: 'The Common Ground logo.',
  },
  component: CGLogo,
}

export default cgLogoStory

export const theLogo = () => <CGLogo style={{ height: '50px' }} />
