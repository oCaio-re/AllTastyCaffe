import {Flex, Show, Text} from "@chakra-ui/react";
import capuccinoImg from "../../../../public/beverages/hot/cappuccino.png"
import latteImg from "../../../../public/beverages/hot/latte.png"
import americanoImg from "../../../../public/beverages/hot/americano.png"
import icedImg from "../../../../public/beverages/cold-brew.png"
import hotChocolateImg from "../../../../public/beverages/hot/hot-chocolate.png"
import Item from "../../SMTsectionOne/SmoothiesMenu/Item/Item.tsx";


const menuWrapSx = {
    w: "90%",
    h: {base: "90rem", md: "60em"},
    margin: {base: "3rem auto", md: "1rem auto auto auto"},
    flexDirection: "column",
    justifyContent: {base: "left", md: "center"},
    alignItems: {base: "left", md: "center"},
}
const titleSectionSx = {
    // backgroundColor: "",
    width: "100%",
    height: "5%",
    margin: {base: "2em 0 0 0", md: "3rem 0 0 0"},
}
const titleWrapSx = {
    // backgroundColor: "",
    height: {base: "auto", md: "80%"},
    width: {base: "100%", md: "55%"},
    margin: "auto",
    fontFamily: "Inknut Antiqua",
    fontSize: {base: "2em", md: "3em"},
    fontWeight: 500,
}

const rowSx = {
    // backgroundColor: "red",
    height: {base: "auto", md: "50%"},
    width: {base: "100%", md: "100%"},
    flexDirection: {base: "column", md: "row"},
    justifyContent: {base: "space-evenly", md: "space-around"},
}
function ColdMenu() {
    return (
        <>
            <Flex className="title-section" sx={titleSectionSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center" color="#0C6E5A">
                        COLD BEVERAGES
                    </Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>
                <Flex className="row-two" sx={rowSx}>
                    <Item image={americanoImg} title="Pineaple Juice" imgProportion="33%"/>
                    <Item image={hotChocolateImg} title="Orange Juice" imgProportion="33%"/>
                    <Item image={icedImg} title="Mango Juice" imgProportion="33%"/>
                </Flex>
                <Flex className="row-one" sx={rowSx}>
                    <Item image={capuccinoImg} title="Lemonade" imgProportion="33%"/>
                    <Item image={latteImg} title="All Cans" imgProportion="33%"/>
                    <Show above="md">
                        <Flex width="60%" height="100%" mr="auto"/>
                    </Show>
                </Flex>
            </Flex>
        </>
    );
}

export default ColdMenu;