// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TestThemeProvider from '../../theme/TestThemeProvider'
import Collapsible from './index'

test('contents should appear when clicking title', async () => {
  const onToggleSpy = jest.fn()
  const { getByText, queryByText } = render(
    <TestThemeProvider>
      <Collapsible title="title" animate={false} onToggle={onToggleSpy}>
        <p>body</p>
      </Collapsible>
    </TestThemeProvider>,
  )

  expect(queryByText('body')).not.toBeInTheDocument()
  expect(onToggleSpy).not.toHaveBeenCalled()

  fireEvent.click(getByText('title'))

  expect(onToggleSpy).toHaveBeenCalledWith(true)

  const body = getByText('body')
  expect(body).toBeInTheDocument()

  fireEvent.click(getByText('title'))
  expect(onToggleSpy).toHaveBeenCalledWith(false)
})

test('clicking the body should not toggle the collapsible', async () => {
  // Unmounting does not work when testing react-collapse
  // CSS transitions are not supported by JSDOM.
  // Therefore, we check if aria-hidden is set on the collapsable element.
  // See https://github.com/nkbt/react-collapse/issues/260

  const { getByText, container } = render(
    <TestThemeProvider>
      <Collapsible title="title" initiallyOpen animate={false}>
        <p>body</p>
      </Collapsible>
    </TestThemeProvider>,
  )

  const body = getByText('body')
  expect(body).toBeInTheDocument()

  const content = container.querySelector('.ReactCollapse--content')
  const contentContainer = content.parentNode

  // clicking the body should not close the content
  fireEvent.click(body)
  expect(body).toBeInTheDocument()
  expect(contentContainer.getAttribute('aria-hidden')).toEqual('false')

  // clicking the title should close the content
  const title = getByText('title')
  fireEvent.click(title)
  expect(contentContainer.getAttribute('aria-hidden')).toEqual('true')
})

test('contents should be there immediately when `initiallyOpen` is set', () => {
  const { getByText } = render(
    <TestThemeProvider>
      <Collapsible title="title" animate={false} initiallyOpen>
        <p>body</p>
      </Collapsible>
    </TestThemeProvider>,
  )

  expect(getByText('body')).toBeInTheDocument()
})
