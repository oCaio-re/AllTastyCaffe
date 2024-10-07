import {Flex, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import "./TopBar.css"

function TopBar() {
    const topBarSx = {
        maxW: "100vw",
        w: "100vw",
        h: {base: "20px", md: "37px"},
        backgroundColor: "#0C6E5A",
        justifyContent: "center",
        position: {md: "fixed"},
        zIndex: "200"
        // mb: "10em"
        // width: "100%",
    }
    return (
        <Flex className="top-bar" sx={topBarSx}>
            <Flex className="text-wrap" h="37px" alignItems="center">
                <Text className="top-bar-content" color="white" fontFamily="Inter" textAlign="center"
                      fontSize={{base: "0.7em", md: "1em"}}>
                    <NavLink to={"/loyalty-program"} className="content-sentence">
                        CHECKOUT OUR TREAT REWARDS: BE REWARDED FOR YOUR DAILY <i><b className="all-tasty">ALL TASTY</b></i>
                    </NavLink>
                </Text>
            </Flex>
        </Flex>
    );
}

export default TopBar;