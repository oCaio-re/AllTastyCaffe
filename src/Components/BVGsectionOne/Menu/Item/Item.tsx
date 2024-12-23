import {Flex, Img, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface Props {
    image: string,
    title: string,
    titleSize?: string,
    height?: string,
    width?: string,
    borderRadius?: string,
}


function Item(props: Props) {
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
    const itemWrapSx = {
        backgroundColor: "",
        h: "80%",
        w: {base: "90%", md: `${props.width}`},
        flexDirection: "column",
        m: "auto"
    }
    const itemTitleSx = {
        justifyContent: "center",
        m: "auto",
        fontFamily: "Inter",
        fontSize: `${props.titleSize || "1.3em"}`,
        fontWeight: 700,
        color: "#0C6E5A",
    }
    const imgWrapSx = {
        // backgroundColor: "",
        h: `${props.height || "90%"}`,
        w: "100%"
    }
    const ItemImgSx = {
        borderRadius: `${props.borderRadius}`,
    }
    return (
        <>
            <Flex className="item-wrap" sx={itemWrapSx}>
                <motion.div whileHover={{scale: 1.1}} whileInView="animate" initial="initial"
                            viewport={{once: true}} variants={variantsLemonade}>
                    <Flex className="img-wrap" sx={imgWrapSx}>
                        <Img sx={ItemImgSx} src={props.image} alt="item picture"/>
                    </Flex>
                    <Flex className="title-wrap" sx={itemTitleSx}>
                        <Text className="item-tile" textAlign="center">{props.title}</Text>
                    </Flex>
                </motion.div>
            </Flex>
        </>
    );
}

export default Item;