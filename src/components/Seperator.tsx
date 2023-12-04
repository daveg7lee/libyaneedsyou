import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface ISeperatorProps {
  text: string;
}

export default function Seperator({ text }: ISeperatorProps) {
  return (
    <Box
      bgColor="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={["8", "14"]}
    >
      <Text
        textAlign="center"
        color="white"
        fontSize={["25", "50px"]}
        fontWeight="bold"
      >
        {text}
      </Text>
    </Box>
  );
}
