import {Flex, Text} from "@chakra-ui/react";
import Item from "../PSTsectionOne/Item/Item.tsx";

function SVRsectionOne() {
    const description = "This is the description text filling up the content adjkgfnma aw wemf" +
        "jkamwefjk m ekwomf ewfm eow mqero merof merq m4"
    const sectionWrapSx = {
        backgroundColor: "white",
        w: {base: "95%", md: "80%"},
        h: {base: "150em", md: "32em"},
        flexDirection: "column",
        m: {base: "0em auto 6em auto", md: "3em auto 3em auto"},
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.2)",
    }
    const titleWrapSx = {
        fontFamily: "Inknut Antiqua",
        fontSize: "3em",
        h: "20%"
    }
    const rowsWrapSx = {
        flexDirection: "column",
        height: "80%"
    }
    const rowWrapSx = {
        flexDirection: {base: "column", md: "row"},
        h: "50%",
        w: "100%",
        justifyContent: "space-around"
    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" color="#0C6E5A">
                        SAVOURIES
                    </Text>
                </Flex>
                <Flex className="rows-wrap" sx={rowsWrapSx}>
                    <Flex className="row-one" sx={rowWrapSx}>
                        <Item title="Chilli Cheese Nuggets" description={description} titleSize="3em" width="30%"/>
                        <Item title="Brazilian fried chicken balls" description={description} width="30%"/>
                        <Item title="Cheese Bread" description={description} width="30%"/>
                    </Flex>
                    <Flex className="row-two" sx={rowWrapSx}>
                        <Item title="Pao com chourico" description={description} width="40%"/>
                        <Item title="Pao com ham and cheese" description={description} width="40%"/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default SVRsectionOne;