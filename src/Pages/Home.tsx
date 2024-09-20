import {Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import WallPaper from "../Components/WallPaper/WallPaper.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import Carousell from "../Components/Carousell/Carousell.tsx";
import HMsectionTwo from "../Components/HMsectionTwo/HMsectionTwo.tsx";
import HMsectionThree from "../Components/HMsectionThree/HMsectionThree.tsx";
import HMsectionFour from "../Components/HMsectionFour/HMsectionFour.tsx";

function Home() {
    return (
        <>
            <Flex className="App" maxW="100vw"
                overflow="hidden"
                flexDirection="column"
            >
                <Header/>
                <Carousell/>
                <HMsectionTwo/>
                <HMsectionThree/>
                <HMsectionFour/>
                <Footer/>
                <WallPaper/>
            </Flex>
        </>
    );
}

export default Home;