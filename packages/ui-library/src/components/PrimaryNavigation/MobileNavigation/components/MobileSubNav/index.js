// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useRef, useEffect } from 'react'
import primaryNavigationTypes from '../../../primaryNavigationTypes'
import {
  Wrapper,
  Header,
  CloseButton,
  List,
  ListItem,
  Link,
  IconChevronRight,
} from './index.styles'

const MobileSubNavigation = ({ LinkComponent, items, closeFunction }) => {
  const refList = useRef()
  const closeDelayed = () => setTimeout(() => closeFunction(), 200)

  useEffect(() => {
    if (refList.current) refList.current.firstChild.firstChild.focus()
  })

  return (
    <Wrapper role="modal">
      <Header>
        <CloseButton onClick={closeFunction} />
      </Header>

      <List ref={refList}>
        {items.map(({ name, ...props }) => (
          <ListItem key={name}>
            <Link as={LinkComponent} onClick={closeDelayed} {...props}>
              {name}
              <IconChevronRight />
            </Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

MobileSubNavigation.propTypes = { ...primaryNavigationTypes }

export default MobileSubNavigation
