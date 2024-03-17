/* import React from 'react' */
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoCloudUploadOutline } from "react-icons/io5";
import "../styles/movingelement.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const MotionHeading = motion(Heading);
  const MotionVstack = motion(VStack);
  /*   backgroundColor={"#d7e3fce7"}
#d7e3fce7 75%, purple.400 25%
 */
  return (
    <VStack backgroundColor={"#d7e3fce7"} 
    >
      <HStack minW={"full"} h={"100vh"}>
        <Container minW={"40%"} h={"80vh"} pt={"50px"}>
          {/* Help me add framer motion for the Three headings in the container */}

          <MotionHeading
            textTransform={"uppercase"}
            fontSize={"6.5rem"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Create{" "}
          </MotionHeading>

          <Box justifyContent={"flex-end"} display={"flex"}>
            <MotionHeading
              textTransform={"uppercase"}
              fontSize={"6.5rem"}
              lineHeight={"80px"}
              alignItems={"end"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Your
            </MotionHeading>
          </Box>

          <MotionHeading
            textTransform={"uppercase"}
            fontSize={"6.5rem"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Image
          </MotionHeading>
        </Container>
        <Box
          w={"50%"}
          h={"80vh"}
          pt={"5"}
          backgroundColor={"transparent"}
          position={"relative"}
          filter={"drop-shadow( 20px 20px 10px #805AD5)"}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1666265087444-780ca39dbe31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            h={"30%"}
            w={"30%"}
            objectFit={"contain"}
            position={"absolute"}
            right={"50"}
            transition={"transform 0.5s ease-in-out"}
            _hover={{ transform: "scale(1.1)", zIndex: "2" }}
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1672759323793-7fff002b3f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGh1bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            h={"30%"}
            w={"30%"}
            objectFit={"contain"}
            position={"absolute"}
            left={"20"}
            top={"90"}
            transition={"transform 0.5s ease-in-out"}
            _hover={{ transform: "scale(1.1)", zIndex: "2" }}
          />
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGh1bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            h={"30%"}
            w={"30%"}
            objectFit={"contain"}
            position={"absolute"}
            right={"70"}
            bottom={"30"}
            transition={"transform 0.5s ease-in-out"}
            _hover={{ transform: "scale(1.1)", zIndex: "2" }}
          />
          <Image
            src="https://images.unsplash.com/photo-1621826269707-5b27afe47c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBpbWFnZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"
            h={"80%"}
            w={"90%"}
            objectFit={"contain"}
            position={"absolute"}
            left={"45"}
            top={"30"}
            zIndex={"1"}
            mt={"7"}
            transition={"transform 0.5s ease-in-out"}
            _hover={{ transform: "scale(1.1)" }}
            overflow={"hidden"}
          />
        </Box>
      </HStack>

      <MotionVstack
        style={{ scale }}
        w={"100%"}
        h={"100vh"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Heading
          textTransform={"uppercase"}
          fontSize={"5rem"}
          lineHeight={"80px"}
        >
          Try it yourself
        </Heading>
        <Button
          variant={"solid"}
          w={"250px"}
          p={"5"}
          h={"70px"}
          backgroundColor={"#805AD5"}
          color={"white"}
          _hover={{ transform: "scale(1.2)", backgroundColor: "#805AD5" }}
        >
          {" "}
          <IoCloudUploadOutline fontSize={"2rem"} />
          <Text ml={3} fontSize={"1.5rem"}>
            <Link to="/edit">Upload Image</Link>
          </Text>
        </Button>
      </MotionVstack>

      <Container maxW={"container.xl"} minH={"100vh"} p={"16"} id={"about"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m={"auto"}
        >
          {" "}
          About
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Welcome to our unique platform where creativity meets technology.
            This website allows you to upload any image and leverage the power
            of Artificial Intelligence to design it. Our advanced AI analyzes
            your image and applies a variety of design principles to enhance it.
            Whether you are a professional designer looking for a quick edit or
            a beginner exploring the world of design, our platform is designed
            to cater to all your needs. Start by uploading an image and let our
            AI do the rest. Experience the future of design with
          </Text>
        </Stack>
      </Container>
    </VStack>
  );
};

export default Home;
