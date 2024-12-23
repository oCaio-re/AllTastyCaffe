import {Box, Button, Flex, Show} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import DropDownMobile from "../DropDownMobile/DropDownMobile.tsx";
import DropDownHover from "./DropDownHover/DropDownHover.tsx";
import logo from "../../../../public/AT_logo.svg"
import "./NavBar.css"

function NavBar() {
    const outerWrapSx = {
        // backgroundColor: "orange",
        h: {base: "100%", md: "40px"},
        width: {base: "90%", md: "1320px"},
        m: {base: "auto", md: "auto"},
        justifyContent: "center",
    }
    const navBarWrapSx = {
        // backgroundColor: "red",
        width: "auto",
        m: "auto",
        fontSize: "1.3em",
        gap: "40px",
        color: "grey",
        justifyContent: "center",
    }
    const visitUsButton = {
        w: {base: "4rem", md: "160px"},
        backgroundColor: "#0C6E5A",
        color: "white",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: {base: "0.9em", md: "1.3em"},
        m: {base: "auto", md: "0 0 0 auto"},
        borderRadius: "5px",
        border: "none",
        boxShadow: "-4px 4px 4px rgba(77, 76, 76, 0.4)",
        ":hover": {
            color: "#0C6E5A",
        }
    }
    const imgWrapSx = {
        // backgroundColor: "blue",
        w: {base: "5em", md: "9em"},
        h: {base: "5em", md: "9em"},
        m: {base: "auto", md: "0 0 0 auto"},
        position: {base: "relative", md: "relative"},
        "filter": "drop-shadow(0px 2px 2px rgba(77, 76, 76, 0.5))",
        zIndex: "20",
    }

    const nav_item_wrap = {
        width: "auto",
        fontWeight: "500",
        fontFamily: "Inter",
        // color: "rgba(74,12,110,0.68)",
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
        {name: "Cold Drinks", link: "/cold-beverages"},
        {name: "Smoothies", link: "/smoothies"},
    ]
    const dropAbout: { name: string; link: string }[] = [
        {name: "About Us", link: "/about-us"},
        // {name: "Loyalty Program", link: "/about-us"},
        {name: "Loyalty Program", link: "https://squidloyalty.ie/for-customers/"},

    ]
    return (
        <>
            <Flex className="outerwrap" sx={outerWrapSx}>
                <NavLink to={"/"} style={{width: "auto", height: "auto"}}>
                    <Box className="img-wrap" sx={imgWrapSx}>
                        <Box as="img" src={logo} width="100%"/>
                    </Box>
                </NavLink>
                <Show above="lg">
                    <Flex className="nav-bar-wrap" sx={navBarWrapSx}>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <NavLink to="/" className="nav-item">Home</NavLink>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <DropDownHover title={"Beverages"} items={dropBVG}/>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap} color="rgba(74,12,110,0.68)"
                             _hover={{color: "rgb(74,12,110)", transition: "0.3s"}}>
                            <NavLink to="/berry-acai" style={{whiteSpace: "nowrap"}}>Berry Acai</NavLink>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <DropDownHover title={"Pastries & Savouries"} items={dropPS}/>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <DropDownHover title={"Food"} items={dropFood}/>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <DropDownHover title={"About"} items={dropAbout}/>
                        </Box>
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