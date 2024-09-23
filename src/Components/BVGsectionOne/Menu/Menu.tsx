import {Flex, Text} from "@chakra-ui/react";
import lemonadeImg from "../../../../public/beverages/lemonade.png"
import mochaImg from "../../../../public/beverages/mocha-granita.png"
import coldImg from "../../../../public/beverages/cold-brew.png"
import icedTeaImg from "../../../../public/beverages/iced-tea.png"
import coffeMilkImg from "../../../../public/beverages/Cafe-Au-Lait.png"
import hotChocolateImg from "../../../../public/beverages/hot-chocolate.png"
import vanillaLateImg from "../../../../public/beverages/skinny-vanilla-latte.png"
import Item from "./Item/Item.tsx";

const menuWrapSx = {
    backgroundColor: "",
    w: "90%",
    h: "40%",
    margin: "0 auto auto auto",
    flexDirection: "column",
}
const titleSectionSx = {
    w: "100%",
    h: "10%",
    backgroundColor: ""
}
const titleWrapSx = {
    backgroundColor: "",
    h: "80%",
    w: "50%",
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
                    <Text m="auto" whiteSpace="nowrap">BEVERAGE MENU</Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>
                <Flex className="row-one" h="50%" w="100%" backgroundColor="">
                    <Item image={lemonadeImg} title="Lemonade" imgProportion="25%"/>
                    <Item image={mochaImg} title="Frozen & Blended" imgProportion="25%"/>
                    <Item image={coldImg} title="Iced Coffee" imgProportion="25%"/>
                    <Item image={icedTeaImg} title="Iced Tea" imgProportion="25%"/>
                </Flex>

                <Flex className="row-two" h="35%" w="100%" m="auto" justifyContent="space-evenly">
                    <Item image={coffeMilkImg} title="Coffee" imgProportion="33%"/>
                    <Item image={hotChocolateImg} title="Expresso" imgProportion="33%"/>
                    <Item image={vanillaLateImg} title="Classics" imgProportion="33%"/>
                </Flex>
            </Flex>
        </>
    );
}

export default Menu;