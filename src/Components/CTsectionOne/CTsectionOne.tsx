import {Flex, Text, VStack} from "@chakra-ui/react";
import {Divider} from "@chakra-ui/icons";

function CTsectionOne() {
    const cityDesc: string = "Nestled in the heart of Roscommon, our cozy coffee shop is more than just a place to " +
        "grab a latte. We're your local gathering spot, a haven for connection and community."
    const sectionWrapSx = {
        // backgroundColor: "grey",
        height: {base: "55rem", md: "50rem"},
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: {base: "auto", md: "0 0 5em 0"},
    }
    const headerWrapSx = {
        backgroundColor: "white",
        flexDirection: "column",
        height: {base: "50%", md: "50%"},
        width: {base: "100%", md: "1320px"},
        margin: {base: "1rem 0 0 0", md: "3rem 0 0 0"},
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
    }
    const outerBoardSx = {
        backgroundColor: "#0C6E5A",
        width: {base: "70%", md: "40%"},
        height: {base: "80%", md: "100%"},
        margin: {base: "auto", md: "auto"},
    }
    const innerBoardSx = {
        // backgroundColor: "red",
        color: "white",
        height: {base: "85%", md: "85%"},
        width: {base: "95%", md: "95%"},
        fontSize: {base: "2rem", md: "3.5rem"},
        fontWeight: "bold",
        fontFamily: "Inter",
        borderWidth: "3px",
        borderRadius: "12px",
        margin: {base: "auto", md: "auto"},
    }
    const rowTwoTextSx = {
        // backgroundColor: "red",
        margin: "auto",
        fontSize: {base: "2rem", md: "3.5rem"},
        fontFamily: "Inter",
    }
    const rowThreeTextSx = {
        // backgroundColor: "red",
        color: "#424242",
        margin: {base: "0 0 1rem 0", md: "auto"},
        fontSize: {base: "1rem", md: "1.5rem"},
        fontFamily: "Inter",
        justifyContent: "center"
    }
    const dividerSx = {
        borderColor: "#0C6E5A",
        borderWidth: "0.3em",
        margin: "auto",
        // height: {base: "1em", md: "0.5em"},
        width: {base: "25%", md: "25%"},
    }
    const infosWrapSx = {
        backgroundColor: "white",
        height: {base: "50%", md: "50%"},
        width: {base: "100%", md: "1320px"},
        // margin: {base: "auto", md: "0"},
        justifyContent: "center",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
    }
    const leftContentSx = {
        // backgroundColor: "grey",
        flexDirection: "column",
        width: {base: "100%", md: "50%"},
        alignItems: "center",
        justifyContent: "center"
    }
    const titleWrapSx = {
        flexDirection: "column",
        fontFamily: "Inknut Antiqua",
        fontSize: {base: "1rem", md: "2rem"},
        fontWeight: "bold",
    }
    const rightContentSx = {
        // backgroundColor: "silver",
        flexDirection: "column",
        width: {base: "100%", md: "50%"},
        alignItems: "center",
        justifyContent: "center"
    }
    const contentWrapSx = {
        // backgroundColor: "orange",
        height: {base: "50%", md: "100%"},
        width: {base: "50%", md: "100%"},
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
    const dividerInfoSx = {
        borderColor: "#0C6E5A",
        borderWidth: "2.5px",
        margin: "auto",
        // height: {base: "1em", md: "0.5em"},
        width: {base: "25%", md: "80%"},
    }
    const textSx = {
        textAlign: "center",
        justifyContent: "center"
    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="header-wrap" sx={headerWrapSx}>
                    <Flex className="row-one" height="40%">
                        <Flex className="city-name" sx={outerBoardSx}>
                            <Flex className="plate" alignItems="center" sx={innerBoardSx}>
                                <Text margin="auto">ROSCOMMON</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="row-two" height="40%" flexDirection="column">
                        <Text sx={rowTwoTextSx}>
                            Our Neighborhood Nook
                        </Text>
                        <Flex backgroundColor="#0C6E5A" width="25%" margin="auto">
                            <Divider sx={dividerSx}/>
                        </Flex>
                    </Flex>
                    <Flex className="row-three" height="25%" sx={rowThreeTextSx}>
                        <Text textAlign="center" width={{base: "90%", md: "100%"}}>{cityDesc}</Text>
                    </Flex>
                </Flex>

                {/*DIVISION*/}

                <Flex className="infos-wrap" sx={infosWrapSx}>
                    <Flex className="left-content" sx={leftContentSx}>
                        <Flex className="content-wrap" sx={contentWrapSx}>
                            <Flex className="left-up-content" sx={titleWrapSx}>
                                <Text width="100%" textAlign="center" justifyContent="center">Find Us Here</Text>
                                <Flex backgroundColor="#0C6E5A" width="80%" margin="auto">
                                    <Divider sx={dividerInfoSx}/>
                                </Flex>
                            </Flex>
                            <Flex className="left-down-content" justifyContent="center" flexDirection="column">
                                <br/>
                                <VStack fontFamily="Inter" fontSize="1.1rem">
                                    <Text sx={textSx}>Unit 6 Office 1 Brogans Lane</Text>
                                    <Text sx={textSx}>F42 HK13</Text>
                                    <Text sx={textSx}>Roscommon</Text>
                                    <Text sx={textSx}>Republic Of Ireland</Text>
                                    <Text sx={textSx} color="#0C6E5A">+353 87 6928001</Text>
                                </VStack>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="right-content" sx={rightContentSx}>
                        <Flex className="content-wrap" sx={contentWrapSx}>
                            <Flex className="right-up-content" sx={titleWrapSx}>
                                <Text sx={textSx}>Opening Hours</Text>
                                <Flex backgroundColor="#0C6E5A" width="80%" margin="auto">
                                    <Divider sx={dividerInfoSx}/>
                                </Flex>
                            </Flex>
                            <Flex className="right-down-content" flexDirection="column">
                                <br/>
                                <VStack fontFamily="Inter" fontWeight="bold">
                                    <Flex flexDirection="column" alignItems="center">
                                        <Text sx={textSx}>Tuesday to Friday</Text>
                                        <Text sx={textSx} fontStyle="italic" fontWeight="normal">From 8:45am to 5:00pm</Text>
                                    </Flex>
                                    <Flex flexDirection="column" alignItems="center">
                                        <Text sx={textSx}>Saturday</Text>
                                        <Text sx={textSx} fontStyle="italic" fontWeight="normal">From 10:00am to 5:00pm</Text>
                                    </Flex>
                                    <Flex flexDirection="column" alignItems="center">
                                        <Text sx={textSx}>Sunday</Text>
                                        <Text sx={textSx} fontStyle="italic" fontWeight="normal">CLOSED</Text>
                                    </Flex>
                                </VStack>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default CTsectionOne;