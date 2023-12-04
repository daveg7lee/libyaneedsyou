import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Tweet } from "react-twitter-widgets";

export default function TwitterNews() {
  const twitterId = [
    "1711653049343660319",
    "1709149943946989699",
    "1702382183820800253",
    "1704200342982848643",
    "1703134192291180576",
  ];

  return (
    <HStack minH="85vh" py="20px">
      <Marquee>
        {twitterId.map((id) => (
          <Box mx="6px">
            <Tweet tweetId={id} />
          </Box>
        ))}
      </Marquee>
    </HStack>
  );
}
