import {Box, Flex, Image} from "@chakra-ui/react";
import backgroundImage from "../../../public/flat-lay-coffee-ingredients-with-copy-space.jpg";
import NewCarousel from "./NewCarousel/NewCarousel.tsx";

function HMsectionOne() {
    const sectionWrapSx = {
        // backgroundColor: "red",
        height: {base: "70vh", md: "90vh"},
        top: {base: "0", md: "0"},
        margin: {base: "0", md: "0 0 -2em 0"},
    }
    const swiperWraperSx = {
        // backgroundColor: "red",
        alignItems: "center",
        width: "100%",
        height: {base: "60vh", md: "80vh"},
        position: "absolute",
        backgroundPosition: "bottom",
        objectFit: "contain",
    }
    const backgroundSx = {
        position: "absolute",
        height: "100%",
        width: "100%",
        objectFit: "cover",
    }
    return (
        <>
            <Flex height="90vh" w="100%" top="0" backgroundColor="" mb="-2em" sx={sectionWrapSx}>
                <Box className="img-wrap" zIndex="0"
                     w="100vw" h="90vh" position="relative"
                >
                    <Flex sx={swiperWraperSx}>
                        <Image src={backgroundImage} alt="background-carrousel-image" sx={backgroundSx}/>
                        <NewCarousel/>
                    </Flex>
                </Box>
            </Flex>
        </>
    );
}

export default HMsectionOne;