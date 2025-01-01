import {Flex, Image, Text} from "@chakra-ui/react";
import Item from "./Item/Item.tsx";
import FirstBigImage from "./FirstBigImage/FirstBigImage.tsx";
import muffinImg from "../../../public/food/muffin.png";
import pastelImg from "../../../public/food/pastel-natas.png";

function PsTsectionOne() {
    const desc1 = " Indulge in this iconic Portuguese pastry: flaky puff pastry filled with a creamy, dreamy custard."
    const desc2 = "Indulge in a rich and decadent chocolate muffin, perfect for satisfying your sweet tooth."
    const desc3 = "Treat yourself to a slice of our daily changing cake selection."
    const desc4 = "Enjoy a classic with moist layers of spiced carrot cake, topped with a creamy cream cheese frosting and walnuts."
    const desc5 = "Warm and comforting, this classic dessert features sweet apples baked beneath a buttery oat crumble topping."
    const desc6 = "Tangy and zesty, this lemon cake is perfectly balanced with a sweet lemon glaze."
    const desc7 = "A decadent treat with a creamy cheesecake base layered with fresh strawberries and a buttery graham cracker crust."
    const desc8 = "Indulge in this decadent treat featuring a mix of marshmallows, chocolate, nuts, and chewy bits."

    const sectionWrapSx= {
        flexDirection: "column",
    }
    const whiteBoardSx = {
        backgroundColor: "white",
        width: {base: "100%", md: "90%"},
        height: {base: "125rem", md: "35em"},
        padding: "2em",
        flexDirection: "column",
        margin: {base: "0em auto 6em auto", md: "3em auto 3em auto"},
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
        fontSize: "2.5em",
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
    const muffinSx = {
        width: {base: "0%", md: "15%"},
        position: "absolute",
        left: "0px",
        top: "10em",
        "filter": "drop-shadow(-5px 8px 8px rgba(77, 76, 76, 0.4))"
    }
    const pastelSx = {
        width: {base: "0%", md: "22%"},
        position: "absolute",
        right: "0px",
        top: "30em",
        "filter": "drop-shadow(-5px 8px 8px rgba(77, 76, 76, 0.2))"
    }
    return (
        <>
            <Flex className="section-wrap" sx={sectionWrapSx}>
                <Image src={muffinImg} sx={muffinSx} alt="coxinha-img"/>
                <Image src={pastelImg} sx={pastelSx} alt="coxinha-img"/>
                <Flex className="inner-wrap" sx={whiteBoardSx}>
                    <Flex className="content-wrap" sx={contentWrapSx}>
                        <Flex className="title-wrap" sx={titleWrapSx}>
                            <Text m="auto" color="#0C6E5A" textAlign="center">
                                PASTRIES <span style={{color: "#EF9540", fontWeight: "bold"}}>/</span> DESSERTS
                            </Text>
                        </Flex>
                        <Flex className="row-one" sx={rowWrapSx}>
                            <Item title="Portuguese Custard Tart" description={desc1} titleSize="3em" width="30%"/>
                            <Item title="Muffins" description={desc2} width="30%"/>
                            <Item title="Slice of Cake" description={desc3} width="30%"/>
                        </Flex>
                        <Flex className="row-two" sx={rowWrapSx}>
                            <Item title="Carrot Cake" description={desc4} titleSize="3em" width="30%"/>
                            <Item title="Apple Crumble" description={desc5} width="30%"/>
                            <Item title="Lemon Drizzle" description={desc6} width="30%"/>
                        </Flex>
                        <Flex className="row-three" sx={rowWrapSx} style={{justifyContent: "space-evenly"}}>
                            <Item title="Strawberry Cheesecake" description={desc7} titleSize="3em" width="30%"/>
                            <Item title="Rocky Road" description={desc8} width="30%"/>
                            <Item title="" description="" width="30%"/>
                        </Flex>
                    </Flex>
                </Flex>
                <FirstBigImage/>
            </Flex>
        </>
    );
}

export default PsTsectionOne;