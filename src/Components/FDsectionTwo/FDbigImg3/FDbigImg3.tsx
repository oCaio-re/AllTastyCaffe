import {Box, Flex} from "@chakra-ui/react";
import hotMealImg from "../../../../public/food/hot-meal.jpg"

function FDbigImg3() {
    const imgWrapSx = {
        w: "100%",
        h: {base: "15em", md: "30em"},
        m: {base: "0em 0em 0em 0em", md: "0em"}
    }
    const imgSx = {
        objectFit: "cover",
        h: "100%",
        w: {base: "95%", md:"80%"},
        m: "auto",
        borderRadius: "40px"
    }
    return (
        <>
            <Flex as="section" className="image-wrap" sx={imgWrapSx}>
                <Box as="img" src={hotMealImg} sx={imgSx}/>
            </Flex>
        </>
    );
}

export default FDbigImg3;