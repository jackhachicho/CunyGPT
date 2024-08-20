// components/Navigation.js
import React from 'react';
import { Box, Flex, Button, Image, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import LogoCunyGPT from '../Assets/LogoCunyGPT.png';

const Navigation = () => {
  return (
    <Box bg="gray.200" py={4}>
      <Flex justify="space-between" maxW="1000px" mx="auto">
        <RouterLink to="/">
          <Image
            src={LogoCunyGPT}
            alt="logo"
            width="200px"
          />
        </RouterLink>
        <HStack spacing={4}>
          <Button
            as={RouterLink}
            to="/"
            color="#FFB71B"
            bg="#204CAD"
            _hover={{ bg: "#071B49" }}
            borderRadius="30px"
            px={4}
            py={2}
          >
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/messaging"
            color="#FFB71B"
            bg="#204CAD"
            _hover={{ bg: "#071B49" }}
            borderRadius="30px"
            px={4}
            py={2}
          >
            Messaging
          </Button>
          <Button
            as={RouterLink}
            to="/about"
            color="#FFB71B"
            bg="#204CAD"
            _hover={{ bg: "#071B49" }}
            borderRadius="30px"
            px={4}
            py={2}
          >
            About
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
