'use client'

import { useParams } from 'next/navigation'

export default function Product() {
  const params = useParams()

  return (
    <>
      <div>
        <p>Id: {params.data[0]}</p>
        <p>Tamanho: {params.data[1]}</p>
        <p>Nome: {params.data[2]}</p>
      </div>
    </>
  )
}
