import {Box, Flex} from "@chakra-ui/react";
// import {NavLink} from "react-router-dom";
import backgroundImage from "../../../public/flat-lay-coffee-ingredients-with-copy-space.jpg";
import NewCarousel from "./NewCarousel/NewCarousel.tsx";

function HMsectionOne() {
    // const buttonSx = {
    //     fontFamily: "Inter",
    //     color: "white",
    //     backgroundColor: "#0C6E5A",
    //     position: "absolute",
    //     fontSize: "1.5em",
    //     w: "14rem",
    //     h: "4rem",
    //     ml: "auto",
    //     ":hover": {
    //         color: "#0C6E5A",
    //     }
    // }
    const sectionWrapSx = {
        // backgroundColor: "red",
        height: {base: "70vh", md: "90vh"},
        top: {base: "0", md: "0"},
        margin: {base: "0", md: "0 0 -2em 0"},
    }
    const swiperWraperSx = {
        // backgroundColor: "red",
        alignItems: "center",
        // margin: "0 auto 0 auto",
        width: "100%",
        height: {base: "60vh", md: "80vh"},
        position: "absolute",
    }
    // const backgroundImageSx = {
    //     width: {base: "100vw", md: "100vw"},
    //     height: {base: "60vh", md: "90vh"},
    //     margin: {base: "0", md: "0 auto"},
    //     objectFit: {base: "cover", md: "cover"},
    //     zIndex: "1"
    // }
    return (
        <>
            <Flex height="90vh" w="100%" top="0" backgroundColor="" mb="-2em" sx={sectionWrapSx}>
                <Box className="img-wrap" zIndex="0"
                     w="100vw" h="90vh" position="relative"
                >
                    <Flex sx={swiperWraperSx} backgroundImage={backgroundImage}>
                        <NewCarousel/>
                    </Flex>
                    {/*<Box as="img" src={backgroundImage} sx={backgroundImageSx}/>*/}
                </Box>
            </Flex>
            {/*<NavLink to="/beverages"*/}
            {/*    style={{ width: "11%", height: "4em", position: "relative",*/}
            {/*        margin: "auto", display: "flex", justifyContent: "center", backgroundColor: ""}}*/}
            {/*>*/}
            {/*    <Button sx={buttonSx}>VIEW MENU</Button>*/}
            {/*</NavLink>*/}
        </>
    );
}

export default HMsectionOne;