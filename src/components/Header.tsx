import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="header"
      h="80px"
      bg="black"
      w="full"
      position="fixed"
      top="0"
      zIndex="99"
    >
      <Box
        maxW={"6xl"}
        display="flex"
        alignItems="center"
        h="full"
        justifyContent="space-between"
        mx="auto"
        px="10px"
      >
        <Link href="/">
          <Box display="flex" alignItems="center">
            <Image
              src="/icons/icon-72x72.png"
              w="42px"
              h="42px"
              alt="Company logo"
              mr="8px"
            />
            <Text color="white" fontWeight="bold">
              WHITE STONE
            </Text>
          </Box>
        </Link>
        <Box display="flex" gap="16px">
          <Text color="white" fontWeight="bold" cursor="pointer">
            About
          </Text>
          <Link href="/contest">
            <Text
              bgGradient="linear(to-l, #FFD700, #FFA500)"
              bgClip="text"
              fontWeight="bold"
              cursor="pointer"
            >
              Contest
            </Text>
          </Link>
          <Link href="mailto:whitestoneneed@gmail.com">
            <Text color="white" fontWeight="bold" cursor="pointer">
              Contact
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
