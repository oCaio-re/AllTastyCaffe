import {Flex} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import WallPaper from "../Components/WallPaper/WallPaper.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import Carousell from "../Components/Carousell/Carousell.tsx";
// import TopBar from "../Components/Header/TopBar/TopBar.tsx";

function Home() {
    return (
        <>
            <Flex className="App" maxW="100vw"
                overflow="hidden"
                flexDirection="column"
            >
                {/*<Spacer h="110px"/>*/}
                <Header/>
                <Carousell/>
                <Footer/>
                {/*<TopBar/>*/}
                <WallPaper/>
            </Flex>
        </>
    );
}

export default Home;