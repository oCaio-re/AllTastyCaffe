import {Flex, Image} from "@chakra-ui/react";
import BedrockBar from "./BedrockBar/BedrockBar.tsx";
import logoFooter from "../../../public/at_logo_footer.svg"
import PhoneItem from "./PhoneItem/PhoneItem.tsx";
import LocationItem from "./LocationItem/LocationItem.tsx";
import LinkItem from "./LinkItem/LinkItem.tsx";

function Footer() {
    const mainBackgroundSx = {
        width: "100vw",
        height: {base: "85em", md: "400px"},
        backgroundColor: "#0C6E5A",
        bottom: "0",
        mt: "auto",
        alignContent: "center",
        justifyContent: "center",
    }
    const contentWrapSx = {
        // backgroundColor: "orange",
        alignItems: "center",
        width: "70%",
        ml: "auto",
        mr: "auto",
        flexDirection: {base: "column", md: "row"}
    }
    const innerBoxWrapSx = {
        // backgroundColor: "purple",
        width: {base: "100%", md: "25%"},
        height: {base: "40em", md: "20em"},
        position: "relative",
        m: "2em 0 2em 0",
        justifyContent: "center",
    }
    return (
        <>
            <Flex className="main-background" sx={mainBackgroundSx}>
                <Flex className="content-wrap" sx={contentWrapSx}>
                    <Flex className="logo-wrap" sx={innerBoxWrapSx}>
                        <Image src={logoFooter} m="auto" filter= "drop-shadow(-14px 8px 8px rgba(77, 76, 76, 0.6))" w="80%"/>
                    </Flex>
                    <Flex className="phone-wrap" sx={innerBoxWrapSx} flexDirection="column" mt="0.5em">
                        <PhoneItem/>
                    </Flex>
                    <Flex className="location-wrap" sx={innerBoxWrapSx} flexDirection="column">
                        <LocationItem/>
                    </Flex>
                    <Flex className="links-wrap" sx={innerBoxWrapSx} flexDirection="column">
                        <LinkItem/>
                    </Flex>
                </Flex>
            </Flex>
            <BedrockBar/>
        </>
    );
}

export default Footer;