import {Box, Flex, Text} from "@chakra-ui/react";
import atLogoImg from "../../../public/AT_logo.svg"
import balconyImg from "../../../public/place_images/balcao-vertical-atendente.png"

function AUsectionOne() {
    const desc: string = "This is a text filling description sajfndjfnwahjregn rjawern jwrenfg fjokwenfjenm" +
        "dsfadsgfawdfgwdfg asddfa sdfg asdgf asdg fg rweafg werg raghaewgh aerg arwg art htjnuytk io " +
        "dsfadsgfawdfgwdfg asddfa sdfg asdgf asdg fg rweafg werg raghaewgh aerg arwg art htjnuytk io " +
        "dsfadsgfawdfgwdfg asddfa sdfg asdgf asdg fg rweafg werg raghaewgh aerg arwg art htjnuytk io. "
    const sectionSx = {
        h: "360px",
        w: "100%",
        backgroundColor: "",
        justifyContent: "center",
        mt: "3em"
    }
    const contentSx = {
        backgroundColor: "",
        h: "100%",
        w: "70%",
        justifyContent: "space-between",
    }
    const imgWrapSx = {
        w: "25%",
        h: "100%",
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
        h: "100%",
        w: "45%",
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
                                <Text m="auto">We are Open!</Text>
                            </Flex>
                            <Flex className="desc-wrap" mt="1em">
                                <Text fontFamily="Inter">{desc}</Text>
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