import {Box, Flex, Text} from "@chakra-ui/react";
import dummy from "../../../public/coffe-on-a-table-center.jpg"
import {motion} from "framer-motion";

function HMsectionFour() {
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
    // const desc: string = "At All Tasty Cafe, we believe in providing more than just coffee. We're committed to " +
    //     "delivering a truly exceptional experience. Our friendly baristas are passionate about crafting the " +
    //     "perfect cup and ensuring you feel comfortable and valued."

    const sectionWrapSx = {
        // backgroundColor: "grey",
        height: "70vh",
        width: "100vw",
        margin: "3em auto 5em auto",
        zIndex: "14",
        mt: {base: "8rem", md: "0"}
    }
    const outerContentWrapSx = {
        // backgroundColor: "red",
        width: {base: "90%", md: "1320px"},
        height: "100%",
        margin: "auto",
        position: "relative",
        flexDirection: {base: "column", md: "row"},
    }
    const imgWrapSx = {
        width: {base: "100%", md: "60%"},
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.15)",
    }
    const textWrapSx = {
        // backgroundColor: "red",
        width: {base: "100%", md: "40%"},
        height: {base: "60em", md: "100%"},
        position: "relative",
        alignContent: "center",
    }
    const cardWrapSx = {
        // backgroundColor: "white",
        backgroundColor: "#ffffff",
        width: "100%",
        height: "80%",
        borderRadius: "20px",
        position: "absolute",
        alignSelf: "center",
        marginLeft: {base: "0em", md: "-5em"},
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.4)",
    }
    const contentWrapSx = {
        // backgroundColor: "grey",
        justifyContent: "center",
        width: "90%",
        height: "90%",
        margin: "auto",
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
                                <Text m="auto" fontFamily="Italianno" fontSize={{base: "3em", md: "4em"}}>
                                    Get Serviced!
                                </Text>
                            </Flex>
                            <Flex className="desc-wrap" p="20px" fontFamily="Inter"
                                  fontSize={{base: "1.7vh", md: "1.5em"}}>
                                <motion.div style={{height: "100%"}} whileInView="animate"
                                            variants={textVariants} initial="initial" viewport={{once: true}}
                                            whileHover="whileHover"
                                >
                                    <Text textAlign={{base: "justify", md: "justify"}}>
                                        At All Tasty Cafe, we believe in providing more than just coffee.<br/>
                                        We're committed to delivering a truly exceptional experience.<br/>
                                        Our friendly baristas are passionate about crafting the
                                        perfect cup and ensuring you feel comfortable and valued.
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

export default HMsectionFour;