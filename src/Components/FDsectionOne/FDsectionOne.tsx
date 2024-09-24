import FDbigImg1 from "./FDbigImg1/FDbigImg1.tsx";
import {Flex, Text} from "@chakra-ui/react";
import Item from "../PSTsectionOne/Item/Item.tsx";
import FDbigImg2 from "./FDbigImg2/FDbigImg2.tsx";

function FDsectionOne() {
    const description = "This is the description text filling up the content adjkgfnma aw wemf" +
        "jkamwefjk m ekwomf ewfm eow mqero merof merq m4"
    const sectionWrapSx = {
        w: "80%",
        h: "20em",
        flexDirection: "column",
        m: "3em auto 3em auto",
        backgroundColor: "white",
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.2)",
    }
    const titleWrapSx = {
        fontFamily: "Inknut Antiqua",
        fontSize: "3em",
        h: "20%"
    }
    const rowWrapSx = {
        h: "50%",
        w: "100%",
        justifyContent: "space-around",
        backgroundColor: "",
        m: "auto"
    }
    return (
        <>
            <FDbigImg1/>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text m="auto" color="#0C6E5A">
                        SANDWICHES
                    </Text>
                </Flex>
                <Flex className="row-one" sx={rowWrapSx}>
                    <Item title="Club Sandwich" description={description} titleSize="3em"/>
                    <Item title="Cuban" description={description}/>
                    <Item title="Turkey and Swiss" description={description}/>
                </Flex>
            </Flex>
            <FDbigImg2/>
        </>
    );
}

export default FDsectionOne;