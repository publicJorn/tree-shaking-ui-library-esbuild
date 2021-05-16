// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { ReactComponent as IconCheck } from './check.svg'
import Icon from './index'

const iconStory = {
  title: 'Components/Icon',
  parameters: {
    componentSubtitle:
      'Ensures the icon you want to display has the correct size. Can be configured to use inline text.',
    docs: {
      storyDescription: `Using this component, the size is normalized using the \`theme.tokens.iconSize\` property.  
        Can be used for buttons with an icon, or paragraphs with a leading icon.`,
    },
  },
  component: Icon,
}

export default iconStory

export const Default = () => (
  <>
    <p>
      <IconCheck />
      Without <code>{`<Icon />`}</code> (svg downloaded at 36px).
    </p>

    <p>
      <Icon as={IconCheck} />
      With <code>{`<Icon />`}</code>, which ensures the icon size will be correct.
    </p>
  </>
)

export const InlineIcon = () => (
  <>
    <p>
      <Icon as={IconCheck} inline />
      With <code>inline</code> prop next to text.
    </p>

    <p>
      <Icon as={IconCheck} inline /> A longer paragraph with an inline icon. Building mr concerns
      servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so
      an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he
      greater related adapted proceed entered an. Through it examine express promise no. Past add
      size game cold girl off how old.
    </p>
  </>
)

export const IconSizes = () => (
  <>
    <table style={{ listStyle: 'none' }}>
      <tr>
        <td>
          <Icon as={IconCheck} size="small" />
        </td>
        <td>small</td>
      </tr>
      <tr>
        <td>
          <Icon as={IconCheck} />
        </td>
        <td>default</td>
      </tr>
      <tr>
        <td>
          <Icon as={IconCheck} size="large" />
        </td>
        <td>large</td>
      </tr>
      <tr>
        <td>
          <Icon as={IconCheck} size="x-large" />
        </td>
        <td>x-large</td>
      </tr>
    </table>
  </>
)
