'use-client'

import { useState } from 'react'

export default function AddToCart() {
  const [count, setAcount] = useState(0)

  function addToCart() {
    setAcount((state) => state + 1)
  }

  return <button onClick={addToCart}>Adicionar ao carrinho {count} </button>
}
