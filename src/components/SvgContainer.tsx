import { SvgContainerStyled } from 'components/SvgContainer.styled'
import React from 'react'

export interface Props {
  children: React.ReactNode
}

const SvgContainer = ({ children }: Props) => {
  return <SvgContainerStyled>{children}</SvgContainerStyled>
}

export default SvgContainer
