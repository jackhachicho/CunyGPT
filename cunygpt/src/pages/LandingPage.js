import React from 'react';
import { Box, Heading, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import all CUNY images
import CUNY_Baruch from "../Assets/CUNY_Baruch.png";
import CUNY_BC from "../Assets/CUNY_BC.png";
import CUNY_BCC from "../Assets/CUNY_BCC.png";
import CUNY_BMCC from "../Assets/CUNY_BMCC.jpg";
import CUNY_CCNY from "../Assets/CUNY_CCNY.png";
import CUNY_CSI from "../Assets/CUNY_CSI.png";
import CUNY_Graduate_Center from "../Assets/CUNY_Graduate_Center.png";
import CUNY_Guttman from "../Assets/CUNY_Guttman.gif";
import CUNY_Health_Policy from "../Assets/CUNY_Health_Policy.png";
import CUNY_Hostos from "../Assets/CUNY_Hostos.png";
import CUNY_Hunter from "../Assets/CUNY_Hunter.png";
import CUNY_JohnJay from "../Assets/CUNY_JohnJay.png";
import CUNY_Journalism from "../Assets/CUNY_Journalism.png";
import CUNY_Kingsborough from "../Assets/CUNY_Kingsborough.jpg";
import CUNY_Labor from "../Assets/CUNY_Labor.png";
import CUNY_Law from "../Assets/CUNY_Law.png";
import CUNY_Lehman from "../Assets/CUNY_Lehman.png";
import CUNY_Macaulay from "../Assets/CUNY_Macaulay.png";
import CUNY_Medgar from "../Assets/CUNY_Medgar.png";
import CUNY_NYCCT from "../Assets/CUNY_NYCCT.jpg";
import CUNY_Professional_Studies from "../Assets/CUNY_Professional_Studies.png";
import CUNY_QCC from "../Assets/CUNY_QCC.png";
import CUNY_Queens from "../Assets/CUNY_Queens.webp";
import CUNY_York from "../Assets/CUNY_York.png";

const SliderImage = ({ src, alt }) => (
  <Box
    w="150px"
    h="150px"
    m={2}
    position="relative"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{ '& > img': { filter: 'none' } }}
  >
    <Image
      src={src}
      alt={alt}
      w="100%"
      h="100%"
      objectFit="contain"
      filter="grayscale(100%)"
      transition="all 0.3s"
    />
  </Box>
);

const SliderContainer = ({ children }) => (
  <Box
    maxW="1000px"
    mx="auto"
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '50px',
      background: 'linear-gradient(to right, white, transparent)',
      zIndex: 1,
    }}
    _after={{
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '50px',
      background: 'linear-gradient(to left, white, transparent)',
      zIndex: 1,
    }}
  >
    {children}
  </Box>
);

const LandingPage = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
    useCSS: true,
  };

  const cunyImages = [
    CUNY_Baruch, CUNY_BC, CUNY_BCC, CUNY_BMCC, CUNY_CCNY, CUNY_CSI, CUNY_Graduate_Center,
    CUNY_Guttman, CUNY_Health_Policy, CUNY_Hostos, CUNY_Hunter, CUNY_JohnJay, CUNY_Journalism,
    CUNY_Kingsborough, CUNY_Labor, CUNY_Law, CUNY_Lehman, CUNY_Macaulay, CUNY_Medgar,
    CUNY_NYCCT, CUNY_Professional_Studies, CUNY_QCC, CUNY_Queens, CUNY_York
  ];

  return (
    <Box>
      <Flex justify="center" mt={20}>
        <Image src="placeholder.jpg" alt="Placeholder" />
      </Flex>
      <Flex justify="center" mt={6}>
        <Button
          colorScheme="blue"
          color="#FFB71B"
          bg="#204CAD"
          _hover={{ bg: '#071B49' }}
          as={RouterLink}
          to="/messaging"
        >
          Try now for free
        </Button>
      </Flex>
      <Divider my={12} />
      <Flex justify="center" align="center" mb={8}>
        <Image src="placeholder.jpg" alt="Placeholder" mr={8} />
        <Box>
          <Heading mb={2} fontSize="2xl">The Problem</Heading>
          <Text>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </Text>
        </Box>
      </Flex>
      <Flex justify="center" align="center" mb={8}>
        <Box>
          <Heading mb={2} fontSize="2xl">Our Solution</Heading>
          <Text>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </Text>
        </Box>
        <Image src="placeholder.jpg" alt="Placeholder" ml={8} />
      </Flex>
      <Heading mb={4} textAlign="center">
        See how it works
      </Heading>
      <Flex justify="center" mb={12}>
        <Image src="placeholder.gif" alt="Placeholder" />
      </Flex>
      
      <Heading mb={4} textAlign="center">
        CunyGPT is connected to:
      </Heading>
      <SliderContainer>
        <Slider {...sliderSettings}>
          {cunyImages.map((img, index) => (
            <SliderImage key={index} src={img} alt={`CUNY ${index + 1}`} />
          ))}
        </Slider>
      </SliderContainer>
      <SliderContainer>
        <Slider {...{ ...sliderSettings, rtl: true }}>
          {cunyImages.map((img, index) => (
            <SliderImage key={index} src={img} alt={`CUNY ${cunyImages.length - index}`} />
          ))}
        </Slider>
      </SliderContainer>
      
      <Flex justify="center">
        <Button
          colorScheme="blue"
          color="#FFB71B"
          bg="#204CAD"
          _hover={{ bg: '#071B49' }}
          as={RouterLink}
          to="/messaging"
          mb={3}
        >
          Try now for free
        </Button>
      </Flex>
    </Box>
  );
};

export default LandingPage;