import {Box, Flex, Text} from "@chakra-ui/react";
import ViewMenusBar from "./ViewMenusBar/ViewMenusBar.tsx";
import icedTeaImg from "../../../public/iced_tea.png"
import smoothieImg from "../../../public/smootie_strawberry.png"
import lemonadeImg from "../../../public/lemonade.png"

function HMsectionTwo() {
    const sectionWrapSx = {
        height: "90vh",
        backgroundColor: "",
        mt: "15em",
        mb: "10em",
        flexDirection: "column",
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
        m: "auto",
        "filter": "drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))"
    }
    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="content-wrap" flexDirection="column" sx={contentWrapSx}>
                <Flex className="titleS-wrap" sx={titleSWrapSx}>
                    <Flex className="title-wrap" backgroundColor="" h="50%" w="100%"
                        filter="drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))"
                    >
                        <Text m="auto" fontFamily="Inknut Antiqua" fontSize="3em">A ROSCOMMON ORIGINAL</Text>
                    </Flex>
                    <Flex className="undertitle-wrap" h="50%" w="100%" backgroundColor=""
                          filter="drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))"
                    >
                        <Text m="auto" fontFamily="Ingrid Darling" fontSize="3.5em" color="#0C6E5A">A few of our
                            favorites...</Text>
                    </Flex>
                </Flex>

                <Flex className="images-wrap" h="75%" backgroundColor="">
                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <Box as="img" sx={imgWrapSx} src={icedTeaImg}/>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize="1.3em" fontWeight="bold">LIPTON ICED TEA</Text>
                        </Box>
                    </Flex>

                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <Box as="img" sx={imgWrapSx} src={smoothieImg}/>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize="1.3em" fontWeight="bold">STRAWBERRY SMOOTHIE</Text>
                        </Box>
                    </Flex>

                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <Box as="img" sx={imgWrapSx} src={lemonadeImg}/>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize="1.3em" fontWeight="bold">FRESH LEMONADE</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <ViewMenusBar/>
        </Flex>
    );
}

export default HMsectionTwo;