import {Box, Button, Flex, Show} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import logo from "../../../../public/AT_logo.svg"
import "./NavBar.css"
import DropDownMobile from "../DropDownMobile/DropDownMobile.tsx";

function NavBar() {
    const outerWrapSx = {
        h: {base: "100%", md: "40px"},
        width: {base: "90%", md:"70%"},
        m: {base: "auto", md: "auto"},
        // backgroundColor: "grey",
    }
    const navBarWrapSx = {
        m: "auto 0 auto auto",
        // fontFamily: "Istok Web",
        fontSize: "1.3em",
        gap: "40px",
        color: "grey",
        // backgroundColor: "grey",
    }
    const visitUsButton = {
        w: {base: "4rem", md: "160px"},
        backgroundColor: "#0C6E5A",
        color: "white",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: {base: "0.9em", md:"1.3em"},
        m: {base: "auto", md: "0 0 0 3em"},
        borderRadius: "5px",
        border: "none",
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.4)",
        ":hover": {
            // backgroundColor: "rgba(10,87,71,0.79)",
            // transitionDuration: "0.2s",
            color: "#0C6E5A",

        }
    }
    const imgWrapSx = {
        w: {base: "5em", md: "7%"},
        h: {base: "5em", md: "7%"},
        m: {base: "auto", md: "0 0 0 0"},
        // backgroundColor: "",
        position: {base: "relative", md: "absolute"},
        "filter": "drop-shadow(0px 2px 2px rgba(77, 76, 76, 0.5))",
        zIndex: "20",
    }
    return (
        <>
            <Flex className="outerwrap" sx={outerWrapSx}>
                <Box className="img-wrap" sx={imgWrapSx}>
                    <NavLink to={"/"}>
                        <Box as="img" src={logo} width="100%"/>
                    </NavLink>
                </Box>
                <Show above="lg">
                    <Flex className="nav-bar-wrap" sx={navBarWrapSx}>
                        <NavLink to="/" className="nav-item">Home</NavLink>
                        <NavLink to="/beverages" className="nav-item">Beverages</NavLink>
                        <NavLink to="/berry-acai" className="nav-item-acai">Berry Acai</NavLink>
                        <NavLink to="/pastries" className="nav-item">Pastries & Savouries</NavLink>
                        <NavLink to="/food" className="nav-item">Food</NavLink>
                        <NavLink to="/about-us" className="nav-item">About</NavLink>
                    </Flex>
                </Show>
                <Show below="lg">
                    <DropDownMobile/>
                </Show>
                <Button className="visit-us-button" sx={visitUsButton}>Visit Us</Button>
            </Flex>
        </>
    )
}

export default NavBar;