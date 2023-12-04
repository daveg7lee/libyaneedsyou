import {
  useColorModeValue,
  Container,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <Box
      as="footer"
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
        <Text>
          © {new Date().getFullYear()} White Stone. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/Whitestone_need"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Gmail"} href="mailto:whitestoneneed@gmail.com">
            <CiMail />
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
  );
}
