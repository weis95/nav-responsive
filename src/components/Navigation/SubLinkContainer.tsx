import { SubLinkContainerStyled } from 'components/Navigation/SubLinkContainer.styled'
import React from 'react'

export interface Props {
  children?: React.ReactNode
}

const SubLinkContainer = ({ children }: Props) => {
  return <SubLinkContainerStyled>{children}</SubLinkContainerStyled>
}

export default SubLinkContainer
