import { SimpleGrid, VStack, Button, Box, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function LibyaStatus() {
  return (
    <SimpleGrid
      minH="85vh"
      py="20px"
      px="10px"
      display="grid"
      columns={[1, 1, 3]}
      gap="40px"
      justifyContent="center"
      alignItems="center"
      maxW={"6xl"}
      mx="auto"
    >
      <Box borderRadius="7px" overflow="hidden" shadow="base">
        <StaticImage
          src="../images/libyadam.webp"
          alt="Dam image"
          height={400}
          width={480}
        />
        <VStack p="30px" alignItems="flex-start">
          <Text fontWeight="semibold" color="black" fontSize="20px">
            태풍 다니엘에 의해 2개의 댐 붕괴
          </Text>
          <Text
            fontWeight="medium"
            color="grey"
            fontSize="15px"
            lineHeight="20px"
          >
            50년 역사상 큰 태픙으로 인해 2개의 댐이 파괴 되었고..
          </Text>
          <Button colorScheme="blackAlpha">Read More</Button>
        </VStack>
      </Box>
      <Box borderRadius="7px" overflow="hidden" shadow="base">
        <StaticImage
          src="../images/flood.webp"
          alt="Flood image"
          height={400}
          width={480}
        />
        <VStack p="30px" alignItems="flex-start">
          <Text fontWeight="semibold" color="black" fontSize="20px">
            홍수가 데르나를 뒤덮었다
          </Text>
          <Text
            fontWeight="medium"
            color="grey"
            fontSize="15px"
            lineHeight="20px"
          >
            데르나의 지역 중 25%가 지도에서 사라지고 수천 명이...
          </Text>
          <Button colorScheme="blackAlpha">Read More</Button>
        </VStack>
      </Box>
      <Box borderRadius="7px" overflow="hidden" shadow="base">
        <StaticImage
          src="../images/aftermath.webp"
          alt="Aftermath image"
          height={400}
          width={480}
        />
        <VStack p="30px" alignItems="flex-start">
          <Text fontWeight="semibold" color="black" fontSize="20px">
            현재상황
          </Text>
          <Text
            fontWeight="medium"
            color="grey"
            fontSize="15px"
            lineHeight="20px"
          >
            11300명 이상의 사람들이 사망한 것으로 확인됐으며, 추가 30000명이
            실종되었습니다.
          </Text>
          <Button colorScheme="blackAlpha">Read More</Button>
        </VStack>
      </Box>
    </SimpleGrid>
  );
}
