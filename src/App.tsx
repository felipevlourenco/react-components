import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="1.25rem 1.5rem"
        margin="0 0 1rem"
        background="linear-gradient(to right, #ededed, #f5f5f5)"
        border="1px solid white"
      >
        <span>test1</span>
        <span>test2</span>
      </Card>
    </div>
  )
}

export default App
