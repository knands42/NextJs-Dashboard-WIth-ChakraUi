import Link from 'next/link'
import { useRouter } from 'next/router'
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
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { Header, Sidebar, Input } from 'components'
import { api } from 'services/api'
import { queryClient } from 'services/queryClient'

import { createUserFormSchema } from './_validations'
import { CreateUserFormData } from './_types'

export default function CreateUser() {
  const router = useRouter()
  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date()
        }
      })

      return response.data.user
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      }
    }
  )

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    await createUser.mutateAsync(values)

    router.push('/users')
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
                type="password"
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
              <Button
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
