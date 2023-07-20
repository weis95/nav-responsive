import { AnchorStyled, LinkStyled } from 'components/Navigation/Link.styled'
import { useAppContext } from 'components/Providers/AppProvider'
import SvgContainer from 'components/SvgContainer'
import React from 'react'

export interface LinkProps {
  title: string
  link: string
  target?: boolean
  icon?: React.ReactNode
  sub?: boolean
}
const Link = ({ title, link, target, icon, sub }: LinkProps) => {
  const { expanded, mobile } = useAppContext()
  return (
    <LinkStyled sub={sub} expanded={expanded}>
      <AnchorStyled target={target ? '_blank' : '_self'} href={link}>
        {expanded || mobile ? (
          <>
            {sub && <>&#x2022;</>} <span>{title}</span>
          </>
        ) : (
          <SvgContainer>{icon}</SvgContainer>
        )}
      </AnchorStyled>
    </LinkStyled>
  )
}

export default Link
