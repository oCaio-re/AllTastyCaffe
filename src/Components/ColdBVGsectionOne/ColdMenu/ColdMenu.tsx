import {Flex, Text} from "@chakra-ui/react";
import Item from "./Item/Item.tsx";
import capuccinoImg from "../../../../public/beverages/hot/cappuccino.png"
import latteImg from "../../../../public/beverages/hot/latte.png"
import americanoImg from "../../../../public/beverages/hot/americano.png"
import icedImg from "../../../../public/beverages/cold-brew.png"
import hotChocolateImg from "../../../../public/beverages/hot/hot-chocolate.png"

const menuWrapSx = {
    w: "90%",
    h: {base: "250em", md: "70em"},
    margin: {base: "auto", md: "0 auto auto auto"},
    flexDirection: "column",
    backgroundColor: "",
    justifyContent: "center",
}
const titleSectionSx = {
    w: "100%",
    h: "5%",
    backgroundColor: "",
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
function ColdMenu() {
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
                    <Item image={americanoImg} title="Americano" imgProportion="33%"/>
                    <Item image={icedImg} title="Iced Coffee" imgProportion="33%"/>
                    <Item image={hotChocolateImg} title="Hot Chocolate" imgProportion="33%"/>
                </Flex>
                <Flex className="row-one" h="50%" w="100%" justifyContent="space-between" flexDirection={{base: "column", md: "row"}}>
                    <Item image={capuccinoImg} title="Cappucino" imgProportion="33%"/>
                    <Item image={latteImg} title="Latte" imgProportion="33%"/>
                </Flex>
            </Flex>
            {/*----------*/}
            <Flex className="title-section" sx={titleSectionSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center">COLD DRINKS</Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>
                <Flex className="row-two" h="50%" w="100%" m="auto"
                      justifyContent={{base: "center", md: "space-evenly"}} flexDirection={{base: "column", md: "row"}}
                >

                    <Item image={icedImg} title="Iced Coffee" imgProportion="33%"/>
                    <Item image={hotChocolateImg} title="Lemonade" imgProportion="33%"/>
                </Flex>
                <Flex className="row-two" h="50%" w="100%" m="auto"
                      justifyContent={{base: "center", md: "space-evenly"}} flexDirection={{base: "column", md: "row"}}
                >
                    <Item image={americanoImg} title="All Cans" imgProportion="33%"/>
                    <Item image={hotChocolateImg} title="Still Spring Water" imgProportion="33%"/>
                </Flex>
            </Flex>

        </>
    );
}

export default ColdMenu;