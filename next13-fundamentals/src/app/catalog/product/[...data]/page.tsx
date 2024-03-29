'use client' // Quer dizer quir esse componente será hidratado, ou seja, todo js que é nescessario que esse componente seja exibido em tela
// irá ser enviado para o navegador

import { useParams } from 'next/navigation'
import AddToCart from './add-to-cart-button'

import TesteBoundaries from './teste-boundaries'

// Server Components => toda rota criada com next é server component, que a gente não usa JavaScript no lado do cliente

// Server Components => A gente não usa JavaScript no lado do cliente (navegador)
// Client Components => O JavaScript é enviado ao navegador (cliente)

// não posso usar Async no componente que tem use client, ou seja que tenho interação pacial com js, devido o botão, algum tipo de evento como (onAlgo) e um estado
// para requerir, posso utilizar o useEfecct como demostrado abaixo

// se vou ter alguma hiperatividade como um botão, se for possivel isola-lo, é melhor para abstrair o maximo do pode do next com server Components

// se eu crio um componente e coloco ele aqui, mesmo que tenha algum evento utilizando javascript, não preciso colocar 'use-client' pois já tenho aqui
// client boundaries = todos os componentes criados a partir desse componente, sera use client

export default function Product() {
  const params = useParams()

  /* useEffect(() => {
    const req = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const response = await fetch('http://api.github.com/users/Matheussmaced')

      const userName = await response.json()
      console.log(userName.name)
    }

    req()
  }, []) */

  const [id = '', tamanho = '', nome = ''] = Array.from(params.data || [])
  // const [id,tamanho,nome] = params.data

  console.log(params)

  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Tamanho: {tamanho}</p>
        <p>Nome: {nome}</p>

        <AddToCart>
          <TesteBoundaries />
        </AddToCart>
      </div>
    </>
  )
}
