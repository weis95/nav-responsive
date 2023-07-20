import { Box } from 'components/Box.styled'
import Content from 'components/Content'
import Navigation from 'components/Navigation/Navigation'
import { AppProvider } from 'components/Providers/AppProvider'
import { Links } from 'components/shared/DynamicObjects'
import React, { useEffect, useState } from 'react'

function App() {
  const [mobile, setMobile] = useState<boolean>(false)

  const [expanded, setExpanded] = useState<boolean>(
    localStorage.getItem('expanded') === 'true' ? true : false
  )

  const checkDimensions = () => {
    const isMobile = window.innerWidth <= 480
    setMobile(isMobile)
    /* eslint-disable indent */
    isMobile
      ? setExpanded(false)
      : localStorage.getItem('expanded') === 'false'
      ? setExpanded(true)
      : setExpanded(false)

    isMobile && localStorage.setItem('expanded', 'false')
  }

  useEffect(() => {
    checkDimensions()
    window.addEventListener('resize', checkDimensions)

    return () => {
      window.removeEventListener('resize', checkDimensions)
    }
  }, [])

  return (
    <AppProvider mobile={mobile} setExpanded={setExpanded} expanded={expanded}>
      <Box direction={mobile ? 'column' : 'row'}>
        <Navigation links={Links} />
        <Content>{window.location.href}</Content>
      </Box>
    </AppProvider>
  )
}

export default App
