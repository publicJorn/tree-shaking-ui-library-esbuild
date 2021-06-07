// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//

import React, { useContext, useState } from 'react'

import Button from '../Button'
import { ToasterProvider, ToasterContext, Toast } from './index'

const toasterStory = {
  title: 'Components/Toaster',
  parameters: {
    componentSubtitle: 'Global notifications',
  },
  component: ToasterProvider,
}

export default toasterStory

export const Default = () => {
  // 1. Declare ToasterProvider somewhere high up the component tree
  return (
    <ToasterProvider rootSelector="#docs-root">
      <Toast body="It appears automatically!" />
      <DeeperDown />
    </ToasterProvider>
  )

  // 2. Deeper down, use the ToasterContext to show a Toast
  function DeeperDown() {
    const { showToast } = useContext(ToasterContext)

    const handleClick = () => {
      showToast({
        title: 'Successfully pressed button',
        body: 'Toast it like you mean it!',
        variant: 'success',
      })
    }

    return <Button onClick={handleClick}>Show a toaster</Button>
  }
}

export const WithDelay = () => {
  const initialDelay = 1500

  return (
    <ToasterProvider>
      <Toast
        body={`I appear after ${initialDelay}ms on pageload`}
        delay={initialDelay}
      />
      <DeeperDown />
    </ToasterProvider>
  )

  // eslint-disable-next-line react/prop-types
  function DeeperDown() {
    const { showToast } = useContext(ToasterContext)
    const [delay, setDelay] = useState(initialDelay)

    const handleDelayChange = (evt) => {
      setDelay(evt.target.value)
      evt.target.focus()
    }

    const handleSubmit = (evt) => {
      evt.preventDefault()

      showToast({
        title: 'Toaster showing with delay',
        body: `I appeared after ${delay}ms`,
        variant: 'success',
        delay,
      })
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleDelayChange}
          onFocus={(evt) => evt.target.select()}
          value={delay}
        />{' '}
        <button type="submit">Show toaster with delay</button>
      </form>
    )
  }
}
