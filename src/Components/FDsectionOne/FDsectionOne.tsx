import {Flex, Image, Text} from "@chakra-ui/react";
import Item from "../PSTsectionOne/Item/Item.tsx";
import FDbigImg1 from "./FDbigImg1/FDbigImg1.tsx";
import bltImg from "../../../public/food/blt.png";
import cheeseImg from "../../../public/food/cheese-sourdough.png";

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

    const sectionWrapSx= {
        flexDirection: "column",
    }
    const whiteboardSx = {
        backgroundColor: "white",
        width: {base: "100%", md: "90%"},
        height: {base: "140rem", md: "35em"},
        padding: "2em",
        flexDirection: "column",
        margin: {base: "0em auto 6em auto", md: "0em auto 3em auto"},
        // boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.2)",
    }
    const contentWrapSx = {
        // backgroundColor: "red",
        margin: {base: "8rem auto auto auto", md: "auto"},
        width: {base: "95%", md: "85%"},
        // margin: "auto auto",
        flexDirection: "column",
    }
    const titleWrapSx = {
        // backgroundColor: "red",
        fontFamily: "Inknut Antiqua",
        fontWeight: "500",
        fontSize: {base: "2em", md: "2.5em"},
        height: {base: "10%", md: "20%"},
    }
    const rowWrapSx = {
        alignItems: {base: "center", md: ""},
        height: {base: "50%", md: "50%"},
        width: {base: "100%", md: "100%"},
        justifyContent: {base: "", md: "space-around"},
        backgroundColor: "",
        flexDirection: {base: "column", md: "row"},
        margin: "2em auto auto auto"
    }
    const cheeseSx = {
        width: {base: "0%", md: "15%"},
        position: "absolute",
        right: "0px",
        top: "35em",
        "filter": "drop-shadow(-5px 8px 8px rgba(77, 76, 76, 0.6))"

    }
    const bltSx = {
        width: {base: "0%", md: "12%"},
        position: "absolute",
        left: "10px",
        top: "10em",
        "filter": "drop-shadow(-5px 8px 8px rgba(77, 76, 76, 0.6))"
    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Image src={cheeseImg} sx={bltSx} alt="blt-img"/>
                <Image src={bltImg} sx={cheeseSx} alt="cheese-img"/>
                <Flex className="inner-wrap" sx={whiteboardSx}>
                    <Flex className="content-wrap" sx={contentWrapSx}>
                        <Flex className="title-wrap" sx={titleWrapSx}>
                            <Text m="auto" color="#0C6E5A" textAlign="center">
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
                <FDbigImg1/>
            </Flex>
        </>
    );
}

export default FDsectionOne;