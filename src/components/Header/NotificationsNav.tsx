import { HStack, Icon, Flex } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
    <Flex align="center" ml="auto">
      <HStack
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRight={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
    </Flex>
  )
}
