import { Box } from '@chakra-ui/react'
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons'
// import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const HamNav = () => {
  return (
<Box display={['block','block','none']}>

<Box >
            <img src='https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png'/>

        </Box>
    <Box bgColor={'pink.500' } m={"1% 0%"} p={'1%'} textAlign={'right'} display={['block','block','none']}>
        {/* <FontAwesomeIcon icon={faBars}/> */}

        <i class="fa-sharp fa-solid fa-bars"></i>
      
    </Box>
</Box>
  )
}

export default HamNav
