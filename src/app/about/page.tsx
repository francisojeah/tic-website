"use client";

import Footer from "@/components/Footer";
import MultipleDotsGrid from "@/components/MultipleDots";
import SideMenu from "@/components/SideMenu";
import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const About = () => {
  return (
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
        <Box bg={"linear-gradient(224deg, #4985F4 18.66%, #185ABC 68.67%)"}>
          <Flex
            justifyContent={"center"}
            color={"#FFFFFF"}
            flexDirection={"column"}
            gap={"1rem"}
            mx="auto"
            w={{ base: "full" }}
            maxW={{ lg: "1199px" }}
            py={{ base: "5rem" }}
            px={{ lg: "unset", base: "1rem" }}
          >
            <Text
              fontSize={{ lg: "3.75rem", md: "3rem", base: "2.5rem" }}
              fontWeight={"400"}
              fontFamily={"jetBrainsMono"}
            >
              About <br />
              The Tech Innovation Club
            </Text>
            <Text
              fontSize={{ lg: "1rem", base: "0.875rem" }}
              fontFamily={"inter"}
              fontWeight={"400"}
              w={{ lg: "50%" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              delectus ipsam quia iusto explicabo aliquam, harum eum consequatur
              quae adipisci eius quibusdam, eos quo repellendus, fugit placeat!
              Accusantium quisquam illum porro voluptate mollitia veniam
              corrupti quibusdam doloribus, repellendus tenetur. Doloremque
              facere placeat, adipisci explicabo aliquam accusantium at sit
              iusto veritatis?
            </Text>
          </Flex>{" "}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#F5F5F5"}
          py={{ base: "5rem" }}
          px={{ lg: "unset", base: "1rem" }}
          mx="auto"
        >
          <Text
            textAlign={"center"}
            fontSize={{ lg: "1.25rem", base: "1rem" }}
            fontWeight={"500"}
            w={{ lg: "50%" }}
            fontFamily={"inter"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et
            quas excepturi enim? Consequatur magnam sequi dignissimos iure
            itaque. Cupiditate saepe reiciendis tempora odio explicabo? Corporis
            sapiente dolores perspiciatis similique, excepturi voluptate
            molestias mollitia dignissimos repellendus impedit accusamus
            consequatur distinctio.
          </Text>
        </Box>
        <Box bg={"#FFFFFF"}>
          <Grid
            w={{ base: "full" }}
            maxW={{ lg: "1199px" }}
            mx="auto"
            py={{ base: "5rem" }}
            px={{ lg: "unset", base: "1rem" }}
            gridTemplateColumns={{ lg: "40% 60%" }}
          >
            <GridItem display={"flex"} alignItems={"center"} p={"1rem"}>
              <Box
                w={{ md: "9.125rem", base: "6rem" }}
                h={{ md: "12.25rem", base: "10rem" }}
                bg={
                  "linear-gradient(214deg, #6C0F8C 19.48%, #9512BB 51.39%, #CA17F6 85.65%)"
                }
                borderRadius={"0.8125rem"}
              ></Box>
              <Box
                w={{ md: "14.625rem", base: "10rem" }}
                h={{ md: "9.625rem", base: "6rem" }}
                bg={"#FFFFFF"}
                borderRadius={"1.25rem"}
                boxShadow={"10px 10px 45px 9px rgba(0, 0, 0, 0.05)"}
                ml={{ md: "-5rem", base: "-3rem" }}
                mb={{ md: "-7rem", base: "-5rem" }}
              ></Box>
            </GridItem>
            <GridItem display={"flex"} alignItems={"center"} p={"1rem"}>
              <Text
                fontSize={{ lg: "1rem", base: "0.875rem" }}
                fontWeight={"300"}
                lineHeight={"168.523%"}
                fontFamily={"inter"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas rutrum, leo laoreet feugiat vehicula, magna lacus
                blandit felis, non tincidunt diam mi accumsan orci. Nunc
                hendrerit blandit erat, id consectetur tellus bibendum ac.
                Praesent quis dictum risus. Nunc velit arcu, gravida vel
                pulvinar sit amet, malesuada in libero. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas rutrum, leo laoreet
                feugiat vehicula, magna lacus blandit felis, non tincidunt diam
                mi accumsan orci. Nunc hendrerit blandit erat, id consectetur
                tellus bibendum ac. Praesent quis dictum risus.
              </Text>
            </GridItem>
          </Grid>
        </Box>
        <Box bg={"#3C4043"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"1.5rem"}
            py={{ base: "5rem" }}
            px={{ lg: "unset", base: "1rem" }}
            w={{ base: "full" }}
            maxW={{ lg: "1199px" }}
            mx="auto"
            color={"#FFFFFF"}
          >
            <Text
              textAlign={"center"}
              fontSize={{ lg: "2.5rem", base: "2rem" }}
              fontWeight={"400"}
              fontFamily={"jetBrainsMono"}
            >
              Previous Programs
            </Text>
            <Text
              fontSize={{ md: "1rem", base: "0.75rem" }}
              fontWeight={"500"}
              lineHeight={"168.523%"}
              textAlign={"center"}
              fontFamily={"inter"}
            >
              Interested in projects from
              <br /> previous semesters?
            </Text>
            <Button
              bg="unset"
              color="#FFFFFF"
              fontWeight={"400"}
              fontFamily={"inter"}
              fontSize={{ lg: "1.125rem", base: "0.75rem" }}
              borderRadius={"0.4375rem"}
              transition={"all 0.2s ease-in-out"}
              _hover={{ filter: "brightness(105%)" }}
              borderWidth={"1px"}
              borderColor={"#FFFFFF"}
              w={"fit-content"}
            >
              View 2022 project list
            </Button>
          </Flex>
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default About;
