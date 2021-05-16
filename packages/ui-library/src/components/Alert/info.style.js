// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { css } from 'styled-components'

const getSvg = (fillColor) =>
  `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>`

const style = (p) => {
  return css`
    background-color: ${p.theme.colorAlertInfoBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(
      getSvg(p.theme.colorAlertInfo),
    )});
    border-left-color: ${p.theme.colorAlertInfo};
  `
}

export default style
