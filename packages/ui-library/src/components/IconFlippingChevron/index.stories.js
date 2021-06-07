// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import IconFlippingChevron from './index'

const iconFlippingChevronStory = {
  title: 'Components/IconFlippingChevron',
  parameters: {
    componentSubtitle: 'Chevron icon which can be flipped using animations.',
  },
  component: IconFlippingChevron,
}

export default iconFlippingChevronStory

export const TheChevron = (props) => <IconFlippingChevron {...props} />
TheChevron.args = {
  flipHorizontal: false,
  animationDuration: 150,
}
