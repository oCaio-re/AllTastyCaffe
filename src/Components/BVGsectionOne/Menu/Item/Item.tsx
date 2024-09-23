import {Flex, Text} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
    image: string,
    title: string,
    titleSize?: string,
    imgProportion?: string,
}

const imgWrapSx = {
    h: "100%",
    w: "100%",
    justifyContent: "center"
}
const itemTitleSx = {
    m: "auto",
    // h: "5%",
    fontFamily: "Inter",
    fontSize: "1.2em",
    fontWeight: 700,
    color: "#0C6E5A",
}
function Item(props: Props) {
    const itemWrapSx = {
        backgroundColor: "",
        h: "90%",
        w: `${props.imgProportion}`,
        flexDirection: "column",
    }
    const variantsLemonade = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
                delay: 0.2
            }
        },
    }
    return (
        <>
            <Flex className="item-wrap" sx={itemWrapSx} >
                <Flex className="img-wrap" sx={imgWrapSx}>
                    <motion.img src={props.image} alt="item picture" style={{objectFit: "cover"}}
                                whileHover={{scale: 1.1}} whileInView="animate" initial="initial"
                                viewport={{once: true}} variants={variantsLemonade}
                    />
                </Flex>
                <Flex className="title-wrap" sx={itemTitleSx}>
                    <Text className="item-tile">{props.title}</Text>
                </Flex>
            </Flex>
        </>
);
}

export default Item;