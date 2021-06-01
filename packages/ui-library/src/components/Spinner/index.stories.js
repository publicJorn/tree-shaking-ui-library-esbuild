// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import Spinner from './index'

const spinnerStory = {
  title: 'Components/Spinner',
  parameters: {
    componentSubtitle: 'Loader icon',
    controls: {
      hideNoControlsWarning: true,
    },
  },
  component: Spinner,
}

export default spinnerStory

export const intro = () => <Spinner />
