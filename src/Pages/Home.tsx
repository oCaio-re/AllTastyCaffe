import {Box} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";
import WallPaper from "../Components/WallPaper/WallPaper.tsx";
// import TopBar from "../Components/Header/TopBar/TopBar.tsx";

function Home() {
    return (
        <>
            <Box className="App" maxW="100vw"
                 overflow="hidden"
            >
                <Header/>
                <WallPaper/>
                {/*<TopBar/>*/}
            </Box>
        </>
    );
}

export default Home;