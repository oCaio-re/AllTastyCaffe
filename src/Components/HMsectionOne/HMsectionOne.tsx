import Carousell from "./Carousell/Carousell.tsx";
import {Button} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

function HMsectionOne() {
    const buttonSx = {
        fontFamily: "Inter",
        color: "white",
        backgroundColor: "#0C6E5A",
        position: "absolute",
        fontSize: "1.5em",
        w: "14rem",
        h: "4rem",
        ml: "auto",
        ":hover": {
            color: "#0C6E5A",
        }
    }
    return (
        <>
            <Carousell/>
            <NavLink to="/beverages"
                style={{ width: "15%", height: "4em", position: "relative",
                    margin: "auto", display: "flex", justifyContent: "center"}}
            >
                <Button sx={buttonSx}>VIEW MENU</Button>
            </NavLink>
        </>
    );
}

export default HMsectionOne;