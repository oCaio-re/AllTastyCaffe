import {Box, Flex, Text} from "@chakra-ui/react";
import {IoPhonePortraitOutline} from "react-icons/io5";
import {GrInstagram} from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";

function PhoneItem() {
    const contentWrapSx = {
        // backgroundColor: "grey",
        h: "70%",
        w: "43%",
        m: "auto",
        textAlign: "center",
        fontFamily: "Inter",
        fontWeight: "Bold",
        flexDirection: "column",
    }
    const logosWrapSx = {
        // backgroundColor: "yellow",
        m: "auto",
        justifyContent: "center",
        ml: "5px"
    }
    return (
        <>
            <Flex w="100%" position="absolute" alignItems="center" backgroundColor="" m="auto">
                <IoPhonePortraitOutline size="xl" color="white" opacity="20%"/>
            </Flex>

            <Flex className="follow-us-content-wrap" sx={contentWrapSx}>
                <Box className="title-wrap">
                    <Text color="white" fontSize="1.8em">Follow Us</Text>
                </Box>
                <Flex className="logos-wrap" sx={logosWrapSx}>
                    <Flex className="instagram-wrap" backgroundColor="" w="50%">
                        <GrInstagram size="100%" color="white"/>
                    </Flex>
                    <Flex as="a" href=""  className="facebook-wrap" w="50%" backgroundColor="" justifyContent="center">
                        <FaFacebookF size="85%" color="white"/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default PhoneItem;