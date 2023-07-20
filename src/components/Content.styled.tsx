/* eslint-disable indent */
import styled from 'styled-components'

import { Expandeble } from './Navigation/Navigation.styled'
import { breakpoints } from './styles/breakpoints'
import { colors } from './styles/colors'

export const ContentStyled = styled.div<Expandeble>`
  background-color: ${colors.white};
  height: 100vh;
  overlow-y: scroll;
  color: ${colors.black};
  padding: 10px;
  overflow-x: hidden;

  @media screen and (max-width: ${breakpoints.mobile}) {
    margin-top: 50px;
`
