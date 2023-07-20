import { ContentStyled } from 'components/Content.styled'
import React from 'react'

import { useAppContext } from './Providers/AppProvider'

export interface Props {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
  const { expanded } = useAppContext()
  return <ContentStyled expanded={expanded}>{children}</ContentStyled>
}

export default Content
