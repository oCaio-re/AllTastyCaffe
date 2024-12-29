import {Box, Flex, Text} from "@chakra-ui/react";
import ViewMenusBar from "./ViewMenusBar/ViewMenusBar.tsx";
import icedTeaImg from "../../../public/iced_tea.png"
import smoothieImg from "../../../public/smootie_strawberry.png"
import lemonadeImg from "../../../public/lemonade.png"
import { motion } from "framer-motion";

function HMsectionTwo() {
    const variantsIcedTea = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2,
                delay: 0.2
            }
        },
        whileHover: {
            scale: 1.1,
        }
    }
    const variantsSmoothie = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.2
            }
        }
    }
    const variantsLemonade = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: 0.2
            }
        },
    }
    const sectionWrapSx = {
        // backgroundColor: "red",
        height: {base: "70vh", md: "90vh"},
        margin: {base: "0", md: "12em 0"},
        // mt: {base: "2em", md: "15em"},
        // mb: {base: "2em", md: "10em"},
        flexDirection: "column",
    }
    const contentWrapSx = {
        // backgroundColor: "red",
        w: {base: "80%", md: "1320px"},
        h: {base: "25em",md: "80%"},
        m: "0 auto 0 auto",
        justifyContent: "center",
    }
    const titleSWrapSx = {
        h: "25%",
        backgroundColor: "",
        flexDirection: "column",
    }
    const beverageContentSx = {
        // backgroundColor: "red",
        w: {base: "32%", md:"33.3333%"},
        h: {base: "100%", md: "auto"},
        m: "0 auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
    }
    const imgWrapSx = {
        h: "90%",
        objectFit: "cover",
        // backgroundColor: "green",
        // m: "auto",
        "filter": "drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))"
    }
    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="content-wrap" flexDirection="column" sx={contentWrapSx}>
                <Flex className="titleS-wrap" sx={titleSWrapSx}>
                    <Flex className="title-wrap" backgroundColor="" h="50%" w="100%"
                        filter="drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))"
                    >
                        <Text m="auto" fontFamily="Inknut Antiqua"
                              fontSize={{base: "1.3em", md:"3em"}}
                              whiteSpace="nowrap"
                        >
                            A ROSCOMMON ORIGINAL
                        </Text>
                    </Flex>
                    <Flex className="undertitle-wrap" h="50%" w="100%" backgroundColor=""
                          filter="drop-shadow(-4px 4px 4px rgba(77, 76, 76, 0.2))" color="#0C6E5A"
                    >
                        <Text m="auto" fontFamily="Ingrid Darling" fontSize={{base: "2.5em", md:"4em"}} whiteSpace="nowrap" >
                            A few of our favorites...
                        </Text>
                    </Flex>
                </Flex>

                <Flex className="images-wrap" h="75%" justifyContent="center">
                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <motion.div whileHover="whileHover" style={{height: "90%", width: "auto"}} whileInView="animate"
                            variants={variantsIcedTea} initial="initial" viewport={{once: true}}
                        >
                            <Box as="img" sx={imgWrapSx} src={icedTeaImg}/>
                        </motion.div>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize={{md: "1.3em"}} fontWeight="bold">LIPTON ICED TEA</Text>
                        </Box>
                    </Flex>

                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >
                        <motion.div whileHover={{scale: 1.1}} style={{height: "90%", width: "auto"}} whileInView="animate"
                                    variants={variantsSmoothie} initial="initial" viewport={{once: true}}
                        >
                            <Box as="img" sx={imgWrapSx} src={smoothieImg}/>
                        </motion.div>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize={{md: "1.3em"}} fontWeight="bold">
                                STRAWBERRY SMOOTHIE
                            </Text>
                        </Box>
                    </Flex>

                    <Flex className="beverage-image-wrap" flexDirection="column" sx={beverageContentSx}
                          backgroundColor=""
                    >

                        <motion.div whileHover={{scale: 1.1}} style={{height: "90%", width: "auto"}} whileInView="animate"
                                    variants={variantsLemonade} initial="initial" viewport={{once: true}}
                        >
                            <Box as="img" sx={imgWrapSx} src={lemonadeImg}/>
                        </motion.div>
                        <Box className="beverage-name-wrap" m="auto">
                            <Text fontFamily="Istok Web" fontSize={{md: "1.3em"}} fontWeight="bold">FRESH LEMONADE</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <ViewMenusBar/>
        </Flex>
    );
}

export default HMsectionTwo;