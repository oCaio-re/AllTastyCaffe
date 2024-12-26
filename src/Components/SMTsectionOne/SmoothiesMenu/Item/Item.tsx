import {Flex, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface Props {
    image: string,
    title: string,
    titleSize?: string,
    imgProportion?: string,
    borderRadius?: string,
}


function Item(props: Props) {
    const variantsItem = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
                delay: 0.2,
            }
        },
        whileHover: {
            scale: 1.2,
            transition: {
                duration: 0.3,
                type: "tween",

            }
        }
    }
    const itemWrapSx = {
        // backgroundColor: "grey",
        h: "90%",
        w: {base: "90%"},
        flexDirection: "column",
        m: "auto"
    }
    const itemTitleSx = {
        m: "auto",
        // h: "5%",
        fontFamily: "Inter",
        fontSize: `${props.titleSize || "1.3em"}`,
        fontWeight: 700,
        color: "#0C6E5A",
    }
    const imgWrapSx = {
        // backgroundColor: "",
        h: "100%",
        w: "100%"
    }
    return (
        <>
            <motion.div whileInView="animate" initial="initial" whileHover="whileHover"
                        viewport={{once: true}} variants={variantsItem}
                        style={{backgroundColor: ""}}
            >
                <Flex className="item-wrap" sx={itemWrapSx}>
                    <Flex className="img-wrap" sx={imgWrapSx}>
                        <motion.img src={props.image} alt="item picture" style={{objectFit: "contain", borderRadius: `${props.borderRadius}`}}/>
                    </Flex>
                    <Flex className="title-wrap" sx={itemTitleSx}>
                        <Text className="item-tile">{props.title}</Text>
                    </Flex>
                </Flex>
            </motion.div>
        </>
    );
}

export default Item;