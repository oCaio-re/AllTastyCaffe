import {Box, Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
import HotBVGsectionOne from "../Components/HotBVGsectionOne/HotBVGsectionOne.tsx";
import { motion } from "framer-motion";

function HotBeverages() {
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
                <Box h="110px" w="100vw"/>
                <Header/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                      backgroundAttachment="fixed"
                >
                    <HotBVGsectionOne/>
                    <Box h={{base: "10em", md: "300px"}} w="100%"/>
                    <Footer/>
                </Flex>
            </motion.div>
        </>
    );
}

export default HotBeverages;