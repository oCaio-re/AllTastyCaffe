import SDWbigImg1 from "./SDWbigImg1/SDWbigImg1.tsx";
import {Flex, Text} from "@chakra-ui/react";
import Item from "../PSTsectionOne/Item/Item.tsx";
import SDWbigImg2 from "./SDWbigImg2/SDWbigImg2.tsx";

function SDWsectionOne() {
    const description = "This is the description text filling up the content adjkgfnma aw wemf" +
        "jkamwefjk m ekwomf ewfm eow mqero merof merq m4"
    const sectionWrapSx = {
        backgroundColor: "white",
        w: {base: "95%", md: "80%"},
        h: {base: "70em", md: "27em"},
        flexDirection: "column",
        m: {base: "0em auto 6em auto", md: "3em auto 3em auto"},
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.2)",
    }
    const titleWrapSx = {
        fontFamily: "Inknut Antiqua",
        fontSize: "3em",
        h: {base: "10%", md: "20%"},
        backgroundColor: "",
    }
    const rowWrapSx = {
        h: "50%",
        w: "100%",
        justifyContent: "space-around",
        backgroundColor: "",
        flexDirection: {base: "column", md: "row"},
        m: {base: "2em auto auto auto", md: "auto"},
    }
    return (
        <>
            <SDWbigImg1/>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" color="#0C6E5A">
                        SANDWICHES
                    </Text>
                </Flex>
                <Flex className="row-one" sx={rowWrapSx}>
                    <Item title="Club Sandwich" description={description} titleSize="3em" width="30%"/>
                    <Item title="Cuban" description={description} width="30%"/>
                    <Item title="Turkey and Swiss" description={description} width="30%"/>
                </Flex>
            </Flex>
            <SDWbigImg2/>
        </>
    );
}

export default SDWsectionOne;