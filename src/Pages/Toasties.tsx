import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import Header from "../Components/Header/Header.tsx";
import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import FDsectionTwo from "../Components/FDsectionTwo/FDsectionTwo.tsx";

function Toasties() {
    return (
        <>
            <Flex className="App" maxW="100vw"
                  overflow="hidden"
                  flexDirection="column"
            >
                <ScrollToTop/>
                <Header/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                      backgroundAttachment="fixed">
                    <Box h={{md: "150px"}} w="100%"/>
                    <FDsectionTwo/>
                    <Box h="150px" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Toasties;