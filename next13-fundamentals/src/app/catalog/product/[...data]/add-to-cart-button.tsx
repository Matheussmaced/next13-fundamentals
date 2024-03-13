import { ReactNode, useState } from 'react'

export default function AddToCart({ children }: { children: ReactNode }) {
  const [count, setAcount] = useState(0)

  function addToCart() {
    setAcount((state) => state + 1)
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho {count} </button>

      {children}
    </div>
  )
}
