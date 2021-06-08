import React from 'react'
import { Button } from 'ui-library'

const Home = () => (
  <div>
    <h1>App</h1>
    <Button onClick={() => console.log('clicked')}>My ui button</Button>
  </div>
)

export default Home
