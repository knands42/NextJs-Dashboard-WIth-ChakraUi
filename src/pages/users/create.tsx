import Link from 'next/link'
import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header, Sidebar, Input } from 'components'

type CreateUserFormData = {
  email: string
  password: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')])
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values,
    event
  ) => {
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="name"
                label="Full name"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="password"
                label="Password"
                error={errors.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                label="Password confirmation"
                type="password"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorscheme="whiteAlpha" color="gray.500">
                  Cancel
                </Button>
              </Link>
              <Button colorScheme="pink" isLoading={formState.isSubmitting}>
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
