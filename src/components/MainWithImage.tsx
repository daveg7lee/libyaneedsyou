import React from "react";
import { VStack, Button, Box, Text, useToast } from "@chakra-ui/react";

export default function MainWithImage() {
  const toast = useToast();

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText("3333-28-7320488");
    toast({
      status: "success",
      title: "클립보드에 복사되었습니다!",
    });
  };

  return (
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
              lineHeight="28px"
            >
              한 번의 클릭으로 필요한 이들을 지원할 수 있습니다.
            </Text>
            <Button as="a" href="https://toss.me/whitestone" target="_blank">
              토스로 기부하기
            </Button>
            <Text
              textAlign="center"
              color="white"
              fontSize="16px"
              fontWeight="semibold"
            >
              또는
            </Text>
            <Text
              textAlign="center"
              color="white"
              fontSize="16px"
              fontWeight="semibold"
              onClick={() => copyToClipBoard()}
            >
              카카오뱅크: 3333-28-7320488
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
