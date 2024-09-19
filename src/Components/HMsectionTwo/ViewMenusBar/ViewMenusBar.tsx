import {Flex, HStack, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

function ViewMenusBar() {
    const sectionWrapSx = {
        backgroundColor: "",
        mt: "1em",
        justifyContent: "center",
    }
    const outerBarSx = {
        backgroundColor: "white",
        width: "70%",
        height: "70%",
        m: "auto",
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.2)",
    }
    const contentWrapSx = {
        w: "60%",
        h: "100%",
        backgroundColor: "",
        m: "auto"
    }
    const menuItemsSx = {
        width: "60%",
        justifyContent: "space-around",
        fontFamily: "Inknut Antiqua",
        fontSize: "1.8em",
    }
    return (
    <Flex className="bottom-bar-wrap" as="section" w="100%" h="5em" sx={sectionWrapSx}>
        <Flex className="bottom-content-wrap" sx={outerBarSx}>
            <Flex className="content-wrap" sx={contentWrapSx}>
                <Flex className="title-wrap" color="#0C6E5A" w="40%"
                    backgroundColor=""
                >
                    <Text fontFamily="Inknut Antiqua" fontSize={{base: "1.2em", md: "2.3em"}}
                          backgroundColor="" fontWeight="300"
                    >View Menus:</Text>
                </Flex>
                <HStack className="menu-items" sx={menuItemsSx} backgroundColor="">
                    <NavLink to="/">FOOD</NavLink>
                    <NavLink to="/">BEVERAGES</NavLink>
                    <NavLink to="/">ACAI</NavLink>
                </HStack>
            </Flex>
        </Flex>
    </Flex>
    );
}

export default ViewMenusBar;