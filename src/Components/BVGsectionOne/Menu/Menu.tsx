import {Flex, Text} from "@chakra-ui/react";
import lemonadeImg from "../../../../public/beverages/cold/lemonade.png"
import mochaImg from "../../../../public/beverages/mocha-granita.png"
import coldImg from "../../../../public/beverages/cold-brew.png"
import icedTeaImg from "../../../../public/beverages/hot/iced-tea.png"
import coffeMilkImg from "../../../../public/beverages/hot/Cafe-Au-Lait.png"
import hotChocolateImg from "../../../../public/beverages/hot/hot-chocolate.png"
import vanillaLateImg from "../../../../public/beverages/hot/skinny-vanilla-latte.png"
import Item from "./Item/Item.tsx";

const menuWrapSx = {
    w: "90%",
    h: {base: "250em", md: "250em"},
    margin: {base: "auto", md: "0 auto auto auto"},
    flexDirection: "column",
    backgroundColor: "",
    justifyContent: "center",
}
const titleSectionSx = {
    w: "100%",
    h: "10%",
    backgroundColor: ""
}
const titleWrapSx = {
    backgroundColor: "",
    h: "80%",
    w: {base: "100%", md: "50%"},
    m: "auto",
    fontFamily: "Inknut Antiqua",
    fontSize: "3em",
    fontWeight: 500,
}
function Menu() {
    return (
        <>
            <Flex className="title-section" sx={titleSectionSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center">BEVERAGE MENU</Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>
                <Flex className="row-one" h="50%" w="100%" backgroundColor="" flexDirection={{base: "column", md: "row"}}>
                    <Item image={lemonadeImg} title="Lemonade" width="25%"/>
                    <Item image={mochaImg} title="Frozen & Blended" width="25%"/>
                    <Item image={coldImg} title="Iced Coffee" width="25%"/>
                    <Item image={icedTeaImg} title="Iced Tea" width="25%"/>
                </Flex>

                <Flex className="row-two" h="35%" w="100%" m="auto"
                      justifyContent={{base: "center", md: "space-evenly"}} flexDirection={{base: "column", md: "row"}}
                >
                    <Item image={coffeMilkImg} title="Coffee" width="30%"/>
                    <Item image={hotChocolateImg} title="Expresso" width="30%"/>
                    <Item image={vanillaLateImg} title="Classics" width="30%"/>
                </Flex>
            </Flex>
        </>
    );
}

export default Menu;