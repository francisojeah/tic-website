"use client";

import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";
import {
  Box,
  Button,
  Flex,
  Image,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

const HowItWorks = () => {
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
              How It <br />
              Works
            </Text>
          </Flex>
        </Box>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#F5F5F5"}
          py={{ base: "5rem" }}
          px={{ lg: "unset", base: "1rem" }}
          mx="auto"
        >
          <Grid
            w={{ base: "full" }}
            maxW={{ lg: "1199px" }}
            gridTemplateColumns={{ lg: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ base: "2rem", lg: "unset" }}
          >
            <GridItem
              m={{ md: "2rem" }}
              h={{ lg: "19.6875rem", md: "15rem", base: "12rem" }}
              bg={"#FFFFFF"}
              boxShadow={"10px 10px 33px 4px rgba(0, 0, 0, 0.10)"}
              borderRadius={"0.9375rem"}
              p={{ md: "2rem", base: "1rem" }}
            >
              <Flex
                h={"full"}
                justifyContent={"space-around"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Image
                  src={"/assets/images/how-to-reg.svg"}
                  alt="RegisterIcon"
                />
                <Text
                  fontSize={{ lg: "2rem", md: "1.5rem", base: "1rem" }}
                  fontFamily={"inter"}
                  fontWeight={"300"}
                >
                  Register
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ lg: "0.875rem", base: "0.75rem" }}
                  fontFamily={"inter"}
                  fontWeight={"300"}
                >
                  Become a member of our club
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              m={{ md: "2rem" }}
              h={{ lg: "19.6875rem", md: "15rem", base: "12rem" }}
              bg={"#FFFFFF"}
              boxShadow={"10px 10px 33px 4px rgba(0, 0, 0, 0.10)"}
              borderRadius={"0.9375rem"}
              p={{ md: "2rem", base: "1rem" }}
            >
              <Flex
                h={"full"}
                justifyContent={"space-around"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Image src={"/assets/images/groups.svg"} alt="GroupsIcon" />
                <Text
                  fontSize={{ lg: "2rem", md: "1.5rem", base: "1rem" }}
                  fontFamily={"inter"}
                  fontWeight={"300"}
                >
                  Attend
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ lg: "0.875rem", base: "0.75rem" }}
                  fontFamily={"inter"}
                  fontWeight={"300"}
                >
                  Take part in our scheduled meetings
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              m={{ md: "2rem" }}
              h={{ lg: "19.6875rem", md: "15rem", base: "12rem" }}
              bg={"#FFFFFF"}
              boxShadow={"10px 10px 33px 4px rgba(0, 0, 0, 0.10)"}
              borderRadius={"0.9375rem"}
              p={{ md: "2rem", base: "1rem" }}
            >
              <Flex
                h={"full"}
                justifyContent={"space-around"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Image
                  src={"/assets/images/tips-and-updates.svg"}
                  alt="RegisterIcon"
                />
                <Text
                  fontSize={{ lg: "2rem", md: "1.5rem", base: "1rem" }}
                  fontFamily={"inter"}
                  fontWeight={"300"}
                >
                  Innovate
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ lg: "0.875rem", base: "0.75rem" }}
                  fontFamily={"inter"}
                  fontWeight={"300"}
                >
                  Come up with great ideas that could revolutionize technology
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Grid
          w={{ base: "full" }}
          maxW={{ lg: "1199px" }}
          mx="auto"
          py={{ base: "5rem" }}
          px={{ lg: "unset", base: "1rem" }}
          gridTemplateColumns={{ lg: "60% 40%" }}
          my={"2rem"}
          gap={{ base: "1.5rem", lg: "unset" }}
        >
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            justifyContent={"center"}
            p={{ lg: "1rem" }}
            order={{ lg: 1, base: 2 }}
          >
            <Text
              fontFamily={"jetBrainsMono"}
              fontSize={{ lg: "2.5rem", md: "2rem", base: "1.75rem" }}
              fontWeight={"300"}
            >
              Members
            </Text>
            <Text
              fontSize={{ lg: "1rem", base: "0.825rem" }}
              fontFamily={"inter"}
              fontWeight={"300"}
              lineHeight={"168.523%"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum, leo laoreet feugiat vehicula, magna lacus blandit felis,
              non tincidunt diam mi accumsan orci. Nunc hendrerit blandit erat,
              id consectetur tellus bibendum ac. Praesent quis dictum risus.
              Nunc velit arcu, gravida vel pulvinar sit amet, malesuada in
              libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas rutrum, leo laoreet feugiat vehicula, magna lacus blandit
              felis, non tincidunt diam mi accumsan orci. Nunc hendrerit blandit
              erat, id consectetur tellus bibendum ac. Praesent quis dictum
              risus.
            </Text>
            <Button
              bg="#1A73E8"
              color="#FFFFFF"
              fontWeight={"600"}
              fontFamily={"inter"}
              fontSize={{ lg: "0.9375rem", base: "0.75rem" }}
              borderRadius={"0.375rem"}
              transition={"all 0.2s ease-in-out"}
              _hover={{ filter: "brightness(105%)" }}
              borderWidth={"1px"}
              borderColor={"#1A73E8"}
              w={"fit-content"}
            >
              View 2022 project list
            </Button>
          </GridItem>{" "}
          <GridItem
            order={{ lg: 2, base: 1 }}
            display={"flex"}
            alignItems={"center"}
            p={"1rem"}
          >
            <Box
              w={{ md: "9.125rem", base: "6rem" }}
              h={{ md: "12.25rem", base: "10rem" }}
              bg={
                "linear-gradient(214deg, #FF6B00 19.48%, #FF8616 51.39%, #FF8C04 85.65%)"
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
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={"/assets/images/screen-share.svg"} alt="ShareIcon" />
            </Box>
          </GridItem>
        </Grid>
        <Grid
          w={{ base: "full" }}
          maxW={{ lg: "1199px" }}
          mx="auto"
          py={{ base: "5rem" }}
          px={{ lg: "unset", base: "1rem" }}
          gridTemplateColumns={{ lg: "60% 40%" }}
          my={"2rem"}
          gap={{ base: "1.5rem", lg: "unset" }}
        >
          <GridItem order={1} display={"flex"} alignItems={"center"} p={"1rem"}>
            <Box
              w={{ md: "9.125rem", base: "6rem" }}
              h={{ md: "12.25rem", base: "10rem" }}
              bg={
                "linear-gradient(214deg, #0E8E32 19.48%, #12AF34 51.39%, #09FB30 85.65%)"
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
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={"/assets/images/organization.svg"} alt="ShareIcon" />
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            justifyContent={"center"}
            p={"1rem"}
            order={2}
          >
            <Text
              fontFamily={"jetBrainsMono"}
              fontSize={{ lg: "2.5rem", md: "2rem", base: "1.75rem" }}
              fontWeight={"300"}
            >
              Organizations
            </Text>
            <Text
              fontSize={{ lg: "1rem", base: "0.825rem" }}
              fontFamily={"inter"}
              fontWeight={"300"}
              lineHeight={"168.523%"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum, leo laoreet feugiat vehicula, magna lacus blandit felis,
              non tincidunt diam mi accumsan orci. Nunc hendrerit blandit erat,
              id consectetur tellus bibendum ac. Praesent quis dictum risus.
              Nunc velit arcu, gravida vel pulvinar sit amet, malesuada in
              libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas rutrum, leo laoreet feugiat vehicula, magna lacus blandit
              felis, non tincidunt diam mi accumsan orci. Nunc hendrerit blandit
              erat, id consectetur tellus bibendum ac. Praesent quis dictum
              risus.
            </Text>
            <Button
              bg="#1A73E8"
              color="#FFFFFF"
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={{ lg: "0.9375rem", base: "0.75rem" }}
              borderRadius={"0.375rem"}
              transition={"all 0.2s ease-in-out"}
              _hover={{ filter: "brightness(105%)" }}
              borderWidth={"1px"}
              borderColor={"#1A73E8"}
              w={"fit-content"}
            >
              Browse all organizations
            </Button>
          </GridItem>{" "}
        </Grid>
        <Grid
          w={{ base: "full" }}
          maxW={{ lg: "1199px" }}
          mx="auto"
          py={{ base: "5rem" }}
          px={{ lg: "unset", base: "1rem" }}
          gridTemplateColumns={{ lg: "60% 40%" }}
          my={"2rem"}
          gap={{ base: "1.5rem", lg: "unset" }}
        >
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            justifyContent={"center"}
            p={"1rem"}
            order={{ lg: 1, base: 2 }}
          >
            <Text
              fontFamily={"jetBrainsMono"}
              fontSize={{ lg: "2.5rem", md: "2rem", base: "1.75rem" }}
              fontWeight={"300"}
            >
              Mentors
            </Text>
            <Text
              fontSize={{ lg: "1rem", base: "0.825rem" }}
              fontFamily={"inter"}
              fontWeight={"300"}
              lineHeight={"168.523%"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum, leo laoreet feugiat vehicula, magna lacus blandit felis,
              non tincidunt diam mi accumsan orci. Nunc hendrerit blandit erat,
              id consectetur tellus bibendum ac. Praesent quis dictum risus.
              Nunc velit arcu, gravida vel pulvinar sit amet, malesuada in
              libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas rutrum, leo laoreet feugiat vehicula, magna lacus blandit
              felis, non tincidunt diam mi accumsan orci. Nunc hendrerit blandit
              erat, id consectetur tellus bibendum ac. Praesent quis dictum
              risus.
            </Text>
          </GridItem>{" "}
          <GridItem
            order={{ lg: 2, base: 1 }}
            display={"flex"}
            alignItems={"center"}
            p={"1rem"}
          >
            <Box
              w={{ md: "9.125rem", base: "6rem" }}
              h={{ md: "12.25rem", base: "10rem" }}
              bg={
                "linear-gradient(214deg, #1A73E8 19.48%, #185ABC 51.39%, rgba(22, 82, 161, 0.95) 85.64%)"
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
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={"/assets/images/groupsBlue.svg"} alt="ShareIcon" />
            </Box>
          </GridItem>
        </Grid>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"1.5rem"}
          bg={"#F5F5F5"}
        >
          <Text
            textAlign={"center"}
            fontSize={{ lg: "2.5rem", md: "2rem", base: "1.5rem" }}
            fontWeight={"400"}
            mt={"3rem"}
          >
            Full Program Timeline
          </Text>
        </Flex>
        <Footer />
      </Box>
    </Flex>
  );
};

export default HowItWorks;
