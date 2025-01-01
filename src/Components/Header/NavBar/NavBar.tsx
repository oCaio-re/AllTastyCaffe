import {Box, Button, Flex, Show} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
// import DropDownMobile from "../DropDownMobile/DropDownMobile.tsx";
import DropDownHover from "./DropDownHover/DropDownHover.tsx";
import logo from "../../../../public/AT_logo.png"
import "./NavBar.css"
import SubDropDown from "../DropDownMobile/SubDropDown/SubDropDown.tsx";

function NavBar() {
    const outerWrapSx = {
        // backgroundColor: "orange",
        padding: {base: "20px 0", md: "0"},
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
        width: {base: "5rem", md: "160px"},
        height: {base: "auto", md: "auto"},
        padding: {base: "10px 20px", md: "10px"},
        backgroundColor: "#0C6E5A",
        color: "white",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: {base: "0.9em", md: "1.3em"},
        margin: {base: "auto", md: "0 0 0 auto"},
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
    // const dropFood: { name: string; link: string }[] = [
    //     {name: "Sandwiches", link: "/sandwiches"},
    //     {name: "Toasties", link: "/toasties"}
    // ]
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
                        <Box className="nav-item-wrap" sx={nav_item_wrap} color="#000000FF"
                             _hover={{color: "rgb(74,12,110)", transition: "0.3s"}}>
                            <NavLink to="/berry-acai" style={{whiteSpace: "nowrap"}}>Berry Acai</NavLink>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <DropDownHover title={"Pastries & Savouries"} items={dropPS}/>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <NavLink to="/food" className="nav-item">Food</NavLink>
                        </Box>
                        <Box className="nav-item-wrap" sx={nav_item_wrap}>
                            <DropDownHover title={"About"} items={dropAbout}/>
                        </Box>
                    </Flex>
                </Show>
                {/*<Show below="lg">*/}
                {/*    <DropDownMobile/>*/}
                {/*</Show>*/}
                <Show below="lg">
                    <SubDropDown/>
                </Show>
                <NavLink className="visit-button-link" to={"/contact"} style={{display: "flex"}}>
                    <Button className="visit-us-button" sx={visitUsButton}>Visit Us</Button>
                </NavLink>
            </Flex>
        </>
    )
}

export default NavBar;