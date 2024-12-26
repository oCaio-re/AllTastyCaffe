import {Flex, Text} from "@chakra-ui/react";
import Item from "../PSTsectionOne/Item/Item.tsx";
import SecondBigImage from "./SecondBigImage/SecondBigImage.tsx";

function SVRsectionOne() {
    const desc1 = "(Coxinha) Savory shredded chicken filling encased in a crispy dough, a classic Brazilian street food."
    const desc2 = "(Pão de Queijo) Cheesy and savory Brazilian cheese bread, made with cassava flour and baked to golden perfection."
    const desc3 = "(Enroladinho de salsicha & Queijo) A delicious Brazilian snack with sausage and cheese wrapped in a thin dough and deep-fried."
    const desc4 = "Cachorro Quente Gourmet) A gourmet hotdog with premium smoked sausage, topped with your choice of delicious toppings."
    const desc5 = "(Coated Pork Sausage) A unique twist on a classic, with a pork sausage coated in crispy mashed potatoes."
    const desc6 = "(Espetinho de Frango) Tender pieces of marinated chicken roasted on skewers, a popular Brazilian street food."
    const desc7 = "Savory bread filled with flavorful chorizo, a perfect accompaniment to any meal.\n"
    const desc8 = "Crispy and flavorful chicken nuggets with a spicy kick and melted cheese, served in a portion of 4."
    const desc9 = "Crispy and flavorful chicken nuggets with a spicy kick and melted cheese, served in a portion of 6."
    const sectionWrapSx = {
        backgroundColor: "white",
        w: {base: "95%", md: "90%"},
        h: {base: "70em", md: "35em"},
        padding: "2em",
        flexDirection: "column",
        m: {base: "0em auto 6em auto", md: "3em auto 3em auto"},
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
                            SAVOURIES
                        </Text>
                    </Flex>
                    <Flex className="row-one" sx={rowWrapSx}>
                        <Item title="Brazilian Chicken Ball" description={desc1} titleSize="3em" width="30%"/>
                        <Item title="Cheese Bread" description={desc2} width="30%"/>
                        <Item title="Sausage and Cheese Roll" description={desc3} width="30%"/>
                    </Flex>
                    <Flex className="row-two" sx={rowWrapSx}>
                        <Item title="Smoked Gourmet Hotdog" description={desc4} titleSize="3em" width="30%"/>
                        <Item title="Potato Dog" description={desc5} width="30%"/>
                        <Item title="Roasted Chicken Skewers" description={desc6} width="30%"/>
                    </Flex>
                    <Flex className="row-three" sx={rowWrapSx}>
                        <Item title="Chorizo Bread" description={desc7} titleSize="3em" width="30%"/>
                        <Item title="Chilli Cheese Nuggets | 4" description={desc8} width="30%"/>
                        <Item title="Chilli Cheese Nuggets | 6" description={desc9} width="30%"/>
                    </Flex>
                </Flex>
            </Flex>
            <SecondBigImage/>
        </>
    );
}

export default SVRsectionOne;