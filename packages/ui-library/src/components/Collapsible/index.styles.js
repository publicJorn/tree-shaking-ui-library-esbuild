// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled from 'styled-components'
import IconFlippingChevron from '../IconFlippingChevron'

export const Wrapper = styled.div`
  & .ReactCollapse--collapse {
    transition: ${(p) => (p.animate ? 'height 300ms' : 'none')};
  }
`

export const CollapsibleButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const CollapsibleTitle = styled.div`
  flex-grow: 1;
`

export const CollapsibleChevron = styled(IconFlippingChevron)`
  flex-grow: 0;
  transition: ${(p) => (p.animate ? '300ms ease-in-out' : 'none')};
`
