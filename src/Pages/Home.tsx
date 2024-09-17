import {Box} from "@chakra-ui/react";
import Header from "../Components/Header/Header.tsx";

function Home() {
    return (
        <>
            <Box className="App" maxW="100vw"
                 overflow="hidden"
            >
                <Header/>
            </Box>
        </>
    );
}

export default Home;