/* import React from 'react' */
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from '../assets/logo1.png';

const Header = () => {
  return (
    <HStack justifyContent={"space-between"} w={"100%"} p={"5"} h={"5rem"} backgroundColor={'#D6BCFA'}  >
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={'10'} mr={'2rem'}>
        <Image src={img} h={'50'} w={'50'} objectFit={'contain'} mixBlendMode={'multiply'} border={'none'}  />
        <Text textTransform={"uppercase"} fontSize={"2rem"} p={"2"}>
          PhotoLy
        </Text>
      </Box>
      <Box display={'flex'} justifyContent={'space-evenly'}  > 
      <Button
      m={'0 1.5rem'}
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
      m={'0 1.5rem'}
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
      m={'0 1.5rem'}
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
      </Box>
    </HStack>
  );
};

export default Header;
