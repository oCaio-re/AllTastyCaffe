import {Flex, Text} from "@chakra-ui/react";
import "./TopBar.css"

function TopBar() {
    const topBarSx = {
        backgroundColor: "#0C6E5A",
        maxW: "100vw",
        width: "100vw",
        height: {base: "2rem", md: "37px"},
        justifyContent: "center",
        position: {md: "fixed"},
        zIndex: "200"
        // mb: "10em"
        // width: "100%",
    }
    const contentWrapSx = {
        // backgroundColor: "red",
        // height: {base: "auto", md: "37px"},
        padding: {base: "15px", md: "0"},
        alignItems: "center",
    }
    return (
        <Flex className="top-bar" sx={topBarSx}>
            <Flex className="text-wrap" sx={contentWrapSx}>
                <Text className="top-bar-content" color="white" fontFamily="Inter" textAlign="center"
                      fontSize={{base: "0.6rem", md: "1em"}}>
                    <a href="https://squidloyalty.ie/for-customers/" className="content-sentence" target="blank">
                        CHECKOUT OUR TREAT REWARDS: BE REWARDED FOR YOUR DAILY <i><b className="all-tasty">ALL TASTY</b></i>
                    </a>
                </Text>
            </Flex>
        </Flex>
    );
}

export default TopBar;