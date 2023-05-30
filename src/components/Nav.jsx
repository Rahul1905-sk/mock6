import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
  return (
    <Box display={['none','none','block']}>
      <Flex justifyContent={'space-between'} m={"1% 0%"} p={"1%"} > 
        <Box>
            <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png'/>

        </Box>

        <Flex fontWeight={'600'} w={"45%"} justifyContent={'space-around'} alignItems={'center'}>
            <Text>Home</Text>
            <Text>Class</Text>
            <Text>About</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
            <Button borderRadius={'20px'} bgColor={'rgb(18,217,223)'} color={'white'}>Enroll Now</Button>
        </Flex>
      
    </Flex>
    </Box>
  )
}

export default Nav
