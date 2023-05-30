import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TeacherCard from "./TeacherCard";

const Teachers = () => {


    const data = [
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
    ]


  return (
    <Stack  p={'50px 0'}>
      <Heading as={"h1"} color={'#423F8D'} fontWeight={'extrabold'} fontFamily={'Fredoka One,cursive'} >Expert Teachers</Heading>
      <Text w={'50%'} style={{margin: 'auto'}}>
        Our set he for firmament morning sixth subdue today the darkness
        creeping gathered divide our let god moving today. Moving in fourth air
        night bring upon lesser subdue.
      </Text>
      <Grid 
   
        w={'100%'}
    
         templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(5, 1fr)",
          }} 
         gap={2}

         margin={'auto'}
      >
     
       { data.map((e,i)=> <TeacherCard key={e+i} img={e} />)}
        
      </Grid>
    </Stack>
  );
};

export default Teachers;
