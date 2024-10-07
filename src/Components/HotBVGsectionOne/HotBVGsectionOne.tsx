import {Box, Flex} from "@chakra-ui/react";
import HotMenu from "./HotMenu/HotMenu.tsx";
import bvgs_colorful_img from "../../../public/beverages/hot/machine.jpg"

function HotBVGsectionOne() {
    const whiteBoardSx = {
        h: {base: "250em", md: "170em"},
        w: {base: "90%", md: "70%"},
        backgroundColor: "white",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
        flexDirection: "column",
    }
    const bvgsGridSx = {
        w: "100%",
        h: {base: "30em", md:"50em"},
        backgroundColor: "",
        mt: {base: "1em", md: "2em"},
    }
    return (
        <>
            <Flex className="outer-wrap" justifyContent="center">
                <Flex className="white-board" sx={whiteBoardSx}>
                    <Flex className="bvgs-grid" sx={bvgsGridSx}>
                        <Box as="img" src={bvgs_colorful_img} objectFit="cover" w="100%" />
                    </Flex>
                    <HotMenu/>
                </Flex>
            </Flex>
        </>
    );
}

export default HotBVGsectionOne;