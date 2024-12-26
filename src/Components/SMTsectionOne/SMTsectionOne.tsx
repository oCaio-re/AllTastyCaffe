import {Box, Flex} from "@chakra-ui/react";
import SmoothiesMenu from "./SmoothiesMenu/SmoothiesMenu.tsx";
import smtImage from "../../../public/beverages/cold/smoothies cover.jpg"

function SMTsectionOne() {
    const whiteBoardSx = {
        h: {base: "250em", md: "170em"},
        w: {base: "90%", md: "70%"},
        backgroundColor: "white",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
        flexDirection: "column",
    }
    const bvgsGridSx = {
        w: "80%",
        h: {base: "30em", md:"40em"},
        backgroundColor: "",
        mt: {base: "1em", md: "2em"},
        m: {base: "1em auto 0 auto", md: "0.5em auto 0 auto"},
    }
    return (
        <>
            <Flex className="outer-wrap" justifyContent="center">
                <Flex className="white-board" sx={whiteBoardSx}>
                    <Box h="8em" w="100%"/>
                    <Flex className="bvgs-grid" sx={bvgsGridSx}>
                        <Box as="img" src={smtImage} objectFit="cover" w="100%"/>
                    </Flex>
                    <Box h="8em" w="100%"/>
                    <SmoothiesMenu/>
                </Flex>
            </Flex>
        </>
    );
}

export default SMTsectionOne;