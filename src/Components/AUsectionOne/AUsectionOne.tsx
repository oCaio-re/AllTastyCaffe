import {Box, Flex, Text} from "@chakra-ui/react";
import atLogoImg from "../../../public/AT_logo.png"
import balconyImg from "../../../public/place_images/balcao-vertical-atendente.png"

function AUsectionOne() {
    const desc: string = "All Tasty Caffe has arrived! We're a neighborhood coffee shop dedicated to crafting delicious brews and fostering a warm, welcoming community. Join us for your daily dose of caffeine and connection."
    const sectionSx = {
        h: {base: "110em", md: "360px"},
        w: "100%",
        backgroundColor: "",
        justifyContent: "center",
        mt: {base: "0em", md: "3em"}
    }
    const contentSx = {
        flexDirection: {base: "column", md: "row"},
        backgroundColor: "",
        h: "100%",
        w: {base: "95%", md: "70%"},
        justifyContent: "space-between",
    }
    const imgWrapSx = {
        w: {base: "100%", md: "25%"},
        h: {base: "30%", md: "100%"},
        backgroundColor: "white",
        boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
        borderRadius: "20px",
    }
    const imgSx = {
        h: "100%",
        w: "100%",
        borderRadius: "20px",
    }
    const outerTextWrapSx = {
        h: {base: "35%", md: "100%"},
        w: {base: "100%", md: "45%"},
        borderRadius: "25px",
        backgroundColor: "white",
        boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
    }
    const textWrapSx = {
        backgroundColor: "",
        h: "80%",
        w: "80%",
        m: "auto",
        flexDirection: "column"
    }
    const titleWrapSx = {
        h: "30%",
        w: "100%",
        backgroundColor: "",
        fontFamily: "Italianno",
        fontSize: "4.2em",
        fontWeight: "500",
        textAlign: "center",
        color: "#0C6E5A"
    }
    return (
        <>
            <Flex as="section" className="section-wrap" sx={sectionSx}>
                <Flex className="content-wrap" sx={contentSx}>
                    <Flex className="img1-wrap" sx={imgWrapSx}>
                        <Box as="img" sx={imgSx} src={balconyImg} objectFit="cover"/>
                    </Flex>
                    <Flex className="outer-text-wrap" sx={outerTextWrapSx}>
                        <Flex className="text-wrap" sx={textWrapSx}>
                            <Flex className="title-wrap" sx={titleWrapSx}>
                                <Text m="auto">
                                    We are Open!
                                </Text>
                            </Flex>
                            <Flex className="desc-wrap" mt="1em">
                                <Text fontFamily="Inter" fontSize="1.3em"
                                      textAlign={{base: "justify", md: "justify"}}
                                >
                                    {desc}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="img2-wrap" sx={imgWrapSx}>
                        <Box as="img" sx={imgSx} src={atLogoImg}/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default AUsectionOne;