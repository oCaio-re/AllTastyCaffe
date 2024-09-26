// import {NavLink} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import NewCarousel from "../Components/HMsectionOne/NewCarousel/NewCarousel.tsx";

function Blank() {
    // const buttonSx = {
    //     fontFamily: "Inter",
    //     color: "white",
    //     backgroundColor: "#0C6E5A",
    //     position: "absolute",
    //     fontSize: "1.5em",
    //     w: "14rem",
    //     h: "4rem",
    //     ml: "auto",
    //     ":hover": {
    //         color: "#0C6E5A",
    //     }
    // }
    return (
        <>
            <Box className="App" maxW="100vw"
                 overflow="hidden"
            >
                {/*<Carousel/>*/}
                <NewCarousel/>
                {/*<NavLink to="/beverages"*/}
                {/*         style={{ width: "15%", height: "4em", position: "relative",*/}
                {/*             margin: "auto", display: "flex", justifyContent: "center"}}*/}
                {/*>*/}
                {/*    <Button sx={buttonSx}>VIEW MENU</Button>*/}
                {/*</NavLink>*/}
            </Box>
        </>
    );
}

export default Blank;