
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { Provider } from 'react-redux'
import { pizzaStore } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={pizzaStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
