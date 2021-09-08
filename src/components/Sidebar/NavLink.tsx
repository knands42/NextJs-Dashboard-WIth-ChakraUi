import { ElementType, ReactNode } from 'react'
import { Link, Text, Icon, LinkProps } from '@chakra-ui/react'

type NavLinkProps = LinkProps & {
  icon: ElementType
  children: ReactNode
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
