import {Box, Flex, Text} from "@chakra-ui/react";
import friendsCoffeImg from "../../../public/friends-drinking-coffee.jpg"
import backgroundSvg from "../../../public/hm_secThree_bg.svg"
import { motion } from "framer-motion";

function HMsectionThree() {
    const sectionWrapSx = {
        // backgroundColor: "#0C6E5A",
        justifyContent: "center",
        position: "relative",
        h: "90vh",
        mb: "-5em",
        // mb: "2em",
    }
    const outerWrapSx = {
        backgroundColor: "",
        h: "85%",
        w: "70%",
        zIndex: "20"
    }
    const textContentWrapSx = {
        flexDirection: "column",
        backgroundColor: "",
        w: "80%",
        h: "75%",
        mb: "auto",
        ml: "auto",
        mr: "auto",
        mt: "12em",
    }
    const weOpenVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 0.4
            }
        }
    }
    const weOpenImgVariants = {
        initial: {
            x: 300,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.2
            }
        },
        whileHover: {
            scale: 1.1,
        }
    }
    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="background-wrap" position="absolute">
                <Box as="img" src={backgroundSvg}/>
            </Flex>
            <Flex className="outer-wrap" sx={outerWrapSx}>
                <Flex className="left-content"  w="50%" backgroundColor="">
                    <Flex className="text-content-wrap" sx={textContentWrapSx}>
                        <motion.div style={{height: "90%"}} whileInView="animate" variants={weOpenVariants}
                                    initial="initial" viewport={{once: true}}
                        >
                            <Flex className="title-wrap" h="25%" backgroundColor="" justifyContent="center">
                                <Text className="title-wrap" backgroundColor="" fontSize="7em"
                                      color="white" fontFamily="Italianno" w="80%" whiteSpace="nowrap"
                                >
                                    We are open!
                                </Text>
                            </Flex>
                            <Flex className="desc-wrap" mt="2em"
                                // p="30px"
                            >
                                <Flex backgroundColor="" mt="2em">
                                    <Text className="desc-wrap" fontFamily="Inter" color="white" fontSize="1em" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna lacus.
                                        Vestibulum
                                        vehicula lacus consequat est dignissim volutpat. Ut maximus eros a eros
                                        bibendum, sed
                                        iaculis felis consectetur. Fusce non enim urna. Phasellus vel neque sagittis,
                                        rutrum
                                        nulla ut, consequat massa. Aliquam pellentesque commodo nisl, et ultricies felis
                                        efficitur vel. Pellentesque vehicula neque justo, ut mattis urna ullamcorper
                                        feugiat.
                                        Aenean vel felis ac elit scelerisque lacinia. Etiam ornare quis tortor non
                                        tincidunt.
                                    </Text>
                                </Flex>
                            </Flex>
                        </motion.div>
                    </Flex>
                </Flex>
                <Flex className="right-content" w="50%">
                    <motion.div style={{height: "100%", backgroundColor: "grey"}} whileInView="animate"
                                variants={weOpenImgVariants} initial="initial" viewport={{once: true}}
                                whileHover="whileHover"
                    >
                        <Box as="img" src={friendsCoffeImg} objectFit="cover" w="100%" h="100%"
                             boxShadow="-8px 8px 8px rgba(77, 76, 76, 0.4)"/>
                    </motion.div>
                </Flex>
            </Flex>
        </Flex>
);
}

export default HMsectionThree;