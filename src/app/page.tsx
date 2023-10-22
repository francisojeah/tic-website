"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";
import Meta from "@/components/Meta";
// import Image from "next/image";

const Home = () => {
  return (
    <>
      <Meta />
      <Flex minH="100vh">
        <Box
          position="fixed"
          h="100vh"
          w={{ lg: "6rem", base: "4rem" }}
          zIndex="1"
          className="side-menu"
          transition="transform 0.3s"
          bg="white"
        >
          <SideMenu />
        </Box>
        <Box flex="1" overflowX="auto" ml={{ base: "4rem", lg: "6rem" }}>
          {/* Banner */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            bg={`url('/assets/images/bannerBg.svg')`}
            p={{ md: "2rem", base: "1rem" }}
            h={{ md: "40rem", base: "30rem" }}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Flex
              flexDirection={"column"}
              gap={{ lg: "1.5rem", md: "1.25rem", base: "1rem" }}
            >
              <Flex>
                {/* <Image
              width="50"
              height="50"
              quality={100}
              src={"/assets/images/ticLogo.svg"}
              alt="TICLogo"
            ></Image> */}
                <Text
                  fontSize={{ lg: "1.5rem", md: "1.25rem", base: "1rem" }}
                  fontWeight={"400"}
                  fontFamily={"iceberg"}
                >
                  THE TECH INNOVATION CLUB
                </Text>
              </Flex>

              <Text
                fontSize={{ lg: "5.75rem", md: "4rem", base: "3rem" }}
                w={{ lg: "80%", base: "full" }}
                lineHeight={"118.5%"}
                fontWeight={"300"}
                fontFamily={"jetBrainsMono"}
              >
                Coming 2023/2024 session
              </Text>
              <Button
                bg="#1A73E8"
                color="#FFFFFF"
                fontWeight={"400"}
                fontSize={{ lg: "1.25rem", base: "0.75rem" }}
                fontFamily={"inter"}
                borderRadius={"1.375rem"}
                transition={"all 0.2s ease-in-out"}
                _hover={{ filter: "brightness(105%)" }}
                borderWidth={"1px"}
                borderColor={"#1A73E8"}
                w={"fit-content"}
              >
                View program page
              </Button>
            </Flex>
          </Flex>

          {/* about */}
          <Grid
            gridTemplateColumns={{
              lg: "repeat(2, 1fr)",
            }}
            color={"#FFFFFF"}
          >
            <GridItem
              bg={"linear-gradient(224deg, #4985F4 18.66%, #185ABC 68.67%)"}
              px={{ lg: "2rem", base: "1rem" }}
              py={{ lg: "2rem", base: "4rem" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex flexDirection={"column"} w={{ lg: "60%" }} gap={"2rem"}>
                <Text
                  fontSize={{ lg: "2.25rem", md: "2rem", base: "1.75rem" }}
                  fontFamily={"jetBrainsMono"}
                  fontWeight={"400"}
                >
                  What is the Tech Innovation Club?
                </Text>
                <Text
                  fontFamily={"inter"}
                  fontSize={{ md: "1rem", base: "0.75rem" }}
                  fontWeight={"300"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas sed tempus urna et pharetra. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit,
                </Text>
                <Button
                  fontFamily={"inter"}
                  bg="unset"
                  color="#FFFFFF"
                  fontWeight={"600"}
                  fontSize={{ md: "1rem", base: "0.75rem" }}
                  borderRadius={"0.4375rem"}
                  transition={"all 0.2s ease-in-out"}
                  _hover={{ filter: "brightness(105%)" }}
                  borderWidth={"1px"}
                  borderColor={"#FFFFFF"}
                  w={"fit-content"}
                >
                  Learn more
                </Button>
              </Flex>
            </GridItem>
            <GridItem
              bg={"#3C4043"}
              px={{ lg: "3rem", base: "1rem" }}
              py={{ lg: "3rem", base: "4rem" }}
            >
              <Grid
                gridTemplateColumns={"repeat(2, 1fr)"}
                gridTemplateRows={"repeat(3, 1fr)"}
              >
                <GridItem p={{ md: "2rem", base: "1rem" }}>
                  <Text
                    fontFamily={"jetBrainsMono"}
                    fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
                    fontWeight={"400"}
                  >
                    18K+
                  </Text>
                  <Text
                    fontFamily={"inter"}
                    fontSize={{ lg: "1.25rem", md: "1rem", base: "0.85rem" }}
                    fontWeight={"400"}
                  >
                    Students
                  </Text>
                </GridItem>
                <GridItem p={{ md: "2rem", base: "1rem" }}>
                  <Text
                    fontFamily={"jetBrainsMono"}
                    fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
                    fontWeight={"400"}
                  >
                    112
                  </Text>
                  <Text
                    fontFamily={"inter"}
                    fontSize={{ lg: "1.25rem", md: "1rem", base: "0.85rem" }}
                    fontWeight={"400"}
                  >
                    Departments
                  </Text>
                </GridItem>
                {/* <GridItem p={{ md: "2rem", base: "1rem" }}></GridItem> */}
                <GridItem p={{ md: "2rem", base: "1rem" }}>
                  <Text
                    fontFamily={"jetBrainsMono"}
                    fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
                    fontWeight={"400"}
                  >
                    40M+
                  </Text>
                  <Text
                    fontFamily={"inter"}
                    fontSize={{ lg: "1.25rem", md: "1rem", base: "0.85rem" }}
                    fontWeight={"400"}
                  >
                    Lines of Codes
                  </Text>
                </GridItem>
                <GridItem p={{ md: "2rem", base: "1rem" }}>
                  <Text
                    fontFamily={"jetBrainsMono"}
                    fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
                    fontWeight={"400"}
                  >
                    746
                  </Text>
                  <Text
                    fontFamily={"inter"}
                    fontSize={{ lg: "1.25rem", md: "1rem", base: "0.85rem" }}
                    fontWeight={"400"}
                  >
                    Projects
                  </Text>
                </GridItem>
                {/* <GridItem p={{ md: "2rem", base: "1rem" }}></GridItem> */}
                <GridItem p={{ md: "2rem", base: "1rem" }}>
                  <Text
                    fontFamily={"jetBrainsMono"}
                    fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
                    fontWeight={"400"}
                  >
                    17K+
                  </Text>
                  <Text
                    fontFamily={"inter"}
                    fontSize={{ lg: "1.25rem", md: "1rem", base: "0.85rem" }}
                    fontWeight={"400"}
                  >
                    Mentors
                  </Text>
                </GridItem>
                <GridItem p={{ md: "2rem", base: "1rem" }}>
                  <Text
                    fontFamily={"jetBrainsMono"}
                    fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
                    fontWeight={"400"}
                  >
                    17
                  </Text>
                  <Text
                    fontFamily={"inter"}
                    fontSize={{ lg: "1.25rem", md: "1rem", base: "0.85rem" }}
                    fontWeight={"400"}
                  >
                    Years
                  </Text>
                </GridItem>
                {/* <GridItem p={{ md: "2rem", base: "1rem" }}></GridItem> */}
              </Grid>
            </GridItem>
          </Grid>

          <Box bg={"#F5F5F5"} py={{ lg: "6rem", base: "4rem" }}>
            <Flex
              flexDirection={"column"}
              w={{ base: "full" }}
              maxW={{ lg: "1199px" }}
              mx="auto"
              px={{ base: "1rem", lg: "unset" }}
              gap={{ md: "2rem", base: "1rem" }}
            >
              <Text
                fontSize={{ lg: "3.5rem", md: "3rem", base: "2.5rem" }}
                fontWeight={"400"}
                fontFamily={"jetBrainsMono"}
              >
                Become a TIC contributor
              </Text>
              <Text
                fontSize={{ lg: "1rem", base: "0.75rem" }}
                fontWeight={"200"}
                w={{ lg: "60%", base: "full" }}
                fontFamily={"inter"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas sed tempus urna et pharetra.
              </Text>
              <Button
                bg="#1A73E8"
                color="#FFFFFF"
                fontFamily={"inter"}
                fontWeight={"400"}
                fontSize={{ lg: "1.125rem", base: "0.75rem" }}
                borderRadius={"1.375rem"}
                transition={"all 0.2s ease-in-out"}
                _hover={{ filter: "brightness(105%)" }}
                borderWidth={"1px"}
                borderColor={"#1A73E8"}
                w={"fit-content"}
              >
                View 2022 project list
              </Button>

              <Grid
                gridTemplateColumns={{
                  lg: "repeat(3, 1fr)",
                }}
                mt={"2rem"}
                gap={{ base: "2rem", lg: "unset" }}
              >
                <GridItem
                  bg={"#FFFFFF"}
                  borderRadius={"1.25rem"}
                  boxShadow={"0px 5px 14px 6px rgba(0, 0, 0, 0.05)"}
                  justifyContent={"center"}
                  gap={{ lg: "2rem", base: "1rem" }}
                  p={{ md: "2rem", base: "1rem" }}
                  h={{ base: "12rem", lg: "unset" }}
                  display={"flex"}
                  flexDirection={"column"}
                  mr={{ lg: "0.5rem" }}
                >
                  <Flex>
                    <Image
                      width="30"
                      height="30"
                      src={"/assets/images/play.svg"}
                      alt="PlayIcon"
                    />
                  </Flex>
                  <Text
                    fontSize={{ lg: "1rem", base: "0.875rem" }}
                    fontWeight={"400"}
                    fontFamily={"inter"}
                  >
                    Learn why you should apply to be a TIC contributor
                  </Text>
                  <Link href={"/"}>
                    <Text
                      color={"#185ABC"}
                      fontWeight={"500"}
                      fontSize={{ lg: "0.875rem", base: "0.75rem" }}
                      fontFamily={"inter"}
                    >
                      Watch Video
                    </Text>
                  </Link>
                </GridItem>
                <GridItem
                  bg={"#FFFFFF"}
                  borderRadius={"1.25rem"}
                  boxShadow={"0px 5px 14px 6px rgba(0, 0, 0, 0.05)"}
                  justifyContent={"center"}
                  gap={{ lg: "2rem", base: "1rem" }}
                  p={{ md: "2rem", base: "1rem" }}
                  h={{ base: "12rem", lg: "unset" }}
                  flexDirection={"column"}
                  display={"flex"}
                  mx={{ lg: "0.5rem" }}
                >
                  <Box>
                    <Text
                      fontSize={{ lg: "1rem", base: "0.875rem" }}
                      fontWeight={"400"}
                      fontFamily={"inter"}
                    >
                      The Tech Innovation Club is always ready to welcome new,
                      excited contributors into our community.
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  bg={"#FFFFFF"}
                  borderRadius={"1.25rem"}
                  boxShadow={"0px 5px 14px 6px rgba(0, 0, 0, 0.05)"}
                  justifyContent={"center"}
                  gap={{ lg: "2rem", base: "1rem" }}
                  p={{ md: "2rem", base: "1rem" }}
                  h={{ base: "12rem", lg: "unset" }}
                  display={"flex"}
                  flexDirection={"column"}
                  ml={{ lg: "0.5rem" }}
                >
                  <Flex>
                    <Image
                      width="30"
                      height="30"
                      src={"/assets/images/lightbulb.svg"}
                      alt="lightbulbIcon"
                    />
                  </Flex>
                  <Text
                    fontSize={{ lg: "1rem", base: "0.875rem" }}
                    fontWeight={"400"}
                    fontFamily={"inter"}
                  >
                    Learn how to apply to be a TIC contributor
                  </Text>
                  <Link href={"/"}>
                    <Text
                      color={"#185ABC"}
                      fontWeight={"500"}
                      fontSize={{ lg: "0.875rem", base: "0.75rem" }}
                      fontFamily={"inter"}
                    >
                      Watch Video
                    </Text>
                  </Link>
                </GridItem>
              </Grid>
            </Flex>
          </Box>

          <Box
            bg={
              "linear-gradient(90deg, #125CBD 0.27%, rgba(26, 115, 232, 0.71) 101.13%)"
            }
            px={{ lg: "5rem", base: "1rem" }}
            py={{ lg: "5rem", base: "2.5rem" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ lg: "3.75rem", md: "3rem", base: "2.5rem" }}
              fontWeight={"400"}
              color={"#FFFFFF"}
              mb={{ lg: "3rem", base: "1.5rem" }}
              fontFamily={"jetBrainsMono"}
            >
              Latest News
            </Text>
            <Box
              bg={"#FFFFFF"}
              borderRadius={"1.5625rem"}
              w={{ lg: "38rem", md: "30rem", base: "full" }}
              h={{ lg: "40rem", md: "30rem", base: "20rem" }}
            ></Box>
          </Box>

          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
