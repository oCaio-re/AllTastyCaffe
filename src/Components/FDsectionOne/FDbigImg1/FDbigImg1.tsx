import {Box, Flex} from "@chakra-ui/react";
import sandwichesImg from "../../../../public/food/side-view-club-sandwich-with-ham-pickled-cucumber-lettuce-tomato-cheese-sauce-board.jpg"

function FDbigImg1() {
    const imgWrapSx = {
        w: "100%",
        h: {base: "15em", md: "30em"},
        m: {base: "3em 0em 3em 0em", md: "0em"}
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
                <Box as="img" src={sandwichesImg} sx={imgSx}/>
            </Flex>
        </>
    );
}

export default FDbigImg1;