import {Flex, Text} from "@chakra-ui/react";

interface Props {
    title: string;
    titleSize?: string;
    description: string;
    descriptionSize?: string;
}

function Item(props: Props) {
    const contentWrapSx = {
        height: "100%",
        width: "30%",
        flexDirection: "column",
    }
    const titleWrapSx = {
        fontFamily: "Inknut Antiqua",
    }
    const titleSx = {
        // fontSize: `${props.titleSize}px`,
        fontSize: "1.5em",
    }
    const descSx = {
        fontFamily: "Inter",
        color: "grey"
    }
    return (
        <>
            <Flex className="content-wrap" sx={contentWrapSx}>
                <Flex className="title-wrap" sx={titleWrapSx}>
                    <Text sx={titleSx}>{props.title}</Text>
                </Flex>
                <Flex>
                    <Text sx={descSx}>{props.description}</Text>
                </Flex>
            </Flex>
        </>
    );
}

export default Item;