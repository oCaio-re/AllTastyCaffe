import {Box, Flex} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import AUsectionOne from "../Components/AUsectionOne/AUsectionOne.tsx";
import AUsectionTwo from "../Components/AUsectionTwo/AUsectionTwo.tsx";
import AUsectionThree from "../Components/AUsectionThree/AUsectionThree.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";

function AboutUs() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 0
        },
        animate: {
            // y: "-1em",
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: 0.1
            }
        }
    }
    return (
        <>
            <motion.div
                variants={fadeInAnimationVariants} whileInView="animate" viewport={{once: true}}
                initial="initial"
                className="App"
                style={{
                    maxWidth: "100vw",
                    overflow: "hidden",
                    flexDirection: "column",
                    display: "flex"
                }}
            >
                <ScrollToTop/>
                <Header/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                    backgroundAttachment="fixed">
                    <Box h={{base: "1em", md: "150px"}} w="100%"/>
                    <AUsectionOne/>
                    <AUsectionTwo/>
                    <AUsectionThree/>
                    <Box h="5em" w="100%"/>
                    <Footer/>
                </Flex>
            </motion.div>
        </>
    );
}

export default AboutUs;