import {Box, Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import { motion } from "framer-motion";
import CTsectionOne from "../Components/CTsectionOne/CTsectionOne.tsx";
import CTsectionTwo from "../Components/CTsectionTwo/CTsectionTwo.tsx";

function Contact() {
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
                <Box height="114px"/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                      backgroundAttachment="fixed">
                    <CTsectionOne/>
                    <CTsectionTwo/>
                    <Footer/>
                </Flex>
            </motion.div>
        </>
    );
}

export default Contact;