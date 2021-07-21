import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <NotificationsNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}
