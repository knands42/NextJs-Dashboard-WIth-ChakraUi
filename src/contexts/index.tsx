import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from 'styles/theme'
import { queryClient } from 'services/queryClient'

import { SidebarDrawerProvider } from './SidebarDrawerContext'

type ContextProps = {
  children: ReactNode
}

export function Context({ children }: ContextProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>{children}</SidebarDrawerProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
