import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function LibyaInfo() {
  return (
    <SimpleGrid
      minH="100vh"
      py={["20px", "100px"]}
      px="10px"
      columns={[1, 1, 2]}
      maxW={"6xl"}
      mx="auto"
      gap="18px"
    >
      <Box>
        <Text color="black" fontSize="50px" fontWeight="bold" lineHeight="60px">
          사하라 사막의 고향, 리비아
        </Text>
        <Text mt="20px" color="grey" fontSize="20px" lineHeight="28px">
          리비아는 북아프리카에 위치한 국가로, 지중해와 인접해 있습니다. 면적
          면에서 아프리카에서 네 번째로 큰 국가이며, 대부분의 땅이 사하라 사막에
          포함되어 있어 국토의 대부분이 건조하고 무덥습니다. 리비아는 고대부터
          여러 문명의 영향을 받아왔으며, 페니키아인, 그리스인, 로마인, 바이잔틴,
          아랍인 등 다양한 문화의 영향을 받았습니다.
          <br />
          <br />
          중세에는 이슬람 지배 하에 들어갔으며, 이후 오스만 제국의 일부가
          되었습니다. 20세기 초에는 이탈리아의 식민지가 되었고, 제2차 세계대전
          후에 독립을 획득했습니다. 1969년 무아마르 카다피가 쿠데타를 통해
          정권을 장악한 이후, 그는 2011년까지 리비아를 지배했습니다. 2011년 아랍
          봄 동안 발생한 내전으로 카다피 정권은 붕괴되었습니다.
          <br />
          <br />
          경제적으로 리비아는 석유 매장량이 풍부하여, 석유 수출이 국가 수입의
          대부분을 차지합니다. 그러나 정치적 불안정과 내전으로 인해 경제는 큰
          타격을 받았습니다. 또한, 국가는 여전히 정치적 안정을 찾지 못하고 여러
          분파 간의 충돌이 지속되고 있습니다.
          <br />
          <br />
          리비아는 또한 유네스코 세계유산 목록에 등재된 여러 역사적 유적지를
          보유하고 있습니다. 이 중 리비아 고대 로마 도시 유적인 렙티스 마그나와
          사브라타, 그리고 그리스-로마 도시인 키레네는 특히 유명합니다. 이
          유적들은 리비아의 풍부한 역사와 문화를 보여주는 중요한 자산입니다.
          <br />
          <br />
          종합하면, 리비아는 다양한 역사적, 문화적 배경을 가진 국가로, 풍부한
          자연 자원과 역사적 유산을 보유하고 있음에도 불구하고, 정치적 불안정과
          경제적 어려움에 직면해 있는 나라입니다. - by ChatGPT -
        </Text>
      </Box>
      <StaticImage
        src="../images/libyamap.webp"
        alt="Libya Map"
        objectFit="scale-down"
      />
    </SimpleGrid>
  );
}
