// server components permite que fazamos chamada http ou qualquer outro tipo de operação async diretamente no componente
// para carregar dados que aquele componente precisa inicialmente para ser exibido

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('http://api.github.com/users/Matheussmaced')

  const user = await response.json()

  // só irei fazer esse tipo de carregamento de dados http diretamente do componente quando preciso carregar uma informação
  // qye precisa está disponivel assim que meu componente for exibido em tela

  // não posso fazer esse tipo de chamada para dados que precisam ser carregados dado a alguma ação do usuario, por exemplo clicar em um botão
  // para carregar uma informação da API

  // Streaming SSR => Ler/escrever dados de forma parcial + Server-side Rendering

  // Renderizar um componente pelo lado do servidor de forma PARCIAL

  return (
    <>
      <pre> {JSON.stringify(user, null, 2)} </pre>
    </>
  )
}
