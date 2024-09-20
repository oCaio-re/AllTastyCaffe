import {Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import HMsectionTwo from "../Components/HMsectionTwo/HMsectionTwo.tsx";
import HMsectionThree from "../Components/HMsectionThree/HMsectionThree.tsx";
import HMsectionFour from "../Components/HMsectionFour/HMsectionFour.tsx";
import HMsectionOne from "../Components/HMsectionOne/HMsectionOne.tsx";
import wallpaper from "../../public/wallpaper-opac.svg"

function Home() {
    return (
        <>
            <Flex className="App" maxW="100vw"
                overflow="hidden"
                flexDirection="column"
            >
                <Header/>
                <Flex flexDirection="column" backgroundImage={wallpaper} backgroundSize="cover"
                      backgroundAttachment="fixed">
                    <HMsectionOne/>
                    <HMsectionTwo/>
                    <HMsectionThree/>
                    <HMsectionFour/>
                    <Footer/>
                </Flex>
            </Flex>
        </>
    );
}

export default Home;