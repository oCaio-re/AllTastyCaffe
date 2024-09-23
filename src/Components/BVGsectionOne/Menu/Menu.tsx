import {Box, Flex, Text} from "@chakra-ui/react";

function Menu() {
    return (
        <>
            <Flex className="menu-wrap">
                <Flex className="title-wrap">
                    <Text> Beverages Menu</Text>
                </Flex>
                <Flex className="content-wrap">
                    <Flex className="row-one">
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="row-two">
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                        <Flex className="item-wrap">
                            <Flex className="img-wrap">
                                <Box as="img"/>
                            </Flex>
                            <Flex>
                                <Text className="item-tile"></Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Menu;