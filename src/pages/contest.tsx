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
          2023년 9월 11일 발생한 홍수로 인해 리비아 국민들이 말로 표현할 수 없는
          큰 피해 를 입었습니다. 6.25전쟁 당시 이웃 나라로부터 많은 도움을 받아
          어려움을 극복했던 것을 기억하며, 리비아 국민들을 돕고 희망을 전하기
          위해 이 대회를 개최합니다.
          <br />
          주제: 홍수로 인해 피해를 입은 리비아인들을 향한 희망의 메세지
          <br />
          주최 : WHITESTONE, 주한 리비아 대사관 공동 주최
          <br />
          참가 대상 : 전국 초 · 중 · 고 학생 (학교밖 청소년 포함)
          <br />
          대회 기간: 3/4~3/24
          <br />
          대회 참가비: 5,000원 (참가비는 전액 후원금으로 사용될 예정입니다.)
          *송금 계좌: 카카오뱅크 3333-28-7320488 (예: “초등부000” 이름으로 송금)
          <br />
          심사 기준: 스피치 실력, 스크립트 내용
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
        <Text lineHeight="35px" mt="15px" fontSize="large">
          발표 : 2024년 4월 3일(수) 20:00 [홈페이지 게시 및 개별 이메일 연락]
          <br />
          상장 수여 : 2024년 4월 10일(수) [이메일로 영문, 한글 상장 모두 지급
          예정]
          <br />
          문의 : whitestoneneed@gmail.com
        </Text>
        <Button
          as="a"
          href="https://forms.gle/AeHhzkiQcYBS2UW46"
          target="_blank"
          my="30px"
        >
          대회 지원하기
        </Button>
      </Box>
      <Footer />
    </>
  );
}
