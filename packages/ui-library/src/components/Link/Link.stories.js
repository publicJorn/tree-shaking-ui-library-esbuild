import React from 'react'

import Link from './index'

export default {
  title: 'Components/Link',
  component: Link,
}

const Template = (args) => <Link href="#" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'It is a link!',
}
