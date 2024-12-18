import {Box, Flex, Show, Text} from "@chakra-ui/react";
import friendsCoffeImg from "../../../public/friends-drinking-coffee.jpg"
import backgroundSvg from "../../../public/hm_secThree_bg.svg"
import {motion} from "framer-motion";
import HMsectionFour from "../HMsectionFour/HMsectionFour.tsx";

function HMsectionThree() {
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
    const desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna lacus.\n" +
        "Vestibulum\n" +
        "vehicula lacus consequat est dignissim volutpat. Ut maximus eros a eros\n" +
        "bibendum, sed\n" +
        "iaculis felis consectetur. Fusce non enim urna. Phasellus vel neque sagittis,\n" +
        "rutrum\n" +
        "nulla ut, consequat massa. Aliquam pellentesque commodo nisl, et ultricies felis\n" +
        "efficitur vel. Pellentesque vehicula neque justo, ut mattis urna ullamcorper\n" +
        "feugiat.\n" +
        "Aenean vel felis ac elit scelerisque lacinia. Etiam ornare quis tortor non\n" +
        "tincidunt."
    const sectionWrapSx = {
        // backgroundColor: "red",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        h: {base: "50em", md: "auto"},
        mb: {base: "2em", md: "6em"},
    }
    const outerWrapSx = {
        // backgroundColor: "",
        h: {base: "85%", md: "760px"},
        w: {base: "100%", md: "1320px"},
        zIndex: "20"
    }
    const textContentWrapSx = {
        // backgroundColor: "",
        flexDirection: {base: "auto", md: "column"},
        w: "80%",
        h: "75%",
        m: {base: "4em auto auto auto", md: "12em auto auto auto"},
    }
    const friendsCoffeImgSx = {
        // backgroundColor: "red",
        width: "100%",
    }

    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Show above="lg">
                <Flex className="background-wrap" position="absolute">
                    <Box as="img" src={backgroundSvg}/>
                </Flex>
            </Show>
            <Show below="lg">
                <Box h="100%" w="100%" backgroundColor="#0C6E5A" position="absolute"/>
            </Show>
            <Flex className="outer-wrap" sx={outerWrapSx}>
                <Flex className="left-content" w={{base: "50%", md: "50%"}} backgroundColor="">
                    <Flex className="text-content-wrap" sx={textContentWrapSx}>
                        <motion.div style={{height: "90%"}} whileInView="animate" variants={weOpenVariants}
                                    initial="initial" viewport={{once: true}}
                        >
                            <Flex className="title-wrap" h="25%" backgroundColor="" justifyContent="center">
                                <Text className="title-wrap" backgroundColor="" fontSize={{base: "6em", md: "7em"}}
                                      color="white" fontFamily="Italianno" w={{base: "100%", md: "80%"}}
                                      whiteSpace="nowrap"
                                >
                                    We are open!
                                </Text>
                            </Flex>
                            <Flex className="desc-wrap" mt={{base: "1em", md: "2em"}} h={{base: "100%"}}
                                  overflow="hidden"
                            >
                                <Flex backgroundColor="" mt="2em">
                                    <Text className="desc-wrap" fontFamily="Inter" color="white" fontSize="1em"
                                          textAlign={{base: "center", md: "left"}}
                                    >
                                        {desc}
                                    </Text>
                                </Flex>
                            </Flex>
                        </motion.div>
                    </Flex>
                </Flex>
                <Flex className="right-content" w={{base: "100%", md: "50%"}} backgroundColor=""
                      m={{base: "35em 0 0 0", md: "0"}} position={{base: "absolute", md: "relative"}}
                >
                    <motion.div style={{height: "90%"}} whileInView="animate" variants={weOpenImgVariants}
                                initial="initial" viewport={{once: true}}
                    >
                        <Box as="img" src={friendsCoffeImg} objectFit="cover" w="100%" h={{base: "80%", md: "100%"}}
                             boxShadow="-8px 8px 8px rgba(77, 76, 76, 0.4)" sx={friendsCoffeImgSx}/>
                    </motion.div>
                </Flex>
            </Flex>
            <HMsectionFour/>
        </Flex>
);
}

export default HMsectionThree;