import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";

export default function Header() {
  const scrollToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

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
        <Box display="flex" gap="16px">
          <Text color="white" fontWeight="bold" cursor="pointer">
            About
          </Text>
          <Text
            color="white"
            fontWeight="bold"
            cursor="pointer"
            onClick={scrollToBottom}
          >
            Contact
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
