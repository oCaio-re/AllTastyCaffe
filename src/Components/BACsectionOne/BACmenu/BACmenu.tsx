import {Box, Flex, Show, Text} from "@chakra-ui/react";
import flavour1 from "../../../../public/berry-acai/flavour1.jpeg";
import flavour2 from "../../../../public/berry-acai/flavour2.jpeg";
import flavour3 from "../../../../public/berry-acai/flavour3.jpeg";
import flavour4 from "../../../../public/berry-acai/flavour4.jpeg";
import flavour5 from "../../../../public/berry-acai/flavour5.jpeg";
import Item from "../../SMTsectionOne/SmoothiesMenu/Item/Item.tsx";

const sectionWrapSx = {
    margin: {base: "7rem 0 0 0", md: "6rem 0 0 0"}
}

const titleSectionSx = {
    // backgroundColor: "",
    width: "100%",
    height: "5%",
    margin: {base: "2em 0 0 0", md: "3rem 0 4em 0"},
}

const menuWrapSx = {
    // backgroundColor: "red",
    w: "90%",
    h: {base: "90rem", md: "50em"},
    margin: {base: "3rem auto", md: "1rem auto auto auto"},
    flexDirection: "column",
    justifyContent: {base: "left", md: "center"},
    alignItems: {base: "left", md: "center"},
}

const titleWrapSx = {
    // backgroundColor: "",
    height: {base: "auto", md: "80%"},
    width: {base: "100%", md: "55%"},
    margin: {base: "", md: "auto"},
    fontFamily: "Inknut Antiqua",
    fontSize: {base: "3em", md: "3em"},
    padding: {base: "10px", md: "1em"},
    fontWeight: 500,
}

const rowSx = {
    // backgroundColor: "blue",
    height: {base: "auto", md: "45%"},
    width: {base: "100%", md: "100%"},
    flexDirection: {base: "column", md: "row"},
    justifyContent: {base: "space-evenly", md: "space-around"},
    margin: {md: "auto"}
    // alignItems: {base: "", md: "left"},
}
function BaCmenu() {
    return (
        <>
            <Box className="section-wrap" sx={sectionWrapSx}>
                <Flex className="title-section" sx={titleSectionSx}>
                    <Flex className="title-wrap" sx={titleWrapSx}>
                        <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center" color="#0C6E5A">
                            ACAI MENU
                        </Text>
                    </Flex>
                </Flex>
                <Flex className="menu-wrap" sx={menuWrapSx}>
                    <Flex className="row-two" sx={rowSx}>
                        <Item image={flavour1} title="flavour1" imgProportion="33%" borderRadius=""/>
                        <Item image={flavour2} title="flavour2" imgProportion="33%"/>
                        <Item image={flavour3} title="flavour3" imgProportion="33%"/>
                    </Flex>
                    <Flex className="row-one" sx={rowSx}>
                        <Item image={flavour4} title="flavour4" imgProportion="33%"/>
                        <Item image={flavour5} title="flavour5" imgProportion="33%"/>
                        <Show above="md">
                            <Flex width="100%" height="70%" mr="auto"/>
                        </Show>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default BaCmenu;