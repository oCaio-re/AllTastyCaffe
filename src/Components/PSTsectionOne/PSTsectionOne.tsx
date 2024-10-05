import {Flex, Text} from "@chakra-ui/react";
import Item from "./Item/Item.tsx";

function PsTsectionOne() {
    const description = "This is the description text filling up the content adjkgfnma aw wemf" +
        "jkamwefjk m ekwomf ewfm eow mqero merof merq m4"
    const sectionWrapSx = {
        backgroundColor: "white",
        w: {base: "95%", md: "80%"},
        h: {base: "150em", md: "40em"},
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
        height: "80%",
        m: "0 auto auto auto"
    }
    const rowWrapSx = {
        flexDirection: {base: "column", md: "row"},
        h: "30%",
        w: "100%",
        justifyContent: "space-around",
        m: "auto",
    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" color="#0C6E5A">
                        PASTRIES
                    </Text>
                </Flex>
                <Flex className="rows-wrap" sx={rowsWrapSx}>
                    <Flex className="row-one" sx={rowWrapSx}>
                        <Item title="Muffins" description={description} titleSize="3em" width="30%"/>
                        <Item title="Croissants" description={description} width="30%"/>
                        <Item title="Cookies" description={description} width="30%"/>
                    </Flex>
                    <Flex className="row-two" sx={rowWrapSx}>
                        <Item title="Portuguese Custard Tart" description={description} width="30%"/>
                        <Item title="Slice of Homemade Cake" description={description} width="30%"/>
                        <Item title="Apple Crumble" description={description} width="30%"/>
                    </Flex>
                    <Flex className="row-two" sx={rowWrapSx}>
                        <Item title="Rocky Road" description={description} width="30%"/>
                        <Item title="Lemon Drizzle" description={description} width="30%"/>
                        <Item title="Strawberry Cheesecake" description={description} width="30%"/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default PsTsectionOne;