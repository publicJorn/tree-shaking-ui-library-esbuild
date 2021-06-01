import React, { useContext } from 'react'
import { Button, ToasterProvider, ToasterContext } from 'ui-library'
import PageWrapper from '../components/PageWrapper'

const Content = () => {
  const { showToast } = useContext(ToasterContext)

  const handleClick = () => {
    showToast({
      title: 'Clicked!',
      body: 'You did well, padawan...',
      variant: 'success',
    })
  }

  return (
    <>
      <h1>App</h1>
      <Button onClick={handleClick}>My ui button</Button>
    </>
  )
}

const Home = () => (
  <PageWrapper>
    <ToasterProvider rootSelector="#__next">
      <Content />
    </ToasterProvider>
  </PageWrapper>
)

export default Home
