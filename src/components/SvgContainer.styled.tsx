import styled from 'styled-components'

import { colors } from './styles/colors'

export const SvgContainerStyled = styled.div`
  width: 25px;
  height: 25px;

  svg {
    fill: none;
    max-width: 100%;

    path {
      stroke: ${colors.white};
    }

    circle {
      stroke: ${colors.white};
    }
  }
`
