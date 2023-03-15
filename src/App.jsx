import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ControlledInput from './components/ControlledInput';

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <ControlledInput/>
    </div>
  )
}

export default App
