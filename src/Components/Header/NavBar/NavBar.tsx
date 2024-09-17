import {Box, Button, Flex} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import logo from "../../../../public/AT_logo.svg"
import "./NavBar.css"

function NavBar() {
    const outerWrapSx = {
        h: "40px",
        width: "70%",
        m: "auto",
    }
    const navBarWrapSx = {
        ml:"auto",
        mt:"auto",
        mb:"auto",
        fontFamily: "Istok Web",
        fontSize: "1.3em",
        gap: "40px",
        color: "grey",
        // backgroundColor: "grey",
    }
    const visitUsButton = {
        w: "160px",
        backgroundColor: "#0C6E5A",
        color: "white",
        fontFamily: "Inter",
        fontSize: "1.3em",
        ml: "3em",
        borderRadius: "5px",
        border: "none",
        ":active": {
            // backgroundColor: "rgba(12,110,90,0.57)",
            backgroundColor: "red",
            transitionDuration: "0.2s",
        },
        boxShadow: "-4px 5px 5px silver",
        ":hover": {
            backgroundColor: "rgba(10,87,71,0.79)",
            transitionDuration: "0.2s",
        }
    }
    const imgWrapSx = {
        w: "7%",
        // backgroundColor: "red",
        position: "absolute",
        "filter": "drop-shadow(0px 2px 2px rgba(77, 76, 76, 0.5))"
    }
    return (
        <Flex className="outerwrap" sx={outerWrapSx}>
            <Box className="img-wrap" sx={imgWrapSx}>
                <Box as="img" src={logo} width="100%"/>
            </Box>
            <Flex className="nav-bar-wrap" sx={navBarWrapSx}>
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/" className="nav-item">Beverages</NavLink>
                <NavLink to="/" className="nav-item">Berry Acai</NavLink>
                <NavLink to="/" className="nav-item" >Pastries</NavLink>
                <NavLink to="/" className="nav-item" >Sandwiches</NavLink>
                <NavLink to="/" className="nav-item" >About Us</NavLink>
            </Flex>
            <Button className="visit-us-button" sx={visitUsButton}>Visit Us</Button>
        </Flex>
    )
}

export default NavBar;