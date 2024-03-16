/* import React from 'react' */
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <HStack justifyContent={"space-evenly"} w={'full'} p={'5'} h={'5rem'} >
    <Box>

    <Text textTransform={'uppercase'} fontSize={'2rem'} p={'2'} >PhototLy</Text>
    </Box>
    <Box>

    </Box>
      <Button variant={'link'} fontSize={'1.25rem'} p={'4'}  color={'black'}>
        <Link to={'/'} > Home </Link>
      </Button>
      <Button variant={'link'} fontSize={'1.25rem'} p={'4'} color={'black'}>
        <Link to={'#about'} >About</Link>
      </Button>
      <Button variant={'link'} fontSize={'1.25rem'} p={'4'} color={'black'} >
        <Link to={'/login'} >Login </Link>
      </Button>

   </HStack>
  );
};

export default Header;
