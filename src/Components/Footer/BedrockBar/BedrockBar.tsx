import {Box, Flex, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";


function BedrockBar() {
    const outerWrapSx = {
        backgroundColor: "black",
        flexDirection: "column",
        height: {base: "", md: "70px"},
        zIndex: "10",
    }
    const contentWrapSx = {
        // backgroundColor: "grey",
        fontFamily: "Inter",
        fontSize: {base: "1.2em", md:"1.4em"},
        fontWeight: "300",
        width: {base: "100%", md: "68%"},
        m: {base: "auto", md: "auto"},
        justifyContent: "space-around",
        alignItems: "center",
        padding: {base: "10px", md:"0px"}
    }
    const leftContentWrapSx = {
        width: {base: "50%", md: "80%"},
        justifyContent: {base: "justify", md: "auto"},
    }
    const rightContentWrapSx = {
        // width: {base: "60%", md: "100%"},
        height: {base: "50%", md: "100%"},
        // backgroundColor: "grey",
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
                    <Box className="right-conten-wrap" sx={rightContentWrapSx}>
                        <NavLink to={"/contact"}>
                            <Text color="white">Contact Us</Text>
                        </NavLink>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}

export default BedrockBar;