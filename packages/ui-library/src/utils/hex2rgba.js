// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
// Inspired by: https://stackoverflow.com/a/39077686/1783174
//
const hex2rgba = (hex, a = 1) => {
  const rgbArray = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))

  return `rgba(${rgbArray.join(',')},${a})`
}

export default hex2rgba
