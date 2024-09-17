import {Flex} from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar.tsx";
import NavBar from "./NavBar/NavBar.tsx";

function Header() {
    const headerSx = {
        backgroundColor: "rgba(154,154,154,0.13)",
        h: "77px",
    }
    return (
        <>
            <TopBar/>
            <Flex className="header" sx={headerSx} boxShadow="-4px 5px 5px silver">
                {/*<Box as="image" src={logo}/>*/}
                <NavBar/>
            </Flex>
        </>
    );
}

export default Header;