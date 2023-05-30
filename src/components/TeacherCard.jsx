import { Box, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const TeacherCard = ({img}) => {
  return (
    <GridItem direction={'column'} margin={'auto'}>
    <Box
     w={{
        base: "50%",
        md: "60%",
        lg: "80%",
      }}
    
      m={'auto'}

     mt='20px'>
         
      <img style={{width: '100%'}}
        src={img}
        alt="team3"
      />
      </Box>
      <Box m={'auto'}>
      <Heading
        fontSize={'lg'}>Mr. Jacson Clay</Heading>
      <Text fontSize={'md'}>Sports Instructor</Text>
    </Box>
    </GridItem>
  )
}

export default TeacherCard