import { Center, VStack, HStack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Sponsors() {
  return (
    <Center bg="gray.200" py="80px">
      <VStack>
        <Text color="black" fontSize="50px" fontWeight="extrabold" mb="40px">
          Our Sponsors
        </Text>
        <HStack>
          <StaticImage
            src="../images/sponsor1.png"
            alt="Sponsor logo"
            width={250}
          />
        </HStack>
      </VStack>
    </Center>
  );
}
