import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import OfferCard from "./OfferCard";
 

const Offer = () => {

  const data = [ 
    
    "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
    , "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
    , "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
    

]
  return (
    <Stack  p={'30px 0'} mt={'30px'} bgColor={'#FFF2F9'}>
      <Heading as={"h1"} color={'#423F8D'} fontWeight={'extrabold'} fontFamily={'Fredoka One,cursive'} >Classes We Offer</Heading>
      <Text w={'50%'} style={{margin: 'auto', marginBottom: '50px'}} >
      Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.
      </Text>
      <Grid 
      w={'100%'}
    
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        // border={"1px solid red"}
         gap={2}
       
      >
     
       {/* <GridItem> */}
       {data.map((e)=> <OfferCard key={e} img={e} />)} 
       {/* <OfferCard  img={e}/> */}
       {/* </GridItem> */}
        
      </Grid>
    </Stack>
  )
}

export default Offer