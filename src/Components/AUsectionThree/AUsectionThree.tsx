import {Box, Flex, Text} from "@chakra-ui/react";
import DropDownMenu from "../DropDownMenu/DropDownMenu.tsx";

function AUsectionThree() {
    const sectionWrapSx = {
        w: "100vw",
        h: {base: "100em", md: "450px"},
        zIndex: "20",
        justifyContent: "center",
        backgroundColor: "",
    }
    const contentWrapSx = {
        boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
        w: {base: "95%", md: "70%"},
        h: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        m: {base: "2em 0 0 2em"},
    }
    const titleWrapSx = {
        backgroundColor: "",
        h: {base: "10%", md: "20%"},
        w: {base: "100%", md: "50%"},
        m: "2% auto 0 auto",
        alignItems: "center",
        justifyContent: "center"
    }
    const imagesWrapSx = {
        backgroundColor: "",
        flexDirection: {base: "column", md: "row"},
        h: "60%",
        w: "92%",
        m: {base: "0 auto 0 auto", md: "auto"},
        justifyContent: "space-between",
    }
    const imgWrapSx = {
        m: "auto",
        h: {base: "90%", md: "100%"},
        w: {base: "80%", md: "23%"},
        backgroundColor: "grey"
    }
    const imgSx = {

    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="content-wrap" sx={contentWrapSx} flexDirection="column">
                    <Flex className="title-wrap" sx={titleWrapSx}>
                        <Text fontFamily="Inknut Antiqua" fontSize={{base: "1.2em", md: "2.5em"}} whiteSpace="nowrap">WE LOVE OUR COMMUNITY</Text>
                    </Flex>
                    <Flex className="images-wrap" sx={imagesWrapSx}>
                        <Flex className="img-wrap" sx={imgWrapSx}>
                            <Box sx={imgSx}/>
                        </Flex>
                        <Flex className="img-wrap" sx={imgWrapSx}>
                            <Box sx={imgSx}/>
                        </Flex>
                        <Flex className="img-wrap" sx={imgWrapSx}>
                            <Box sx={imgSx}/>
                        </Flex>
                        <Flex className="img-wrap" sx={imgWrapSx}>
                            <Box sx={imgSx}/>
                        </Flex>
                    </Flex>
                </Flex>
                <DropDownMenu/>
            </Flex>
        </>
    );
}

export default AUsectionThree;