import { Expandeble } from 'components/Navigation/Navigation.styled'
import { colors } from 'components/styles/colors'
import { fontSize } from 'components/styles/fonts'
import styled, { css } from 'styled-components'

interface Props extends Expandeble {
  sub?: boolean
}
export const LinkStyled = styled.div<Props>`
  color: ${colors.white};
  padding: 10px 0 10px 0;

  span {
    font-size: ${fontSize.lg};
  }

  ${(props) =>
    props.sub &&
    css`
      padding: 5px 0 5px 10px;
      span {
        font-size: ${fontSize.md};
      }
    `};
`

export const AnchorStyled = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${colors.primary};
  }

  svg {
    fill: none;
    max-width: 100%;

    path {
      stroke: ${colors.white};
    }

    circle {
      stroke: ${colors.white};
    }

    &:hover {
      path {
        stroke: ${colors.primary};
      }

      circle {
        stroke: ${colors.primary};
      }
    }
  }
`
