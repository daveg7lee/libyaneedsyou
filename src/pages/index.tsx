import * as React from "react";
import "../styles/style.css";
import "../styles/reset.css";
import { Script, type PageProps } from "gatsby";
import {
  Box,
  Button,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import { Tweet } from "react-twitter-widgets";
import Marquee from "react-fast-marquee";
import SocialButton from "../components/SocialButton";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const twitterId = [
  "1711653049343660319",
  "1709149943946989699",
  "1702382183820800253",
  "1704200342982848643",
  "1703134192291180576",
];

const IndexPage: React.FC<PageProps> = () => {
  const [isKorea, setIsKorea] = React.useState(false);

  const KOREA_BOUNDS = {
    lat: { min: 33, max: 38 },
    lng: { min: 125, max: 131 },
  };

  // 사용자의 위치가 한국 내에 있는지 확인하는 함수
  function isInKorea(lat: number, lng: number) {
    return (
      lat >= KOREA_BOUNDS.lat.min &&
      lat <= KOREA_BOUNDS.lat.max &&
      lng >= KOREA_BOUNDS.lng.min &&
      lng <= KOREA_BOUNDS.lng.max
    );
  }

  // 위치 정보를 얻는 함수
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (isInKorea(latitude, longitude)) {
          setIsKorea(true);
        } else {
          setIsKorea(false);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // 위치 정보 얻기 함수 호출
  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Box minH="100vh">
        <Box position="relative" className="mainImage">
          <Box
            position="absolute"
            left="50%"
            top="50%"
            transform="translateX(-50%) translateY(-50%)"
          >
            <VStack justifyContent="center" gap="12px">
              <Text
                fontSize="65px"
                color="white"
                fontWeight="extrabold"
                textAlign="center"
              >
                Libya Needs You.
              </Text>
              <Text
                textAlign="center"
                color="white"
                fontSize="22px"
                fontWeight="semibold"
              >
                You can help support those in <br /> desperate need with just 1
                click.
              </Text>
              <Button
                as="a"
                href="https://paypal.me/whitestoneneed?country.x=KR&locale.x=ko_KR"
              >
                Donate Now
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
      <SimpleGrid minH="100vh" p={["20px", "100px"]} columns={[1, 1, 2]}>
        <Box>
          <Text
            color="black"
            fontSize="50px"
            fontWeight="bold"
            lineHeight="60px"
          >
            A country home to the Sahara Desert, Libya
          </Text>
          <Text mt="20px" color="grey" fontSize="20px">
            Located in North Africa, Libya is a country with distinct cultures
            and is known for its ancient Greek and Roman ruins.
          </Text>
        </Box>
        <StaticImage
          src="../images/libyamap.webp"
          alt="Libya Map"
          objectFit="scale-down"
        />
      </SimpleGrid>

      <Box
        minH="15vh"
        bgColor="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          color="white"
          fontSize={["25", "50px"]}
          fontWeight="bold"
        >
          What happened in Libya?
        </Text>
      </Box>
      <SimpleGrid
        minH="85vh"
        p="20px"
        display="grid"
        columns={[1, 1, 3]}
        gap="40px"
        justifyContent="center"
        alignItems="center"
      >
        <Box borderRadius="7px" overflow="hidden" shadow="base" minH="70vh">
          <StaticImage
            src="../images/libyadam.webp"
            alt="Dam image"
            height={400}
            width={480}
          />
          <VStack p="30px" alignItems="flex-start">
            <Text fontWeight="semibold" color="black" fontSize="20px">
              Storm Daniel bursts 2 dams
            </Text>
            <Text fontWeight="medium" color="grey" fontSize="15px">
              The deadliest Mediterranean tropical cyclone in recorded history
              shatters the 50-year-old dams.
            </Text>
            <Button colorScheme="blackAlpha">Read More</Button>
          </VStack>
        </Box>
        <Box borderRadius="7px" overflow="hidden" shadow="base" minH="70vh">
          <StaticImage
            src="../images/flood.webp"
            alt="Flood image"
            height={400}
            width={480}
          />
          <VStack p="30px" alignItems="flex-start">
            <Text fontWeight="semibold" color="black" fontSize="20px">
              Flood wipes Derna
            </Text>
            <Text fontWeight="medium" color="grey" fontSize="15px">
              A quarter of Derna is gone, and thousands are forced to leave.
            </Text>
            <Button colorScheme="blackAlpha">Read More</Button>
          </VStack>
        </Box>
        <Box borderRadius="7px" overflow="hidden" shadow="base" minH="70vh">
          <StaticImage
            src="../images/aftermath.webp"
            alt="Aftermath image"
            height={400}
            width={480}
          />
          <VStack p="30px" alignItems="flex-start">
            <Text fontWeight="semibold" color="black" fontSize="20px">
              Aftermath
            </Text>
            <Text fontWeight="medium" color="grey" fontSize="15px">
              11,000 people died, and 30,000 are missing. Suffering continues.
            </Text>
            <Button colorScheme="blackAlpha">Read More</Button>
          </VStack>
        </Box>
      </SimpleGrid>

      <Box
        minH="15vh"
        bgColor="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          color="white"
          fontSize={["25", "50px"]}
          fontWeight="bold"
        >
          Latest News
        </Text>
      </Box>
      <HStack minH="85vh" py="20px">
        <Marquee>
          {twitterId.map((id) => (
            <Box mx="6px">
              <Tweet tweetId={id} />
            </Box>
          ))}
        </Marquee>
      </HStack>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 White Stone. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/Whitestone_need"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/whitestone_needu/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default IndexPage;
