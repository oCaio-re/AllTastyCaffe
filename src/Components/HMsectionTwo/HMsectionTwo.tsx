import {Box, Flex, Text} from "@chakra-ui/react";
// import {NavLink} from "react-router-dom";

function HMsectionTwo() {
    const sectionWrapSx = {
        height: "90vh",
        backgroundColor: "yellow",
        mt: "15em",
        mb: "10em",
    }
    const contentWrapSx = {
        backgroundColor: "",
        h: "80%",
        w: "60%",
        ml: "auto",
        mr: "auto",
    }
    const titleSWrapSx = {
        h: "25%",
        backgroundColor: "",
        flexDirection: "column",
    }
    const beverageContentSx = {
        w: "33.3333%",
    }
    const imgWrapSx = {
        h: "90%",
        backgroundColor: "",
    }
    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="content-wrap" flexDirection="column" sx={contentWrapSx}>
                <Flex className="titleS-wrap" sx={titleSWrapSx}>
                    <Flex className="title-wrap" backgroundColor="" h="60%" w="100%">
                        <Text m="auto" fontFamily="Inknut Antiqua" fontSize="3.5em">A ROSCOMMON ORIGINAL</Text>
                    </Flex>
                    <Flex className="undertitle-wrap" h="40%" w="100%" backgroundColor="">
                        <Text m="auto" fontFamily="Ingrid Darling" fontSize="3em" color="#0C6E5A">A few of our
                            favorites...</Text>
                    </Flex>
                </Flex>

                <Flex className="images-wrap" h="75%" backgroundColor="">
                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <Box as="img" sx={imgWrapSx}/>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize="1.3em" fontWeight="bold">LIPTON ICED TEA</Text>
                        </Box>
                    </Flex>

                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <Box as="img" sx={imgWrapSx}/>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize="1.3em" fontWeight="bold">STRAWBERRY SMOOTHIE</Text>
                        </Box>
                    </Flex>

                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <Box as="img" sx={imgWrapSx}/>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize="1.3em" fontWeight="bold">FRESH LEMONADE</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex className="bottom-bar-wrap">
                    <Flex className="bottom-content-wrap">
                        <Flex>
                            <Text>View Menus</Text>
                        </Flex>
                        <Flex>
                            {/*<NavLink to={}>FOOD</NavLink>*/}
                            {/*<NavLink to={}>FOOD</NavLink>*/}
                            {/*<NavLink to={}>FOOD</NavLink>*/}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default HMsectionTwo;