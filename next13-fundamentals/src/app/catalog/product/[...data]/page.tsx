'use client' // Quer dizer quir esse componente será hidratado, ou seja, todo js que é nescessario que esse componente seja exibido em tela
// irá ser enviado para o navegador

import { useParams } from 'next/navigation'

// Server Components => toda rota criada com next é server component, que a gente não usa JavaScript no lado do cliente

// Server Components => A gente não usa JavaScript no lado do cliente (navegador)
// Client Components => O JavaScript é enviado ao navegador (cliente)

export default function Product() {
  const params = useParams()

  const [id = '', tamanho = '', nome = ''] = Array.from(params.data || [])
  // const [id,tamanho,nome] = params.data

  console.log(params)

  function addToCart() {
    console.log('adicionou ao carrinho')
  }

  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Tamanho: {tamanho}</p>
        <p>Nome: {nome}</p>

        <button onClick={addToCart}>Adicionar ao carrinho</button>
      </div>
    </>
  )
}
