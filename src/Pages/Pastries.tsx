import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import Header from "../Components/Header/Header.tsx";
import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import PSTsectionOne from "../Components/PSTsectionOne/PSTsectionOne.tsx";
import { motion } from "framer-motion";

function Pastries() {
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
                    <Box h={{md: "6em"}} w="100%"/>
                    <PSTsectionOne/>
                    <Box h="10em" w="100%"/>
                    <Footer/>
                </Flex>
            </motion.div>
        </>
    );
}

export default Pastries;