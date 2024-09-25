import {Box, Flex, Text} from "@chakra-ui/react";
import backgroundSvg from "../../../public/hm_secThree_bg.svg";
import balconyImg from "../../../public/place_images/balcao.png"
function AUsectionTwo() {
    const desc: string = "This is a text filling description sajfndjfnwahjregn rjawern jwrenfg fjokwenfjenm" +
        "dsfadsgfawdfgwdfg asddfa sdfg asdgf asdg fg rweafg werg raghaewgh aerg arwg art htjnuytk io " +
        "dsfadsgfawdfgwdfg asddfa sdfg asdgf asdg fg rweafg werg raghaewgh aerg arwg art htjnuytk io " +
        "dsfadsgfawdfgwdfg asddfa sdfg asdgf asdg fg rweafg werg raghaewgh aerg arwg art htjnuytk io. "
    const sectionWrapSx = {
        width: "100vw",
        height: "889px",
        mb: "-25em",
        mt: "5em",
        backgroundColor: "",
    }
    const contentWrapSx = {
        width: "70%",
        height: "50%",
        backgroundColor: "",
        zIndex: "20",
        m: "0 auto 0 auto"
    }
    const outerTextWrapSx = {
        h: "100%",
        w: "56%",
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
        fontWeight: "light",
        textAlign: "center",
        color: "#0C6E5A"
    }
    const imgWrapSx = {
        w: "41%",
        backgroundColor: "white",
        ml: "auto",
        borderRadius: "20px",
        boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
    }
    const imgSx = {
        // boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
        borderRadius: "20px"
    }
    return (
        <>
            <Flex className="section-wrap" position="relative" sx={sectionWrapSx}>
                <Flex className="background-wrap" position="absolute" backgroundColor="">
                    <Box as="img" src={backgroundSvg}/>
                </Flex>
                <Flex className="content-wrap" sx={contentWrapSx}>
                    <Flex className="outer-text-wrap" sx={outerTextWrapSx}>
                        <Flex className="text-wrap" sx={textWrapSx}>
                            <Flex className="title-wrap" sx={titleWrapSx}>
                                <Text m="auto">This is a special place!</Text>
                            </Flex>
                            <Flex className="desc-wrap" mt="1em">
                                <Text fontFamily="Inter">{desc}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="img-wrap" sx={imgWrapSx}>
                        <Box as="img" sx={imgSx} src={balconyImg} objectFit="cover"/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default AUsectionTwo;