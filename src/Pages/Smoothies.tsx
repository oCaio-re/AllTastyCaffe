import Header from "../Components/Header/Header.tsx";
import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import SMTsectionOne from "../Components/SMTsectionOne/SMTsectionOne.tsx";

function BerryAcai() {
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
                    <SMTsectionOne/>
                    <Box h="10vh" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default BerryAcai;