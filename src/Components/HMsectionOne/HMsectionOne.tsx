import Carousell from "./Carousell/Carousell.tsx";
import {Button, Flex} from "@chakra-ui/react";

function HMsectionOne() {
    const buttonSx = {
        fontFamily: "Inter",
        color: "white",
        backgroundColor: "#0C6E5A",
        position: "absolute",
        fontSize: "1.5em",
        w: "14rem",
        h: "4rem",
        m: "auto",
        ":hover": {
            color: "#0C6E5A",
        }
    }
    const buttonWrapSx = {
        position: "relative",
        backgroundColor: "",
        w: "15%",
        h: "4em",
        m: "auto",
        justifyContent: "center",
    }
    return (
        <>
            <Carousell/>
            <Flex sx={buttonWrapSx}>
                <Button sx={buttonSx}>VIEW MENU</Button>
            </Flex>
        </>
    );
}

export default HMsectionOne;