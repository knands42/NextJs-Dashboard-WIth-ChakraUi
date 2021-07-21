import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'
import { createContext, ReactNode, useContext } from 'react'

type SidebarDrawerProviderProps = {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext<SidebarDrawerContextData>(
  {} as SidebarDrawerContextData
)

export function SidebarDrawerProvider({
  children
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
