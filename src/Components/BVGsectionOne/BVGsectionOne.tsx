import {Box, Flex} from "@chakra-ui/react";
import Menu from "./Menu/Menu.tsx";

function BvGsectionOne() {
    const whiteBoardSx = {
        h: "170vh",
        w: "70%",
        backgroundColor: "white",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
        flexDirection: "column",
    }
    const bvgsGridSx = {
        w: "100%",
        h: "30%",
        backgroundColor: "grey",
    }
    return (
        <>
            <Flex className="outer-wrap" justifyContent="center">
                <Flex className="white-board" sx={whiteBoardSx}>
                    <Flex className="bvgs-grid" sx={bvgsGridSx}>
                        <Box as="img"/>
                    </Flex>
                    <Menu/>
                </Flex>
            </Flex>
        </>
    );
}

export default BvGsectionOne;