import {Box, Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";
import BVGsectionOne from "../Components/BVGsectionOne/BVGsectionOne.tsx";

function Beverages() {
    return (
        <>
            <Flex className="App" maxW="100vw"
                  overflow="hidden"
                  flexDirection="column"
            >
                <Box h="110px" w="100vw"/>
                <Header/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                      backgroundAttachment="fixed">
                    <BVGsectionOne/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Beverages;