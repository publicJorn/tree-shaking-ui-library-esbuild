// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useState, useEffect, useCallback } from 'react'
import { node, bool, func } from 'prop-types'
import ReactCollapse from 'react-collapse'

import {
  Wrapper,
  CollapsibleButton,
  CollapsibleChevron,
  CollapsibleTitle,
} from './index.styles'

const createRandomId = () => `r${Math.random().toString(36).slice(8)}`

const Collapsible = ({
  title,
  ariaLabel,
  initiallyOpen,
  animate,
  onToggle,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const [id, setId] = useState()
  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
    onToggle(!isOpen)
  }, [setIsOpen, isOpen, onToggle])

  useEffect(() => {
    setId(createRandomId())
  }, [])

  return (
    <Wrapper animate={animate} data-testid="collapsible">
      <CollapsibleButton
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={id}
        aria-label={ariaLabel || title}
        onClick={toggle}
      >
        <CollapsibleTitle>{title}</CollapsibleTitle>
        <CollapsibleChevron flipHorizontal={isOpen} animate={animate} />
      </CollapsibleButton>

      <ReactCollapse isOpened={isOpen}>
        {/* ReactCollapse does not pass the id-prop */}
        <div id={id}>{children}</div>
      </ReactCollapse>
    </Wrapper>
  )
}

Collapsible.propTypes = {
  title: node.isRequired,
  ariaLabel: (props) => {
    if (typeof props.title !== 'string' && !props.ariaLabel) {
      return new Error(
        'If Collapsible title is not a string, please provide an ariaLabel',
      )
    }
  },
  initiallyOpen: bool,
  animate: bool,
  onToggle: func,
  children: node.isRequired,
}

const noop = (isOpen) => {}
Collapsible.defaultProps = {
  initiallyOpen: false,
  animate: true,
  onToggle: noop,
}

export default Collapsible
