import {Box, Flex} from "@chakra-ui/react";
import pastriesImg from "../../../../public/food/pastries-viewtop.jpg"


function FirstBigImage() {
    const imgWrapSx = {
        w: "100%",
        h: {base: "15em", md: "30em"}
    }
    const imgSx = {
        objectFit: "cover",
        h: "100%",
        w: {base: "95%", md:"100%"},
        m: "auto",
        // borderRadius: "40px"
    }
    return (
        <>
            <Flex as="section" className="image-wrap" sx={imgWrapSx}>
                <Box as="img" src={pastriesImg} sx={imgSx}/>
            </Flex>
        </>
    );
}

export default FirstBigImage;