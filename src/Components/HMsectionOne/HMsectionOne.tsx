import {Box, Button, Flex} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import backgroundImage from "../../../public/flat-lay-coffee-ingredients-with-copy-space.jpg";
import NewCarousel from "./NewCarousel/NewCarousel.tsx";

function HMsectionOne() {
    const buttonSx = {
        fontFamily: "Inter",
        color: "white",
        backgroundColor: "#0C6E5A",
        position: "absolute",
        fontSize: "1.5em",
        w: "14rem",
        h: "4rem",
        ml: "auto",
        ":hover": {
            color: "#0C6E5A",
        }
    }
    const swiperWraperSx = {
        margin: "0 auto 0 auto",
        width: "100%",
        h: "100%",
        backgroundColor: "",
        position: "absolute",
    }
    return (
        <>
            <Flex height="90vh" w="100%" top="0" backgroundColor="" mb="-2em">
                <Box className="img-wrap" zIndex="0"
                     w="100vw" h="90vh" position="relative"
                >
                    <Flex sx={swiperWraperSx}>
                        <NewCarousel/>
                    </Flex>
                    <Box as="img" src={backgroundImage}
                         w="100vw" h="90vh" ml="auto" mr="auto"
                         objectFit="cover"
                         zIndex="1"
                    />
                </Box>
            </Flex>
            <NavLink to="/beverages"
                style={{ width: "11%", height: "4em", position: "relative",
                    margin: "auto", display: "flex", justifyContent: "center", backgroundColor: "grey"}}
            >
                <Button sx={buttonSx}>VIEW MENU</Button>
            </NavLink>
        </>
    );
}

export default HMsectionOne;