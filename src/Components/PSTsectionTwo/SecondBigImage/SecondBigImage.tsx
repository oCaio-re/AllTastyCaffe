import {Box, Flex} from "@chakra-ui/react";
import pastriesImg from "../../../../public/food/top-view-delicious-pastry-concept.jpg"

function SecondBigImage() {
    const imgWrapSx = {
        w: "100%",
        h: "50vh"
    }
    const imgSx = {
        objectFit: "cover",
        h: "100%",
        w: "80%",
        m: "auto",
        borderRadius: "40px"
    }
    return (
        <>
            <Flex as="section" className="image-wrap" sx={imgWrapSx}>
                <Box as="img" src={pastriesImg} sx={imgSx}/>
            </Flex>
        </>
    );
}

export default SecondBigImage;