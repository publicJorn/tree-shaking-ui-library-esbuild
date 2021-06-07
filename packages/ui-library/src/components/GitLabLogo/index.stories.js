// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import GitLabLogo from './index'

const gitLabLogoStory = {
  title: 'Components/GitLabLogo',
  parameters: {
    componentSubtitle: 'The GitLab logo.',
  },
  component: GitLabLogo,
}

export default gitLabLogoStory

export const theLogo = () => <GitLabLogo style={{ height: '50px' }} />
