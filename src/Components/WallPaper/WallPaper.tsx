import {Box, Flex} from "@chakra-ui/react";
import wallpaper from "../../../public/wallpaper.svg"

function WallPaper() {
    const wallpaperSx = {
        // position: "absolute",
        zIndex: "-3",
        opacity: "30%",
        w: "100vw",
        backgroundAttachment: "fixed"
    }
    return (
        <Flex maxW="100vw" overflow="hidden" position="absolute">
            <Box as="img" src={wallpaper} sx={wallpaperSx}/>
        </Flex>
    );
}

export default WallPaper;