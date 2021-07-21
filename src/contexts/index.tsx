import { ReactNode } from 'react'

import { SidebarDrawerProvider } from './SidebarDrawerContext'

type ContextProps = {
  children: ReactNode
}

export function Context({ children }: ContextProps) {
  return <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
}
