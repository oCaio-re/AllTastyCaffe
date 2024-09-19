import {Box, Flex, Text} from "@chakra-ui/react";
import friendsCoffeImg from "../../../public/friends-drinking-coffee.jpg"

function HMsectionThree() {
    const sectionWrapSx = {
        backgroundColor: "#0C6E5A",
        h: "90vh",
        justifyContent: "center",
        mb: "15em"
    }
    const outerWrapSx = {
        backgroundColor: "",
        h: "85%",
        w: "70%",
    }
    const textContentWrapSx = {
        flexDirection: "column",
        backgroundColor: "",
        w: "80%",
        h: "75%",
        m: "auto"
    }
    return (
        <Flex as="section" className="section-wrap" sx={sectionWrapSx}>
            <Flex className="outer-wrap" sx={outerWrapSx}>
                <Flex className="left-content"  w="50%" backgroundColor="">
                    <Flex className="text-content-wrap" sx={textContentWrapSx}>
                        <Flex className="title-wrap" h="25%" backgroundColor="" justifyContent="center">
                            <Text className="title-wrap" backgroundColor="" fontSize="7em"
                                    color="white" fontFamily="Italianno"
                            >We are open!</Text>
                        </Flex>
                        <Flex className="desc-wrap" mt="2em"
                              // p="30px"
                        >
                            <Text className="desc-wrap" fontFamily="Inter" color="white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna lacus. Vestibulum
                                vehicula lacus consequat est dignissim volutpat. Ut maximus eros a eros bibendum, sed
                                iaculis felis consectetur. Fusce non enim urna. Phasellus vel neque sagittis, rutrum
                                nulla ut, consequat massa. Aliquam pellentesque commodo nisl, et ultricies felis
                                efficitur vel. Pellentesque vehicula neque justo, ut mattis urna ullamcorper feugiat.
                                Aenean vel felis ac elit scelerisque lacinia. Etiam ornare quis tortor non tincidunt.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="right-content" w="50%">
                    <Box as="img" src={friendsCoffeImg} objectFit="cover" boxShadow="-8px 8px 8px rgba(77, 76, 76, 0.4)"/>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default HMsectionThree;