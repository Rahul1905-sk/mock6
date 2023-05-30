import { Box, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const OfferCard = ({ img }) => {
  return (
    <GridItem
      textAlign={"left"}
      w={"70%"}
      m="auto"
      //  border={'1px solid black'}
      boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
      borderRadius={"20px"}
    >
      <Box>
        <img style={{ width: "100%" }} src={img} alt="imgs" />
      </Box>
      <Box p={"10px"}>
        <Heading
          color={"#423F8D"}
          fontFamily={"Fredoka One,cursive"}
          as="h4"
          size="md"
          fontWeight={"extrabold"}
        >
          Intelligent Challenge
        </Heading>
        <Text w={"80%"} p={"5px 0"}>
          The words you use in yor written cummunica speak volumes
        </Text>
      </Box>

      <Stack
        direction={"row"}
        boxShadow={"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"}
        borderBottomRadius={"20px"}
        p={"10px 0"}
      >
        <Stack p={"10px"} borderTop={"1px solid #eeeeee"}>
          <Text fontWeight={"bold"} color={"#E50887"}>
            3-5
          </Text>
          <Text>Age Group</Text>
        </Stack>
        <Stack p={"10px"} borderTop={"1px solid #eeeeee"}>
          <Text fontWeight={"bold"} color={"#FBCE0F"}>
            30
          </Text>
          <Text>Classes</Text>
        </Stack>
        <Stack p={"10px"} borderTop={"1px solid #eeeeee"}>
          <Text fontWeight={"bold"} color={"#1F97D4"}>
            10/h
          </Text>
          <Text>Class Price</Text>
        </Stack>
      </Stack>
    </GridItem>
  );
};

export default OfferCard;
