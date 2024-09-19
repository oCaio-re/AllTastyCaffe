import {Box, Flex, Text} from "@chakra-ui/react";


function BedrockBar() {
    const outerWrapSx = {
        backgroundColor: "black",
        flexDirection: "column",
        height: {base: "", md: "70px"},
        zIndex: "10",
    }
    const contentWrapSx = {
        // fontFamily: "Istok Web",
        fontFamily: "Inter",
        fontSize: "1.4em",
        fontWeight: "300",
        // backgroundColor: "grey",
        width: "68%",
        m: "auto",
    }
    return (
        <>
            <Flex className="bed-rock-barr-wrap" sx={outerWrapSx}>
                <Flex className="conten-wrap" sx={contentWrapSx}>
                    <Box className="left-conten-wrap"
                         // backgroundColor="grey"
                    >
                        <Text color="white">Copyright ©2024 Roscommon, Ireland. All rights reserved.</Text>
                    </Box>
                    <Box className="right-conten-wrap" ml="auto">
                        <Text color="white">Contact Us</Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}

export default BedrockBar;