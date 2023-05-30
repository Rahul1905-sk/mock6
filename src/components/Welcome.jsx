import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Welcome = () => {
  return (
    <Box>
      <Center mt="1%">
        <Text
          fontWeight={"600"}
          fontSize={["1.5rem", "2rem", "2.5rem"]}
          color={"#46468e"}
          as={"span"}
          fontFamily={"Fredoka One,cursive"}
        >
          Welcome to our &nbsp;{" "}
        </Text>
        <Text
          fontFamily={"Fredoka One,cursive"}
          fontWeight={"600"}
          fontSize={["1.5rem", "2rem", "2.5rem"]}
          color={"#e41487"}
          as={"span"}
        >
          {" "}
          Kindergarten
        </Text>
      </Center>

      <Center mt="1%">
        <Text fontSize={"1.3rem"} width={"75%"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue fowl male signs.
        </Text>
      </Center>

      <Flex
        flexDirection={["column", "column", "row"]}
        w={["100%", "100%", "75%"]}
        m="auto"
        mt="4%"
        gap="5%"
      >
        <Box
          w={["80%", "80%", "40%"]}
          m={["auto", "auto", "0%"]}
          mt="5%"
          mb={["7%", "5%", "5%"]}
        >
          <Flex gap="10%" textAlign={"left"}>
            <Image
              w="15%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg"
            />
            <Box w={["100%", "100%", "60%"]}>
              <Text
                color="#1f97d4"
                fontWeight={"600"}
                fontSize={["1.4rem", "1.4rem", "1.8vw"]}
              >
                Inter School Sports
              </Text>
              <Text fontSize={["1rem", "1rem", "1.2vw"]} fontWeight={"500"}>
                The words you use in your written communica speak volumes
              </Text>
            </Box>
          </Flex>

          <Flex mt="8%" gap="10%" textAlign={"left"}>
            <Image
              w="15%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg"
            />
            <Box w={["100%", "100%", "60%"]}>
              <Text
                color="#fbce0f"
                fontWeight={"600"}
                fontSize={["1.4rem", "1.4rem", "1.8vw"]}
              >
                Friendly Environment
              </Text>
              <Text fontSize={["1rem", "1rem", "1.2vw"]} fontWeight={"500"}>
                The words you use in your written communica speak volumes.
              </Text>
            </Box>
          </Flex>
          <Flex mt="8%" gap="10%" textAlign={"left"}>
            <Image
              w="15%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg"
            />
            <Box w={["100%", "100%", "60%"]}>
              <Text
                color="#12d9df"
                fontWeight={"600"}
                fontSize={["1.4rem", "1.4rem", "1.8vw"]}
              >
                Multimedia Class
              </Text>
              <Text fontSize={["1rem", "1rem", "1.2vw"]} fontWeight={"500"}>
                The words you use in your written communica speak volumes.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box m={["auto", "auto", "0%"]} w={["100%", "80%", "50%"]}>
          <Image
            w="100%"
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Welcome;
