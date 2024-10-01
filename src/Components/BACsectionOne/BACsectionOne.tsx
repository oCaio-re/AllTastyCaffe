import {Box, Flex} from "@chakra-ui/react";
import BACmenu from "./BACmenu/BACmenu.tsx";
import acaiViewTopImg from "../../../public/berry-acai/acai-view-top.jpg";
import HealthInfo from "./HealthInfo/HealthInfo.tsx";

function BaCsectionOne() {
    const whiteBoardSx = {
        h: {base: "150em", md: "130em"},
        w: {base: "90%", md: "80%"},
        backgroundColor: "white",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
        flexDirection: "column",
        m: "0 auto 0 auto"
    }
    const bvgsGridSx = {
        w: {base: "100%", md: "70%"},
        // h: "30%",
        m: "auto",
        backgroundColor: "",
        mt: {md: "8em"},
    }
    return (
        <>
            <Flex className="outer-wrap" justifyContent="center" flexDirection="column">
                <Flex className="white-board" sx={whiteBoardSx}>
                    <Flex className="bvgs-grid" sx={bvgsGridSx} >
                        <Box as="img" src={acaiViewTopImg} objectFit="cover" w="100%"/>
                    </Flex>
                    <BACmenu/>
                </Flex>
                <HealthInfo/>
            </Flex>
        </>
    )
}

export default BaCsectionOne;