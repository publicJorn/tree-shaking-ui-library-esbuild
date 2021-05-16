// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { css } from 'styled-components'

const getSvg = (fillColor) =>
  `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>`

const style = (p) => {
  return css`
    background-color: ${p.theme.colorAlertSuccessBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(
      getSvg(p.theme.colorAlertSuccess),
    )});
    border-left-color: ${p.theme.colorAlertSuccess};
  `
}

export default style
