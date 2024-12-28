import {Box, Flex, Show, Text} from "@chakra-ui/react";
import backgroundSvg from "../../../public/hm_secThree_bg.svg";
import balconyImg from "../../../public/place_images/balcao.png"

function AUsectionTwo() {
    const desc: string = "We are more than just a coffee shop; we are a community hub. Nestled alongside a vibrant drop-in center offering a wide range of essential services, we provide a warm and inclusive space for everyone to connect, relax, and enjoy a delicious cup of coffee. Join us and become part of a thriving community where support and good coffee are always on tap."
    const sectionWrapSx = {
        width: "100vw",
        height: "889px",
        mb: {md: "-27em"}, // negative margin to place THIS section inside the UPPER section
        mt: "5em",
        backgroundColor: {base: "#0C6E5A", md: "transparent"},
    }
    const contentWrapSx = {
        width: {base: "95%", md: "70%"},
        height: {base: "90%", md: "50%"},
        zIndex: "20",
        margin: {base: "auto auto auto auto", md: "0 auto 0 auto"},
        flexDirection: {base: "column", md: "row"},
    }
    const outerTextWrapSx = {
        h: {base: "60%", md: "100%"},
        w: {base: "100%", md: "56%"},
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
        fontSize: {base: "3em", md: "4.2em"},
        fontWeight: "light",
        textAlign: "center",
        color: "#0C6E5A",
        whiteSpace: "nowrap"
    }
    const imgWrapSx = {
        w: {base: "100%", md: "41%"},
        backgroundColor: "transparent",
        m: {base: "auto 0 0 auto", md: "0 0 0 auto"},
        borderRadius: "20px",
        boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
    }
    const imgSx = {
        // boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
        borderRadius: "20px",
        width: "100%",
        height: "100%"
    }
    return (
        <>
            <Flex className="section-wrap" position="relative" sx={sectionWrapSx}>
                <Show above="lg">
                    <Flex className="background-wrap" position="absolute" backgroundColor="">
                        <Box as="img" src={backgroundSvg}/>
                    </Flex>
                </Show>
                <Flex className="content-wrap" sx={contentWrapSx}>
                    <Flex className="outer-text-wrap" sx={outerTextWrapSx}>
                        <Flex className="text-wrap" sx={textWrapSx}>
                            <Flex className="title-wrap" sx={titleWrapSx}>
                                <Text m="auto">This is a special place!</Text>
                            </Flex>
                            <Flex className="desc-wrap" mt="1em" justifyContent="justify">
                                <Text fontFamily="Inter" fontSize={{base: "4vw", md: "1.3em"}}
                                      textAlign={{base: "justify", md: "justify"}}>{desc}</Text>
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