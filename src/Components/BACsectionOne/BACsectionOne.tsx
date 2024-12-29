import {Flex} from "@chakra-ui/react";
import BACmenu from "./BACmenu/BACmenu.tsx";
// import acaiViewTopImg from "../../../public/berry-acai/acai-view-top.jpg";
import HealthInfo from "./HealthInfo/HealthInfo.tsx";

function BaCsectionOne() {
    const whiteBoardSx = {
        h: {base: "125em", md: "80rem"},
        w: {base: "90%", md: "1320px"},
        backgroundColor: "white",
        boxShadow: "-2px 8px 8px rgba(77, 76, 76, 0.1)",
        flexDirection: "column",
        m: "0 auto 0 auto"
    }
    return (
        <>
            <Flex className="outer-wrap" justifyContent="center" flexDirection="column">
                <Flex className="white-board" sx={whiteBoardSx}>
                    <BACmenu/>
                </Flex>
            </Flex>
            <HealthInfo/>
        </>
    )
}

export default BaCsectionOne;

