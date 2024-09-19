import {Flex, Text} from "@chakra-ui/react";

function TopBar() {
    const topBarSx = {
        maxW: "100vw",
        w: "100vw",
        h: {base: "37px", md: "37px"},
        backgroundColor: "#0C6E5A",
        justifyContent: "center",
        position: "fixed",
        zIndex: "200"
        // mb: "10em"
        // width: "100%",
    }
    return (
        <Flex className="top-bar" sx={topBarSx}>
            <Flex className="text-wrap" h="37px" alignItems="center">
                <Text className="top-bar-content" color="white" fontFamily="Inter" textAlign="center">
                    CHECKOUT OUR TREAT REWARDS: BE REWARDED FOR YOUR DAILY <i><b>ALL TASTY</b></i>
                </Text>
            </Flex>
        </Flex>
    );
}

export default TopBar;