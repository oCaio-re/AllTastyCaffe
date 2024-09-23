import {Box, Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import BVGsectionOne from "../Components/BVGsectionOne/BVGsectionOne.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";

function Beverages() {
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
                      backgroundAttachment="fixed">
                    <BVGsectionOne/>
                    <Box h="10vh" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Beverages;