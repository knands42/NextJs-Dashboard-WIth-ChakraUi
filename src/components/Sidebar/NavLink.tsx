import { ElementType, ReactNode } from 'react'
import { Link as ChakraLink, Text, Icon, LinkProps } from '@chakra-ui/react'

import { ActiveLink } from '../ActiveLink'

type NavLinkProps = LinkProps & {
  icon: ElementType
  children: ReactNode
  href: string
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
