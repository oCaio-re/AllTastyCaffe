import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import "./BedRockBar.css"


function BedrockBar() {
    const outerWrapSx = {
        backgroundColor: "black",
        flexDirection: "column",
        height: {base: "", md: "70px"},
        zIndex: "10",
    }
    const contentWrapSx = {
        // backgroundColor: "red",
        flexDirection: {base: "column", md: "row"},
        fontFamily: "Inter",
        fontSize: {base: "1em", md: "1.4em"},
        fontWeight: "300",
        width: {base: "100%", md: "68%"},
        margin: {base: "auto", md: "auto"},
        justifyContent: "space-around",
        alignItems: "center",
        padding: {base: "10px", md: "0px"}
    }
    const leftContentWrapSx = {
        // backgroundColor: "red",
        width: {base: "100%", md: "50%"},
        justifyContent: {base: "justify", md: "auto"},
    }
    const centerContentWrapSx = {
        // backgroundColor: "grey",
        flexDirection: "row",
        width: {base: "100%", md: "20%"},
        height: {base: "50%", md: "100%"},
    }
    return (
        <>
            <Flex className="bed-rock-barr-wrap" sx={outerWrapSx}>
                <Flex className="conten-wrap" sx={contentWrapSx}>
                    <Box className="left-conten-wrap"
                         sx={leftContentWrapSx}
                    >
                        <Text color="white">©️ 2023 Light for The People Ministries | All rights reserved</Text>
                    </Box>
                    <Box className="right-conten-wrap" sx={centerContentWrapSx}>
                        <NavLink to={"/contact"}>
                            <Text color="white" textAlign="center">Contact Us</Text>
                        </NavLink>
                    </Box>
                    <Link href="https://caioliveiradev-tp3fi.ondigitalocean.app" target="_blank"
                            width={{base: "100%", md: "30%"}}
                    >
                        <Text color="grey" className="initial-text" textAlign={{base: "center", md: "center"}}>
                            Designed and made by:
                            <i className="maker-name"> Caio Oliveira</i>
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}

export default BedrockBar;