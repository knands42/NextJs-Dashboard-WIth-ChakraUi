import dynamic from 'next/dynamic'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'

import { options, series } from './_apexConfig'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Subscribers in the week
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Delivery Rate
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
