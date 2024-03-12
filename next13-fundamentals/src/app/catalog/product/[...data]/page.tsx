'use client'

import { useParams } from 'next/navigation'

export default function Product() {
  const params = useParams()

  const [id = '', tamanho = '', nome = ''] = Array.from(params.data || [])

  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Tamanho: {tamanho}</p>
        <p>Nome: {nome}</p>
      </div>
    </>
  )
}
