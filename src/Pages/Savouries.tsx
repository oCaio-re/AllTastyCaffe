import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import Header from "../Components/Header/Header.tsx";
import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import PSTsectionTwo from "../Components/SVRsectionOne/SVRsectionOne.tsx";
import SecondBigImage from "../Components/SVRsectionOne/SecondBigImage/SecondBigImage.tsx";

function Savouries() {
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
                    <Box h={{md: "6em"}} w="100%"/>
                    <PSTsectionTwo/>
                    <SecondBigImage/>
                    <Box h="10em" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Savouries;