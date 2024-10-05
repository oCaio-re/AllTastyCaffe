import {Flex, Text} from "@chakra-ui/react";

interface Props {
    title: string;
    titleSize?: string;
    description: string;
    descriptionSize?: string;
    width?: string;
}

function Item(props: Props) {
    const contentWrapSx = {
        height: "100%",
        width: {base: "85%", md: `${props.width}` || "30%"},
        flexDirection: "column",
        p: {base: "2em", md: "0em"},
    }
    const titleWrapSx = {
        fontFamily: "Inknut Antiqua",
        justifyContent: {base: "left"},
    }
    const titleSx = {
        // fontSize: `${props.titleSize}px`,
        textAlign: "center",
        fontSize: {base: "1.8em", md: "1.5em"},
    }
    const descSx = {
        fontFamily: "Inter",
        fontSize: {base: "1.3em", md: "1.2em"},
        color: "grey",
        backgroundColor: "",
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