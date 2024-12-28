import {Flex} from "@chakra-ui/react";
import HotMenu from "./HotMenu/HotMenu.tsx";
// import bvgs_colorful_img from "../../../public/beverages/hot/machine.jpg"

function HotBVGsectionOne() {
    const whiteBoardSx = {
        h: {base: "190rem", md: "90rem"},
        w: {base: "90%", md: "70%"},
        backgroundColor: "white",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
        flexDirection: "column",
    }
    // const bvgsGridSx = {
    //     w: "80%",
    //     h: {base: "30em", md:"40em"},
    //     backgroundColor: "",
    //     m: {base: "1em auto 0 auto", md: "0.5em auto 0 auto"},
    // }
    return (
        <>
            <Flex className="outer-wrap" justifyContent="center">
                <Flex className="white-board" sx={whiteBoardSx}>
                    {/*<Flex className="bvgs-grid" sx={bvgsGridSx}>*/}
                    {/*    <Box as="img" src={bvgs_colorful_img} objectFit="cover" w="100%" />*/}
                    {/*</Flex>*/}
                    <HotMenu/>
                </Flex>
            </Flex>
        </>
    );
}

export default HotBVGsectionOne;