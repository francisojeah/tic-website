import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateMenu } from "@/store/slices/menuSlice";
import Link from "next/link";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import React from "react";
import {  usePathname } from "next/navigation";

function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const pathname = usePathname();

  const dispatch = useDispatch<Dispatch<any>>();
  const activeSideMenu = useSelector<RootState>((state) => state.menu);

  const { menu }: any = activeSideMenu;

  const handleSideMenuClick = (sidemenu: number) => {
    dispatch(updateMenu(sidemenu));
  };

  const menus: any = [
    {
      title: "Home",
      link: "",
      isActive: true,
    },
    {
      title: "About",
      link: "about",
      isActive: false,
    },
    {
      title: "How it works",
      link: "how-it-works",
      isActive: false,
    },
    {
      title: "Get started",
      link: "get-started",
      isActive: false,
    },
    {
      title: "Past programs",
      link: "past-programs",
      isActive: false,
    },
  ];

  const subMenus: any = [
    {
      title: "Help",
      link: "help",
      isActive: false,
    },
    {
      title: "Rules",
      link: "rules",
      isActive: false,
    },
    {
      title: "Terms",
      link: "terms",
      isActive: false,
    },
  ];

  useEffect(() => {
    const tempPathName = pathname.split("/");
    const pathName =
      tempPathName[tempPathName.length - 1] !== ""
        ? tempPathName.filter((element: any) => element !== "")
        : tempPathName;
    const pathTitle = pathName[0];
    const sideMenuTitle = menus.find(
      (sidemenu: any) => sidemenu.link === pathTitle
    )?.title;

    if (sideMenuTitle && sideMenuTitle !== activeSideMenu) {
      handleSideMenuClick(
        menus.findIndex((sidemenu: any) => sidemenu.title === sideMenuTitle)
      );
    }
  }, [pathname, menus, handleSideMenuClick, activeSideMenu, dispatch]);
  return (
    <Box h="full">
      <Flex py={"1rem"} h="full" gap={"50vh"} flexDirection={"column"}>
        <Flex alignItems={"center"} justifyContent={"center"} display={"flex"}>
          <Button
            as={IconButton}
            aria-label="Options"
            icon={
              isOpen ? (
                <SmallCloseIcon
                  color={"#979494"}
                  boxSize={{ md: "1.6rem", base: "1.4rem" }}
                />
              ) : (
                <HamburgerIcon
                  color={"#979494"}
                  boxSize={{ md: "1.6rem", base: "1.4rem" }}
                />
              )
            }
            variant="ghost"
            bg={"unset"}
            flexDirection={"column"}
            ref={btnRef}
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent ml={{ lg: "6rem", md: "4rem" }}>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <Flex
                  flexDirection={"column"}
                  gap={{ lg: "1rem", md: "0.8rem", base: "0.5rem" }}
                  fontSize={{ lg: "1.3rem", md: "1.15rem", base: "1rem" }}
                  fontFamily={"jetBrainsMono"}
                  fontWeight={"400"}
                  mb={"2rem"}
                >
                  {menus.map(({ title, link }: any, index: number) => (
                    <Link key={index} href={`/${link}`} style={{ textDecoration: "unset" }}>
                      <Box
                        px={"0.5rem"}
                        borderLeft={
                          menu == index ? "2px solid #3784EBDE" : "unset"
                        }
                        color={menu == index ? "#3784EBDE" : "unset"}
                        _hover={{
                          color: "#3784EBDE",
                        }}
                      >
                        <Text>{title}</Text>
                      </Box>
                    </Link>
                  ))}
                </Flex>
                <Flex
                  flexDirection={"column"}
                  gap={"0.5rem"}
                  fontSize={{ lg: "1rem", base: "0.85rem" }}
                  fontWeight={"300"}
                  fontFamily={"inter"}
                >
                  {subMenus.map(({ title, link }: any, index: number) => (
                    <Link key={index} href={`/${link}`} style={{ textDecoration: "unset" }}>
                      <Text>{title}</Text>
                    </Link>
                  ))}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
        <Link href={"/"}>
          <Flex flexDirection={"column"} gap={"2.5rem"}>
            <Box transform={"rotate(-90deg)"} whiteSpace={"nowrap"}>
              <Text
                fontFamily={"iceberg"}
                fontSize={{ lg: "1.5rem", base: "1.25rem" }}
                fontWeight={"400"}
              >
                TECH INNOVATION CLUB
              </Text>
            </Box>{" "}
            <Image src={"/assets/images/ticLogo.svg"} alt="ticLogo" />
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}

export default SideMenu;
