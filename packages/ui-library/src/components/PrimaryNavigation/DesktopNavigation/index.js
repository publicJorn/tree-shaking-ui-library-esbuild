// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'

import primaryNavigationTypes from '../primaryNavigationTypes'
import { Wrapper, Container, Nav, List, ListItem } from './index.styles'

const DesktopNavigation = ({ items, LinkComponent }) => (
  <Wrapper>
    <Container>
      <Nav>
        <List>
          {items.map(({ name, to, Icon, ...otherProps }) => {
            return (
              <ListItem key={to}>
                <LinkComponent to={to} {...otherProps}>
                  {name}
                </LinkComponent>
              </ListItem>
            )
          })}
        </List>
      </Nav>
    </Container>
  </Wrapper>
)

DesktopNavigation.propTypes = { ...primaryNavigationTypes }

export default DesktopNavigation
