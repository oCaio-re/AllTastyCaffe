import {Box, Button, Flex, Show} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import DropDownMobile from "../DropDownMobile/DropDownMobile.tsx";
import DropDownHover from "./DropDownHover/DropDownHover.tsx";
import logo from "../../../../public/AT_logo.svg"
import "./NavBar.css"

function NavBar() {
    const outerWrapSx = {
        h: {base: "100%", md: "40px"},
        width: {base: "90%", md:"70%"},
        m: {base: "auto", md: "auto"},
    }
    const navBarWrapSx = {
        m: "auto 0 auto auto",
        fontSize: "1.3em",
        gap: "40px",
        color: "grey",
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

    const dropFood: { name: string; link: string }[] = [
        {name: "Sandwiches", link: "/sandwiches"},
        {name: "Toasties", link: "/toasties"}
    ]
    const dropPS: { name: string; link: string }[] = [
        {name: "Pastries", link: "/pastries"},
        {name: "Savouries", link: "/savouries"}
    ]
    const dropBVG: { name: string; link: string }[] = [
        {name: "Hot Beverages", link: "/hot-beverages"},
        {name: "Cold Drinks", link: "/beverages"},
        {name: "Smoothies", link: "/smoothies"},
    ]
    const dropAbout: { name: string; link: string }[] = [
        {name: "About Us", link: "/about-us"},
        {name: "Loyalty Program", link: "/about-us"}
    ]
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
                        <DropDownHover title={"Beverages"} items={dropBVG}/>
                        <NavLink to="/berry-acai" className="nav-item-acai">Berry Acai</NavLink>
                        <DropDownHover title={"Pastries & Savouries"} items={dropPS}/>
                        <DropDownHover title={"Food"} items={dropFood}/>
                        <DropDownHover title={"About"} items={dropAbout}/>
                    </Flex>
                </Show>
                <Show below="lg">
                    <DropDownMobile/>
                </Show>
                <NavLink to={"/contact"}>
                    <Button className="visit-us-button" sx={visitUsButton}>Visit Us</Button>
                </NavLink>
            </Flex>
        </>
    )
}

export default NavBar;