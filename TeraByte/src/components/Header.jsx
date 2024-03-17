/* import React from 'react' */
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack justifyContent={"space-evenly"} w={"100%"} p={"5"} h={"5rem"} backgroundColor={'#D6BCFA'}  >
      <Box>
        <Text textTransform={"uppercase"} fontSize={"2rem"} p={"2"}>
          PhototLy
        </Text>
      </Box>
      <Box></Box>

      <Button
        variant={"solid"}
        fontSize={"1.25rem"}
        p={"5"}
        backgroundColor={'#D6BCFA'}
        color={"black"}
        _hover={{
          backgroundColor: "#805AD5",
          color: "White",
          borderBottom: '4px solid #44337A'
         
        }}
      >
        <Link to={"/"}> Home </Link>
      </Button>

      <Button as="a" href="#about" variant={"solid"}
            fontSize={"1.25rem"}
            p={"5"}
            backgroundColor={'#D6BCFA'}
            color={"black"}
            _hover={{
              backgroundColor: "#805AD5",
              color: "White",
              borderBottom: '4px solid #44337A'
            }}>
            About
      </Button>
      
      <Button  variant={"solid"}
        fontSize={"1.25rem"}
        p={"5"}
        backgroundColor={'#D6BCFA'}
        color={"black"}
        borderRadius={'12px 0px 12px 12px'}
        _hover={{
          backgroundColor: "#805AD5",
          color: "White",
          borderBottom: '4px solid #44337A',
          transform: 'scale(1.2)'
         
        }}>
        <Link to={"/login"}>Login </Link>
      </Button>
    </HStack>
  );
};

export default Header;
