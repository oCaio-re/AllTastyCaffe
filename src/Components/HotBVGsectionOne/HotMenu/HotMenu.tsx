import {Flex, Text} from "@chakra-ui/react";
import capuccinoImg from "../../../../public/beverages/hot/cappuccino.png"
import latteImg from "../../../../public/beverages/hot/latte.png"
import flatWhiteImg from "../../../../public/beverages/hot/flat-white.png"
import espressoImg from "../../../../public/beverages/hot/espresso.png"
import americanoImg from "../../../../public/beverages/hot/americano.png"
import mochaImg from "../../../../public/beverages/hot/hot-mocha.png"
import icedImg from "../../../../public/beverages/cold-brew.png"
import hotChocolateImg from "../../../../public/beverages/hot-chocolate.png"
import KidshotChocolateImg from "../../../../public/beverages/hot/kids-hot-chocolate.png"
import teaImg from "../../../../public/beverages/iced-tea.png"
import Item from "./Item/Item.tsx";

const menuWrapSx = {
    w: "90%",
    h: {base: "250em", md: "100em"},
    margin: {base: "auto", md: "0 auto auto auto"},
    flexDirection: "column",
    backgroundColor: "",
    justifyContent: "center",
}
const titleSectionSx = {
    w: "100%",
    h: "5%",
    backgroundColor: "",
    m: {md: "auto 0 0 0"},
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
function HotMenu() {
    return (
        <>
            <Flex className="title-section" sx={titleSectionSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center">HOT BEVERAGES MENU</Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>

                <Flex className="row-two" h="33%" w="100%" m="auto"
                      justifyContent={{base: "center", md: "space-evenly"}} flexDirection={{base: "column", md: "row"}}
                >
                    <Item image={americanoImg} title="Americano" imgProportion="25%"/>
                    <Item image={hotChocolateImg} title="Hot Chocolate" imgProportion="25%"/>
                    <Item image={icedImg} title="Iced Coffee" imgProportion="25%"/>
                    <Item image={mochaImg} title="Mocha" imgProportion="25%"/>

                    {/*<Item image={frozenImg} title="Frozen & Blended" imgProportion="25%"/>*/}
                    {/*<Item image={coffeMilkImg} title="Coffee" imgProportion="25%"/>*/}
                    {/*<Item image={vanillaLateImg} title="Classics" imgProportion="25%"/>*/}
                    {/*<Item image={vanillaLateImg} title="Classics" imgProportion="25%"/>*/}
                </Flex>
                <Flex className="row-one" h="33%" w="100%" backgroundColor="" flexDirection={{base: "column", md: "row"}}>
                    <Item image={capuccinoImg} title="Cappucino" imgProportion="25%"/>
                    <Item image={latteImg} title="Latte" imgProportion="25%"/>
                    <Item image={flatWhiteImg} title="Flat White" imgProportion="25%"/>
                    <Item image={espressoImg} title="Espresso" imgProportion="25%"/>
                </Flex>
                <Flex className="row-two" h="33%" w="100%" m="auto"
                      justifyContent={{base: "center", md: "space-around"}} flexDirection={{base: "column", md: "row"}}
                >
                    <Item image={teaImg} title="Breakfast Tea" imgProportion="25%"/>
                    <Item image={KidshotChocolateImg} title="Kids Hot Chocolate" imgProportion="25%"/>
                </Flex>
            </Flex>
        </>
    );
}

export default HotMenu;