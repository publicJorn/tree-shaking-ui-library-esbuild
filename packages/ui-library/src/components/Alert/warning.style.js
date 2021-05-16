// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { css } from 'styled-components'

const getSvg = (fillColor) =>
  `<svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24"><path fill="${fillColor}" d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"/></svg>`

const style = (p) => {
  return css`
    background-color: ${p.theme.colorAlertWarningBackground};
    background-image: url(data:image/svg+xml;base64,${btoa(
      getSvg(p.theme.colorAlertWarning),
    )});
    border-left-color: ${p.theme.colorAlertWarning};
  `
}

export default style
