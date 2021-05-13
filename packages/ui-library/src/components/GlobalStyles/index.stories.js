// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import LinkTo from '@storybook/addon-links/react'
import GlobalStyles from './index'

const globalStylesStory = {
  title: 'Components/GlobalStyles',
  parameters: {
    componentSubtitle: 'Base styles for the Design System.',
  },
  component: GlobalStyles,
}

export default globalStylesStory

export const allStyles = () => (
  <>
    <p>
      The <code>GlobalStyles</code> component defines global styling on which
      the components of the Design System rely.
      <br />
      It requires the <code>@fontsource/source-sans-pro</code> package. Check
      the{' '}
      <LinkTo kind="getting-started" story="page">
        installation chapter
      </LinkTo>{' '}
      to see how to add it .
    </p>
    <p>The global styling includes the following:</p>
    <ul>
      <li>
        <a href="https://necolas.github.io/normalize.css/">normalize.css</a>
      </li>
      <li>styling for generic typography elements (headings, paragraph...)</li>
      <li>
        extra utilities to make our development lives easier. eg. defining
        `box-sizing`
      </li>
    </ul>

    <h1>Heading level one</h1>
    <h2>Heading level two</h2>
    <h3>Heading level three</h3>
    <p>
      A paragraph with <small>some extra text</small>.
    </p>
  </>
)

export const lists = () => (
  <ul>
    <li>List item A</li>
    <li>List item B</li>
    <li>List item C</li>
  </ul>
)

export const headings = () => (
  <>
    <h1>Heading level one</h1>
    <h2>Heading level two</h2>
    <h3>Heading level three</h3>
  </>
)
