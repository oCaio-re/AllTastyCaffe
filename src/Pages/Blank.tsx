import {Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
// import HMsectionOne from "../Components/HMsectionOne/HMsectionOne.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import BVGsectionOne from "../Components/BVGsectionOne/BVGsectionOne.tsx";

function Blank() {
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
                    {/*<HMsectionOne/>*/}
                    <BVGsectionOne/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Blank;