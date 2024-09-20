import {Flex, Image} from "@chakra-ui/react";
import BedrockBar from "./BedrockBar/BedrockBar.tsx";
import logoFooter from "../../../public/at_logo_footer.svg"
import PhoneItem from "./PhoneItem/PhoneItem.tsx";
import LocationItem from "./LocationItem/LocationItem.tsx";
import LinkItem from "./LinkItem/LinkItem.tsx";

function Footer() {
    const mainBackgroundSx = {
        width: "100vw",
        height: "350px",
        backgroundColor: "#0C6E5A",
        bottom: "0",
        mt: "auto",
    }
    const contentWrapSx = {
        // backgroundColor: "grey",
        width: "70%",
        ml: "auto",
        mr: "auto",
    }
    const innerBoxWrapSx = {
        width: "25%",
        position: "relative",
        // alignContent: "center",
        // backgroundColor: "purple"
    }
    return (
        <>
            <Flex className="main-background" sx={mainBackgroundSx}>
                <Flex className="content-wrap" sx={contentWrapSx}>
                    <Flex className="logo-wrap" sx={innerBoxWrapSx} >
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