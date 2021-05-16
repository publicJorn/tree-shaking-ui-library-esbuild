// Copyright © VNG Realisatie 2021
// Licensed under the EUPL
//
import React from 'react'
import Button from './index'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
}
