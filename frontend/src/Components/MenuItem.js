import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";


export default function MenuItem(){
  function randomNum() {
    return (
      (Math.random() * 10).toFixed(2)
    )
  };
  const random = randomNum();
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://i.ytimg.com/vi/YDHgsOUlpcs/maxresdefault.jpg"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <h1 className="header1"
            display="block"
            fontSize="2xl"
            fontWeight="bold"
          >
            Rose Pasta
          </h1>
          <chakra.span
            fontSize="sm"
          >
            {random} / 10
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
};

