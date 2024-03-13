export default async function TesteBoundaries() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const testButton = () => {
    console.log('Clicou')
  }

  return (
    <>
      <button onClick={testButton}>Click</button>
    </>
  )
}
