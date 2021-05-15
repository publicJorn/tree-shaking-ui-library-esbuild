// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
const debounce = (cb, delay = 150) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = null
      cb.call(this, ...args)
    }, delay)
  }
}

export default debounce
