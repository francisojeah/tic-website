import { Box, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box
      bg={"#FFFFFF"}
      p="2rem"
      gap={"10"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Grid
        gridTemplateColumns={{
          lg: "60% 20% 20%",
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        fontSize={"1rem"}
      >
        <GridItem p={{ lg: "2rem", base: "1rem" }}>
          <Text
            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
            fontWeight={"500"}
            fontFamily={"iceberg"}
            mb={"0.2rem"}
          >
            THE TECH INNOVATION CLUB
          </Text>
          <Text
            fontSize={{ base: "0.75rem", lg: "1rem" }}
            fontWeight={"300"}
            fontFamily={"inter"}
          >
            Introducing students to the world of innovative technology
          </Text>
        </GridItem>
        <GridItem p={{ lg: "2rem", base: "1rem" }}>
          <Flex
            flexDirection={"column"}
            gap={"5"}
            fontSize={{ base: "0.75rem", lg: "1rem" }}
            fontWeight={"300"}
            fontFamily={"inter"}
          >
            <Link href={"#about"}>
              <Text>About</Text>
            </Link>
            <Link href={"#getstarted"}>
              <Text>Get started</Text>
            </Link>
            <Link href={"#howitworks"}>
              <Text>How it works</Text>
            </Link>
            <Link href={"#pastprojects"}>
              <Text>Past projects</Text>
            </Link>
            <Link href={"#programtimeline"}>
              <Text>2023/2024 program timeline</Text>
            </Link>
          </Flex>{" "}
        </GridItem>
        <GridItem p={{ lg: "2rem", base: "1rem" }}>
          <Flex
            flexDirection={"column"}
            gap={"5"}
            fontSize={{ base: "0.75rem", lg: "1rem" }}
            fontWeight={"300"}
            fontFamily={"inter"}
          >
            <Link href={"#program"}>
              <Text>2022 program</Text>
            </Link>
            <Link href={"#news"}>
              <Text>News</Text>
            </Link>
            <Link href={"#help"}>
              <Text>Help</Text>
            </Link>
            <Link href={"#contact"}>
              <Text>Contract</Text>
            </Link>
          </Flex>{" "}
        </GridItem>
      </Grid>
      <Box w={"full"} borderTop={"1px"} p={"4"} mx={"auto"} >
        <Flex
          gap={{ lg: "5rem", base: "unset" }}
          fontSize={{ lg: "0.875rem", base: "0.75rem" }}
          fontWeight={"300"}
          fontFamily={"inter"}
          justifyContent={{base:"space-between", lg: "unset"}}
        >
          <Link href={"#privacy"}>
            <Text>Privacy</Text>
          </Link>
          <Link href={"#rules"}>
            <Text>Rules</Text>
          </Link>
          <Link href={"#terms"}>
            <Text>Terms</Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
