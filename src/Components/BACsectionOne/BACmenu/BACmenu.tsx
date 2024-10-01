import {Flex, Text} from "@chakra-ui/react";
import Item from "../../BVGsectionOne/Menu/Item/Item.tsx";
import flavour1 from "../../../../public/berry-acai/flavour1.jpeg";
import flavour2 from "../../../../public/berry-acai/flavour2.jpeg";
import flavour3 from "../../../../public/berry-acai/flavour3.jpeg";
import flavour4 from "../../../../public/berry-acai/flavour4.jpeg";
import flavour5 from "../../../../public/berry-acai/flavour5.jpeg";

const menuWrapSx = {
    backgroundColor: "",
    w: "90%",
    h: "110em",
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
    w: {base: "100%", md: "50%"},
    m: "auto",
    fontFamily: "Inknut Antiqua",
    fontSize: "3em",
    fontWeight: 500,
}

function BaCmenu() {
    return (
        <>
            <Flex className="title-section" sx={titleSectionSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" whiteSpace={{md: "nowrap"}} textAlign="center">BERRY ACAI MENU</Text>
                </Flex>
            </Flex>
            <Flex className="menu-wrap" sx={menuWrapSx}>
                <Flex className="row-one" h="45%" w="100%" backgroundColor=""
                      flexDirection={{base: "column", md: "row"}}>
                    <Item image={flavour1} title="Flavour1" borderRadius="20px" titleSize="1.5em" imgProportion="30%"/>
                    <Item image={flavour2} title="Flavour2" borderRadius="20px" titleSize="1.5em" imgProportion="30%"/>
                    <Item image={flavour3} title="Flavour3" borderRadius="20px" titleSize="1.5em" imgProportion="30%"/>
                </Flex>

                <Flex className="row-two" h={{base: "33%", md: "45%"}} w="100%" m="auto" justifyContent={{md: "space-evenly"}}
                      flexDirection={{base: "column", md: "row"}}
                      mb={{base: "7em", md: "18em"}}
                >
                    <Item image={flavour4} title="Flavour4" borderRadius="20px" titleSize="1.5em" imgProportion="30%"/>
                    <Item image={flavour5} title="Flavour5" borderRadius="20px" titleSize="1.5em" imgProportion="30%"/>
                </Flex>
            </Flex>
        </>
    );
}

export default BaCmenu;