import './App.css'
import { Badge } from './components/Badge'
import { Button } from './components/Button'

function App() {

  return (
    <>
    <Button variant='secondary'>
      Test
    </Button>

    <Badge color='red' text="failure" />
    </>
  )
}

export default App
