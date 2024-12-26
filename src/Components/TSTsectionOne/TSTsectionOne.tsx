import {Flex, Text} from "@chakra-ui/react";
import Item from "../PSTsectionOne/Item/Item.tsx";
import TSTbigImg1 from "./TSTbigImg1/TSTbigImg1.tsx";

function FDsectionOne() {
    const desc1 = "Tender Angus beef sliced thin, paired with peppery arugula and melted cheese, all nestled on a crusty ciabatta roll."
    const desc2 = "Slow-cooked pulled pork, smoky bacon, and tangy BBQ sauce piled high on a soft ciabatta roll."
    const desc3 = "Savory BBQ ribs, melted cheese, and fresh tomato slices on a flavorful ciabatta roll."
    const desc4 = "Grilled chicken breast, crispy bacon, and melted cheese on warm, crusty sourdough bread."
    const desc5 = "Simple and satisfying – grilled chicken with melted cheese on toasted sourdough bread."
    const desc6 = "The classic combination of crispy bacon, fresh lettuce, and juicy tomato on your choice of bread."
    const desc7 = "High-quality ham and your favorite melted cheese on your choice of bread."
    const desc8 = "our choice of cheese on your choice of bread – a simple and delicious option."
    const desc9= "Choose from soft white bread or hearty brown bread to suit your preference."
    const sectionWrapSx = {
        backgroundColor: "white",
        w: {base: "95%", md: "90%"},
        h: {base: "70em", md: "35em"},
        padding: "2em",
        flexDirection: "column",
        m: {base: "0em auto 6em auto", md: "0 auto 3em auto"},
        // boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.2)",
    }
    const contentWrapSx = {
        // backgroundColor: "red",
        width: "85%",
        margin: "auto auto",
        flexDirection: "column",
    }
    const titleWrapSx = {
        fontFamily: "Inknut Antiqua",
        fontWeight: "500",
        fontSize: "2.5em",
        h: {base: "10%", md: "20%"},
    }
    const rowWrapSx = {
        h: "50%",
        w: "100%",
        justifyContent: "space-around",
        backgroundColor: "",
        flexDirection: {base: "column", md: "row"},
        m: "2em auto auto auto"
    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Flex className="content-wrap" sx={contentWrapSx}>
                    <Flex className="title-wrap" sx={titleWrapSx}>
                        <Text m="auto" color="#0C6E5A">
                            TOASTIES <span style={{color: "#EF9540"}}>and</span> SANDWICHES
                        </Text>
                    </Flex>
                    <Flex className="row-one" sx={rowWrapSx}>
                        <Item title="Angus Beef on Ciabatta" description={desc1} titleSize="3em" width="30%"/>
                        <Item title="Ciabatta with Pork" description={desc2} width="30%"/>
                        <Item title="Ribsteak with Cheese" description={desc3} width="30%"/>
                    </Flex>
                    <Flex className="row-two" sx={rowWrapSx}>
                        <Item title="Sourdough Chicken" description={desc4} titleSize="3em" width="30%"/>
                        <Item title="Sourdough Chicken Cheese" description={desc5} width="30%"/>
                        <Item title="The Original BLT Sandwich" description={desc6} width="30%"/>
                    </Flex>
                    <Flex className="row-three" sx={rowWrapSx}>
                        <Item title="Ham and Cheese" description={desc7} titleSize="3em" width="30%"/>
                        <Item title="Cheese" description={desc8} width="30%"/>
                        <Item title="White/Brown" description={desc9} width="30%"/>
                    </Flex>
                </Flex>
            </Flex>
            <TSTbigImg1/>
        </>
    );
}

export default FDsectionOne;