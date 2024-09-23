import {Flex} from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar.tsx";
import NavBar from "./NavBar/NavBar.tsx";

function Header() {
    const headerSx = {
        backgroundColor: "white",
        h: "77px",
        boxShadow: "-8px 4px 4px rgba(77, 76, 76, 0.2)",
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