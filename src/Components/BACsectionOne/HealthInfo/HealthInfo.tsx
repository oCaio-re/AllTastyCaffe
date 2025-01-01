import {Box, Flex, Text} from "@chakra-ui/react";
import dummy from "../../../../public/berry-acai/health-img.jpg"
import { motion } from "framer-motion";

function HealthInfo() {
    const textVariants = {
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
    const desc: string = "Acai berries are packed with antioxidants, which may help protect your cells from damage. They may also support heart health, boost brain function, and aid digestion. Enjoy acai in smoothies, bowls, or as a powder for a delicious and nutritious boost!"

    const sectionWrapSx = {
        // backgroundColor: "grey",
        h: "70vh",
        w: "100vw",
        mb: "5em",
        mt: {base: "5em", md: "10em"}
    }
    const outerContentWrapSx = {
        w: {base: "100%", md: "70%"},
        h: "100%",
        m: "auto",
        position: "relative",
        flexDirection: {base: "column", md: "row"},
        justifyContent: "center",
        // backgroundColor: "white",
    }
    const imgWrapSx = {
        w: {base: "100%", md:"60%"},
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.15)",
    }
    const textWrapSx = {
        // backgroundColor: "red",
        w: {base: "100%", md: "40%"},
        h: {base: "60em", md: "100%"},
        position: "relative",
        alignContent: "center",
    }
    const cardWrapSx = {
        backgroundColor: "#503068",
        width: {base: "100%", md: "100%"},
        height: "80%",
        padding: {base: "20px", md: "0"},
        borderRadius: {base: "40px 0", md: "80px 0"},
        position: "absolute",
        alignSelf: "center",
        margin: {base: "auto", md: "0 0 0 -5em"},
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.4)",
    }
    const contentWrapSx = {
        // backgroundColor: "grey",
        width: {base: "100%", md: "90%"},
        height: {base: "100%", md: "70%"},
        m: "auto",
        flexDirection: "column",
    }

    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="outer-content-wrap" sx={outerContentWrapSx}>

                <Flex className="img-wrap" sx={imgWrapSx}>
                    <Box as="img" src={dummy} objectFit="cover"/>
                </Flex>

                <Flex className="text-wrap" sx={textWrapSx}>
                    <Flex className="card-wrap" sx={cardWrapSx}>
                        <Flex className="content-wrap" sx={contentWrapSx}>
                            <Flex className="title-wrap" h="20%" backgroundColor="" color="#0C6E5A">
                                <Text m="auto" fontFamily="Italianno" fontSize={{base: "3.5em", md:"4.5em"}}
                                    fontWeight="500" color="white"
                                >
                                    More than a dish!
                                </Text>
                            </Flex>
                            <Flex className="desc-wrap" p="20px" fontFamily="Inter" fontSize={{base: "1rem", md: "1.2vw"}}
                                  margin={{base: "auto", md: "0"}}
                            >
                                <motion.div style={{height: "100%"}} whileInView="animate"
                                            variants={textVariants} initial="initial" viewport={{once: true}}
                                            whileHover="whileHover"
                                >
                                    <Text textAlign={{base: "justify", md: "justify"}} color="white" fontStyle="italic">
                                        {desc}
                                    </Text>
                                </motion.div>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    );
}

export default HealthInfo;