import {Box, Flex} from "@chakra-ui/react";
import Menu from "./Menu/Menu.tsx";
import bvgs_colorful_img from "../../../public/beverages/beverages_color.png"

function BVGsectionOne() {
    const whiteBoardSx = {
        h: {base: "250em", md: "120em"},
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
                    <Menu/>
                </Flex>
            </Flex>
        </>
    );
}

export default BVGsectionOne;