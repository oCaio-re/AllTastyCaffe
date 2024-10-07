import {Box, Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
import HotBVGsectionOne from "../Components/HotBVGsectionOne/HotBVGsectionOne.tsx";

function HotBeverages() {
    return (
        <>
            <Flex className="App" maxW="100vw"
                  overflow="hidden"
                  flexDirection="column"
            >
                <ScrollToTop/>
                <Box h="110px" w="100vw"/>
                <Header/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                      backgroundAttachment="fixed"
                >
                    <HotBVGsectionOne/>
                    <Box h={{base: "10em", md: "300px"}} w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default HotBeverages;