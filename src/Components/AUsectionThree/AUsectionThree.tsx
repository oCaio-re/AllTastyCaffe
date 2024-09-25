import {Box, Flex, Text} from "@chakra-ui/react";
import DropDownMenu from "../DropDownMenu/DropDownMenu.tsx";

function AUsectionThree() {
    const sectionWrapSx = {
        w: "100vw",
        h: "450px",
        zIndex: "20"
    }
    const contentWrapSx = {
        boxShadow: "-4px 10px 10px rgba(77, 76, 76, 0.4)",
        w: "70%",
        h: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        m: "0 auto 0 auto"
    }
    const titleWrapSx = {
        backgroundColor: "",
        h: "20%",
        w: "50%",
        m: "2% auto 0 auto",
        alignItems: "center",
        justifyContent: "center"
    }
    const imagesWrapSx = {
        h: "60%",
        w: "92%",
        backgroundColor: "",
        m: "auto",
        justifyContent: "space-between",
    }
    const imgWrapSx = {
        h: "100%",
        w: "23%",
        backgroundColor: "grey"
    }
    const imgSx = {

    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="content-wrap" sx={contentWrapSx} flexDirection="column">
                    <Flex className="title-wrap" sx={titleWrapSx}>
                        <Text fontFamily="Inknut Antiqua" fontSize="2.5em" whiteSpace="nowrap">WE LOVE OUR COMMUNITY</Text>
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