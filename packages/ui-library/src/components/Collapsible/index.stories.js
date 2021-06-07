// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import Collapsible from './index'

const collapsibleStory = {
  title: 'Components/Collapsible',
  parameters: {
    componentSubtitle: 'Collapsible can be used to expand content sections.',
  },
  component: Collapsible,
}

export default collapsibleStory

export const Default = () => (
  <Collapsible title="My First Collapsible">
    <p>Some content to be collapsed.</p>
  </Collapsible>
)

export const withoutAnimation = () => (
  <Collapsible title="Collapsible without animation" animate={false}>
    <p>Some content to be collapsed.</p>
  </Collapsible>
)
