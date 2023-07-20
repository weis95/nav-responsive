/* eslint-disable indent */
import { easeInOut, speed } from 'components/styles/animation'
import { breakpoints } from 'components/styles/breakpoints'
import { colors } from 'components/styles/colors'
import styled, { css } from 'styled-components'

export interface Expandeble {
  expanded?: boolean
}

export const NavigationStyled = styled.nav<Expandeble>`
  background-color: ${colors.secondary};
  height: 100vh;
  overlow-y: scroll;
  color: ${colors.white};
  padding: 10px;
  overflow-x: hidden;

  @media screen and (min-width: ${breakpoints.mobile}) {
    ${(props) =>
      props.expanded
        ? css`
            width: 300px;
          `
        : css`
            width: 30px;
          `};

    ${easeInOut('width', speed.fast)}
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100vw;
    position: fixed;
    ${(props) =>
      props.expanded
        ? css`
            height: 100vh;
          `
        : css`
            height: 25px;
          `};
    ${easeInOut('height', speed.slow)}
  }
`

export const LogoContainer = styled.div<Expandeble>`
  ${(props) =>
    props.expanded
      ? css`
          padding: 0 0 30px 0;
        `
      : css`
          padding: 0 0 30px 0;
        `};
`

export const ActionButton = styled.button<Expandeble>`
  border: none;
  text-decoration: none;
  background: transparent;
  outline: 0;
  position: absolute;
  bottom: 30px;

  svg {
    &:hover {
      path {
        stroke: ${colors.primary};
      }

      circle {
        stroke: ${colors.primary};
      }
    }
  }

  @media screen and (min-width: ${breakpoints.mobile}) {
    bottom: 30px;
    ${(props) =>
      props.expanded
        ? css`
            left: 275px;
          `
        : css`
            left: 5px;
          `};
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    height: 25px;
    right: 20px;
    top: 10px;
  }

  ${easeInOut('left', speed.fast)}
`
