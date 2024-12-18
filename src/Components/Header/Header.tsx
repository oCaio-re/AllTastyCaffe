import {Flex} from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar.tsx";
import NavBar from "./NavBar/NavBar.tsx";
import {motion} from "framer-motion";

function Header() {
    const headerSx = {
        backgroundColor: "white",
        height: {base: "83px", md: "77px"},
        boxShadow: "-8px 4px 4px rgba(77, 76, 76, 0.2)",
        zIndex: "200",
        position: {md: "fixed"},
        width: "100%",
        mt: {base: "0em", md: "2.2em"},
        mb: "auto",
        top: "0"
    }
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
            <motion.div className="header-outer" variants={fadeInAnimationVariants} whileInView="animate"
                        viewport={{once: true}} style={{position: "fixed", zIndex: "200"}}
                        initial="initial"
            >
                <TopBar/>
                <Flex className="header" sx={headerSx}>
                    <NavBar/>
                </Flex>
            </motion.div>
        </>
    );
}

export default Header;