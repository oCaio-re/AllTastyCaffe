import {Box, Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
import AUsectionOne from "../Components/AUsectionOne/AUsectionOne.tsx";
import AUsectionTwo from "../Components/AUsectionTwo/AUsectionTwo.tsx";
import AUsectionThree from "../Components/AUsectionThree/AUsectionThree.tsx";

function AboutUs() {
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
                    <AUsectionOne/>
                    <AUsectionTwo/>
                    <AUsectionThree/>
                    <Box h="5em" w="100%"/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default AboutUs;