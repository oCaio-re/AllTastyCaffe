import {Box, Flex} from "@chakra-ui/react";
import hSandwichImg from "../../../../public/food/sandwich-horizontal.jpg"

function FDbigImg2() {
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
                <Box as="img" src={hSandwichImg} sx={imgSx}/>
            </Flex>
        </>
    );
}

export default FDbigImg2;