import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import Header from "../Components/Header/Header.tsx";
import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import PSTsectionOne from "../Components/PSTsectionOne/PSTsectionOne.tsx";
import FirstBigImage from "../Components/PSTsectionOne/FirstBigImage/FirstBigImage.tsx";
import PSTsectionTwo from "../Components/PSTsectionTwo/PSTsectionTwo.tsx";
import SecondBigImage from "../Components/PSTsectionTwo/SecondBigImage/SecondBigImage.tsx";

function Pastries() {
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
                    <PSTsectionOne/>
                    <FirstBigImage/>
                    <PSTsectionTwo/>
                    <SecondBigImage/>
                    <Box h="10em" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Pastries;