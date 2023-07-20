import Link, { LinkProps } from 'components/Navigation/Link'
import {
  ActionButton,
  LogoContainer,
  NavigationStyled
} from 'components/Navigation/Navigation.styled'
import { useAppContext } from 'components/Providers/AppProvider'
import SvgContainer from 'components/SvgContainer'
import ArrowLeft from 'icons/ArrowLeft'
import ArrowUpCircle from 'icons/ArrowUpCircle'
import CircleClose from 'icons/CircleClose'
import CircleMenuDots from 'icons/CircleMenuDots'
import MenuDots from 'icons/MenuDots'
import React, { useState } from 'react'

import { SubLinkContainerStyled } from './SubLinkContainer.styled'

interface Link extends LinkProps {
  sub?: boolean
  subLinks?: Link[]
}

interface Props {
  links: Link[]
}

const Navigation = ({ links }: Props) => {
  const [opacity, setOpacity] = useState<number>(1)

  const { expanded, setExpanded, mobile } = useAppContext()

  const resizeMenu = () => {
    !mobile && setOpacity(0)
    setExpanded(!expanded)
    !mobile && localStorage.setItem('expanded', String(!expanded))

    if (mobile) {
      setOpacity(1)
    } else {
      let number = 0
      const interval = setInterval(() => {
        if (number < 1) {
          number = number + 0.1
          setOpacity(number)
        }
        if (number === 1) {
          clearInterval(interval)
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }

  return (
    <NavigationStyled expanded={expanded}>
      <div style={{ opacity: opacity }}>
        <LogoContainer>
          {expanded && !mobile ? (
            <div>Fancy Logo</div>
          ) : (
            <SvgContainer>
              <ArrowUpCircle />
            </SvgContainer>
          )}
        </LogoContainer>
        {links.map((item, index) => {
          const subLinks =
            item.subLinks &&
            item.subLinks.map((item, i) => (
              <Link
                title={item.title}
                link={item.link}
                target={item.target}
                key={`${item.title}${i}`}
                sub={true}
              />
            ))
          return (
            <div key={`${item.title}${index}`}>
              <Link
                title={item.title}
                link={item.link}
                icon={item.icon}
                target={item.target}
              />
              {(expanded || mobile) && subLinks?.length && (
                <SubLinkContainerStyled>{subLinks}</SubLinkContainerStyled>
              )}
            </div>
          )
        })}
        <ActionButton expanded={expanded} onClick={() => resizeMenu()}>
          {mobile && expanded ? (
            <SvgContainer>
              <CircleClose />
            </SvgContainer>
          ) : mobile && !expanded ? (
            <SvgContainer>
              <CircleMenuDots />
            </SvgContainer>
          ) : expanded ? (
            <SvgContainer>
              <ArrowLeft />
            </SvgContainer>
          ) : (
            <SvgContainer>
              <MenuDots />
            </SvgContainer>
          )}
        </ActionButton>
      </div>
    </NavigationStyled>
  )
}

export default Navigation
