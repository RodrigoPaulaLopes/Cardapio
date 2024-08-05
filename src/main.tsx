import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Menu from './components/menu'
import CartContext from './context/carrinho'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContext>
      <Home />
    </CartContext>
  </React.StrictMode>,
)
