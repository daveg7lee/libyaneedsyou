import { Center, VStack, Button, Text } from "@chakra-ui/react";
import React from "react";

interface ITotalAmountProps {
  amount: number;
}

export default function TotalAmount({ amount }: ITotalAmountProps) {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate =
    monthNames[currentDate.getMonth()] +
    " " +
    currentDate.getDate() +
    " " +
    currentDate.getFullYear();

  return (
    <Center h="50vh">
      <VStack>
        <Text
          color="black"
          fontSize="80px"
          fontWeight="extrabold"
          textAlign="center"
        >
          {amount.toLocaleString()} KRW
        </Text>
        <Text my="16px" color="grey" fontSize="20px">
          Has been donated as of {formattedDate}
        </Text>
        <Button as="a" href="https://toss.me/whitestone" target="_blank">
          토스로 기부하기
        </Button>
      </VStack>
    </Center>
  );
}
