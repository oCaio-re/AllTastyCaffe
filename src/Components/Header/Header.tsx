import {Flex} from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar.tsx";
import NavBar from "./NavBar/NavBar.tsx";

function Header() {
    const headerSx = {
        backgroundColor: "white",
        h: "77px",
        boxShadow: "0px 5px 5px silver",
        zIndex: "200",
        position: "fixed",
        width: "100%",
        mt: "2.2em",
        mb: "auto",
        top: "0"
    }
    return (
        <>
            <TopBar/>
            <Flex className="header" sx={headerSx}>
                <NavBar/>
            </Flex>
        </>
    );
}

export default Header;