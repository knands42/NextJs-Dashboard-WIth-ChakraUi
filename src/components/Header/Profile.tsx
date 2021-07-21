import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Caio Fernnades</Text>
          <Text fontSize="small" color="gray.300">
            caiow.wk@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Caio Fernandes"
        src="https://github.com/caiofernandes00.png"
      />
    </Flex>
  )
}
