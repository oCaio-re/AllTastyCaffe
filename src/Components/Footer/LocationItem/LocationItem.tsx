import {Box, Flex, Text} from "@chakra-ui/react";
import {GrLocation} from "react-icons/gr";

function LocationItem() {
    const contentWrapSx = {
        // backgroundColor: "grey",
        h: "70%",
        w: "80%",
        m: "auto",
        textAlign: "center",
        fontFamily: "Inter",
        // fontWeight: "Bold",
        flexDirection: "column",
        zIndex: "20",
        "filter": "drop-shadow(-14px 8px 8px rgba(77, 76, 76, 0.9))"
    }
    return (
        <>
            <Flex w="100%" position="absolute" alignItems="center" backgroundColor="" m="auto" zIndex="0"
            >
                <GrLocation size="xl" color="white" opacity="15%"/>
            </Flex>
            <Flex className="content-wrap" sx={contentWrapSx}>
                <Box className="header-wrap" backgroundColor="" h="20%">
                    <Text color="white" fontSize="1.9em" fontWeight="bold" whiteSpace="nowrap">Come and visit us</Text>
                </Box>
                <Flex flexDirection="column" h="80%">
                    <Box className="address-title-wrap">
                        <Text color="white" fontStyle="italic" fontSize="1.5em" fontWeight="400" mt="0.5em">Address:</Text>
                    </Box>
                    <Box className="address-desc-wrap" mt="1em" backgroundColor="" h="80%">
                        <Text color="white" fontSize="1.3em">Unit 6 Office 1 Brogans Lane | F42 HK13 Roscommon Republic of Ireland <br/>+353 87 6928001</Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}

export default LocationItem;