import {Box, Flex, Text} from "@chakra-ui/react";

function CTsectionTwo() {
    const textWrapSx = {
        // background: "white",
        width: "40%",
        justifyContent: "center",
        margin: "0 auto 1em auto",
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "3em",
        color: "#EF9540",
    }
    return (
        <>
            <Flex sx={textWrapSx}>
                <Text textAlign="center">Location</Text>
            </Flex>
            <Box className="map-wrap"
                // width={{base: "100vw", md:"69%"}}
                //  backgroundColor="black"
            >
                <Box as="iframe"
                     ml={{base: "auto", md: "auto"}}
                     mr={{base: "auto", md: "auto"}}
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.3849834040516!2d-8.19633678537268!3d53.62887114404873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c3cacafa611d7%3A0x5017aa5cf6727f72!2sLocal%20Enterprise%20Office%20Roscommon!5e0!3m2!1spt-PT!2spt!4v1723833935204!5m2!1spt-PT!2spt"
                     width={{base: "20em", md: "69%"}}
                     height={{base: "10em", md: "450px"}}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="map"
                     className="map"
                     marginBottom={{base: "10px", md: "6em"}}
                >
                </Box>
            </Box>
        </>
    )
}

export default CTsectionTwo
