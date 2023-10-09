"use client";

import { Box } from "@chakra-ui/react";
import BodyWrapper from "@/components/BodyWrapper";

export default function Home() {
  return (
    <>
      <BodyWrapper>
        <Box
          w={{ base: "full" }}
          maxW={{ lg: "1199px" }}
          mt={{ lg: "6rem", base: "8rem" }}
          mx="auto"
          mb={"50px"}
          px={{ base: "1rem", lg: "unset" }}
        >
        </Box>
      </BodyWrapper>
    </>
  );
}
