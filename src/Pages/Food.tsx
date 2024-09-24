import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import Header from "../Components/Header/Header.tsx";
import {Flex} from "@chakra-ui/react";
import wallpaper from "../../public/wallpaper-opac.svg";
import Footer from "../Components/Footer/Footer.tsx";

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
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Food;