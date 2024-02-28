import React from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contest() {
  return (
    <>
      <Header />
      <Box pt="120px" w="full" maxW={"6xl"} h="full" mx="auto" px="10px">
        <Heading mb="25px" fontSize="xxx-large">
          2024 LIBYANEEDSYOU 전국 청소년 스피치 콘테스트
        </Heading>
        <Text fontSize="xx-large" fontWeight={700} my="14px">
          대회 개요
        </Text>
        <Text lineHeight="35px" fontSize="large">
          대회 주제: 홍수로 인해 피해를 입은 리비아인들을 향한 희망의 메세지
          <br />
          개최: 주한리비아대사관, WHITESTONE
          <br />
          참가 대상: 전국 초등부, 중등부, 고등부
        </Text>
        <TableContainer maxW="650px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>초등부</Th>
                <Th>중등부</Th>
                <Th>고등부</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>영상 길이</Td>
                <Td>1분</Td>
                <Td>4~5분</Td>
                <Td>4~5분</Td>
              </Tr>
              <Tr>
                <Td>스크립트 단어 수</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Text lineHeight="35px" mt="15px" fontSize="large">
          대회 기간: 3/4~3/24
          <br />
          대회 참여 비용: 5,000원 (전액 후원금으로 사용될 예정) → (초등부 000
          이름으로 송금)
          <br />
          심사 기준: 스피치 실력, 스크립트 내용
          <br />
          시상 항목
        </Text>
        <TableContainer maxW="650px" mb="30px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>초등부</Th>
                <Th>중등부</Th>
                <Th>고등부</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>대상</Td>
                <Td>1명</Td>
                <Td>1명</Td>
                <Td>1명</Td>
              </Tr>
              <Tr>
                <Td>최우수상</Td>
                <Td>2명</Td>
                <Td>3명</Td>
                <Td>3명</Td>
              </Tr>
              <Tr>
                <Td>우수상</Td>
                <Td>3명</Td>
                <Td>3명</Td>
                <Td>3명</Td>
              </Tr>
              <Tr>
                <Td>우수상</Td>
                <Td>5명</Td>
                <Td>5명</Td>
                <Td>5명</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Button
          as="a"
          href="https://forms.gle/AeHhzkiQcYBS2UW46"
          target="_blank"
          mb="30px"
        >
          대회 지원하기
        </Button>
      </Box>
      <Footer />
    </>
  );
}
