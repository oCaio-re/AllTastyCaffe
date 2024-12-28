import {Flex, HStack, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import "./ViewMenuBar.css"

function ViewMenusBar() {
    const sectionWrapSx = {
        backgroundColor: "",
        mt: "1em",
        justifyContent: "center",
    }
    const outerBarSx = {
        backgroundColor: "white",
        width: {base: "100%", md: "1320px"},
        height: "70%",
        m: "auto",
        borderTop: "1px solid silver",
        borderBottom: "1px solid silver",
    }
    const contentWrapSx = {
        w: {base: "95%", md: "60%"},
        h: "100%",
        backgroundColor: "",
        m: "auto"
    }
    const menuItemsSx = {
        width: "60%",
        justifyContent: "space-around",
        fontFamily: "Inknut Antiqua",
        fontSize: {base: "1.0em", md: "1.8em"},
        backgroundColor: "",
    }
    return (
    <Flex className="bottom-bar-wrap" as="section" w="100%" h="5em" sx={sectionWrapSx}>
        <Flex className="bottom-content-wrap" sx={outerBarSx}>
            <Flex className="content-wrap" sx={contentWrapSx}>
                <Flex className="title-wrap" color="#0C6E5A" w="40%"
                    backgroundColor="" m={{base: "auto"}}
                >
                    <Text fontFamily="Inknut Antiqua" fontSize={{base: "1.3em", md: "2.3em"}}
                          backgroundColor="" fontWeight="300" whiteSpace="nowrap"
                    >
                        View Menus:
                    </Text>
                </Flex>
                <HStack className="menu-items" sx={menuItemsSx} backgroundColor="">
                    <NavLink className="item" to="/food">FOOD</NavLink>
                    <NavLink className="item" to="/hot-beverages">BEVERAGES</NavLink>
                    <NavLink className="item" to="/berry-acai">ACAI</NavLink>
                </HStack>
            </Flex>
        </Flex>
    </Flex>
    );
}

export default ViewMenusBar;