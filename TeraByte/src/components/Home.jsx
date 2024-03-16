/* import React from 'react' */
import { Box, Container, HStack, Heading, Image, Text } from "@chakra-ui/react";
import "../styles/movingelement.css";
const Home = () => {
  return (
    <HStack
      minW={"full"}
      h={"max-content"}
      
      backgroundColor={"#d7e3fce7"}
    >
      <Container minW={"40%"} h={"80vh"} pt={"50px"}>
        <Heading textTransform={"uppercase"} fontSize={"6.5rem"}>
          Create{" "}
        </Heading>

        <Box justifyContent={"flex-end"} display={"flex"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"6.5rem"}
            lineHeight={"80px"}
            alignItems={"end"}
          >
            Your
          </Heading>
        </Box>

        <Heading textTransform={"uppercase"} fontSize={"6.5rem"}>
          Image
        </Heading>
      </Container>


      <Box
        w={"50%"}
        h={"80vh"}
        pt={'5'}
        backgroundColor={"transparent"}
        position={'relative'}
        filter={'drop-shadow( 20px 20px 10px #805AD5)'}
      >
        <Image src="https://plus.unsplash.com/premium_photo-1666265087444-780ca39dbe31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww" h={'30%'} w={'30%'} objectFit={'contain'} position={'absolute'} right={'50'} />
        <Image src="https://plus.unsplash.com/premium_photo-1672759323793-7fff002b3f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGh1bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww"  h={'30%'} w={'30%'} objectFit={'contain'} position={'absolute'} left={'20'} top={'90'}  />
        <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGh1bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww"  h={'30%'} w={'30%'} objectFit={'contain'} position={'absolute'} right={'70'} bottom={'30'}  />
        <Image src="https://images.unsplash.com/photo-1621826269707-5b27afe47c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBpbWFnZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"  h={'80%'} w={'90%'} objectFit={'contain'} position={'absolute'} left={'45'} top={'30'} zIndex={'1'} mt={'7'}   />
      </Box>
    </HStack>
  );
};

export default Home;
