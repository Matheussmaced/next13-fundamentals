import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <p>Painel de Administração</p>
      {children}
    </>
  )
}
