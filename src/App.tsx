import { DatePicker } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import reactLogo from './assets/react.svg'
import type { RootState } from './store'
import viteLogo from '/vite.svg'
import { removeTopping } from './store/pizzaSlice'

function App() {
  const [count, setCount] = useState(0)

const pizza = useSelector((state: RootState) => state.pizza);
const dispatch = useDispatch();



  const renderToppings = () =>
    pizza.toppings.map(topping => (
      <div key={topping}>
        {topping}
        <button onClick={() => dispatch(removeTopping(topping))}>Remove</button>
      </div>
    ));




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

            
      {renderToppings()}

      
      <DatePicker />


    </>
  )
}

export default App
