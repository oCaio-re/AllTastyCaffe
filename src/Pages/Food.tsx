import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import Header from "../Components/Header/Header.tsx";
import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import FDsectionOne from "../Components/FDsectionOne/FDsectionOne.tsx";
import FDsectionTwo from "../Components/FDsectionTwo/FDsectionTwo.tsx";

function Food() {
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
                    <Box h="150px" w="100%"/>
                    <FDsectionOne/>
                    <FDsectionTwo/>
                    <Box h="150px" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Food;