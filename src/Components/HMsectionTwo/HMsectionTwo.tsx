import {Flex, Show, Text} from "@chakra-ui/react";
import ViewMenusBar from "./ViewMenusBar/ViewMenusBar.tsx";
import mochaImg from "../../../public/beverages/hot/hot-mocha.png";
import icedImg from "../../../public/beverages/cold-brew.png";
import hotChocolateImg from "../../../public/beverages/hot/hot-chocolate.png";
import Item from "../SMTsectionOne/SmoothiesMenu/Item/Item.tsx";
import {Hide} from "@chakra-ui/icons";

function HMsectionTwo() {
    const sectionWrapSx = {
        // backgroundColor: "red",
        height: {base: "70vh", md: "90vh"},
        margin: {base: "0", md: "12em 0"},
        flexDirection: "column",
    }
    const contentWrapSx = {
        // backgroundColor: "red",
        w: {base: "80%", md: "1320px"},
        h: {base: "25em", md: "80%"},
        m: "0 auto 0 auto",
        justifyContent: "center",
    }
    const titleSWrapSx = {
        h: "25%",
        backgroundColor: "",
        flexDirection: "column",
    }
    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="content-wrap" flexDirection="column" sx={contentWrapSx}>
                <Flex className="titleS-wrap" sx={titleSWrapSx}>
                    <Flex className="title-wrap" backgroundColor="" h="50%" w="100%"
                          filter="drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))"
                    >
                        <Text m="auto" fontFamily="Inknut Antiqua"
                              fontSize={{base: "1.3em", md: "3em"}}
                              whiteSpace="nowrap"
                        >
                            A ROSCOMMON ORIGINAL
                        </Text>
                    </Flex>
                    <Flex className="undertitle-wrap" h="50%" w="100%" backgroundColor=""
                          filter="drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))" color="#0C6E5A"
                    >
                        <Text m="auto" fontFamily="Ingrid Darling" fontSize={{base: "2.5em", md: "4em"}}
                              whiteSpace="nowrap">
                            A few of our favorites...
                        </Text>
                    </Flex>
                </Flex>
                <Hide below="md">
                    <Flex className="images-wrap" h="75%" justifyContent="center">
                        <Item image={mochaImg} title={"Mocha"} imgProportion="33%" titleSize="1.5rem"/>
                        <Item image={icedImg} title={"Iced Coffee"} imgProportion="33%" titleSize="1.5rem"/>
                        <Item image={hotChocolateImg} title={"Hot Chocolate"} imgProportion="33%" titleSize="1.5rem"/>
                    </Flex>
                </Hide>
                <Show below="md">
                    <Flex className="images-wrap" h="75%" justifyContent="center">
                        <Item image={mochaImg} title={"Mocha"} imgProportion="33%" titleSize="0.8rem"/>
                        <Item image={icedImg} title={"Iced Coffee"} imgProportion="33%" titleSize="0.8rem"/>
                        <Item image={hotChocolateImg} title={"Hot Chocolate"} imgProportion="33%" titleSize="0.8rem"/>
                    </Flex>
                </Show>
            </Flex>
            <ViewMenusBar/>
        </Flex>
    );
}

export default HMsectionTwo;