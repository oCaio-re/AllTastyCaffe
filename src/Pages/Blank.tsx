import {Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.tsx";
import wallpaper from "../../public/wallpaper-opac.svg";
import HMsectionOne from "../Components/HMsectionOne/HMsectionOne.tsx";
// import HMsectionTwo from "../Components/HMsectionTwo/HMsectionTwo.tsx";
// import HMsectionThree from "../Components/HMsectionThree/HMsectionThree.tsx";
// import HMsectionFour from "../Components/HMsectionFour/HMsectionFour.tsx";
// import Footer from "../Components/Footer/Footer.tsx";

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
                    <HMsectionOne/>
                    {/*<HMsectionTwo/>*/}
                    {/*<HMsectionThree/>*/}
                    {/*<HMsectionFour/>*/}
                    {/*<Footer/>*/}
                </Flex>
            </Flex>
        </>
    );
}

export default Blank;