import {Flex, Text} from "@chakra-ui/react";
import capuccinoImg from "../../../../public/beverages/hot/cappuccino.png"
import latteImg from "../../../../public/beverages/hot/latte.png"
import flatWhiteImg from "../../../../public/beverages/hot/flat-white.png"
import americanoImg from "../../../../public/beverages/hot/americano.png"
import icedImg from "../../../../public/beverages/cold-brew.png"
import hotChocolateImg from "../../../../public/beverages/hot/hot-chocolate.png"
import Item from "./Item/Item.tsx";

const menuWrapSx = {
    // backgroundColor: "red",
    w: "90%",
    h: {base: "250em", md: "60em"},
    margin: {base: "auto", md: "0 auto auto auto"},
    flexDirection: "column",
    justifyContent: "center",
}
const titleSectionSx = {
    // backgroundColor: "",
    w: "100%",
    h: "5%",
    m: {md: "0 0 0 0"},
}
const titleWrapSx = {
    backgroundColor: "",
    h: "80%",
    w: {base: "100%", md: "55%"},
    m: "auto",
    fontFamily: "Inknut Antiqua",
    fontSize: "3em",
    fontWeight: 500,
}
function SmoothiesMenu() {
    return (
        <>
            <Flex className="title-section" sx={titleSectionSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center">SMOOTHIES</Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>

                <Flex className="row-two" h="50%" w="100%" m="auto"
                      justifyContent={{base: "center", md: "space-evenly"}} flexDirection={{base: "column", md: "row"}}
                >
                    <Item image={americanoImg} title="Pineapple Sunset" imgProportion="33%"/>
                    <Item image={hotChocolateImg} title="Strawberry Fantasy" imgProportion="33%"/>
                    <Item image={icedImg} title="Berry Burst" imgProportion="33%"/>
                </Flex>
                <Flex className="row-one" h="50%" w="100%" backgroundColor="" flexDirection={{base: "column", md: "row"}}>
                    <Item image={capuccinoImg} title="Acai Kick" imgProportion="33%"/>
                    <Item image={latteImg} title="Innocent Kids Orange" imgProportion="33%"/>
                    <Item image={flatWhiteImg} title="Innocent Kids Strawberries" imgProportion="33%"/>
                </Flex>
            </Flex>
        </>
    );
}

export default SmoothiesMenu;