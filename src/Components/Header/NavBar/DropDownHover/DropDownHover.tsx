import {Box, Menu, MenuButton, MenuItem, MenuList, MenuDivider} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";
import {useDisclosure, useColorModeValue} from "@chakra-ui/react";

interface Props {
    title: string;
    items: { name: string; link: string }[];
    fontFamily?: string;
    fontWeight?: string;
    color?: string;
}

function DropDownHover(props: Props) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const itemSx = {
        alignContent: "center",
        color: props.color || "black",
        fontFamily: `${props.fontFamily || "Inter"}`,
        fontWeight: `${props.fontWeight || "500"}`,
        fontSize: "20px",
        whiteSpace: "nowrap",
    }
    const menuItemSx = {
        "_hover": {color: "#0C6E5A",
                backgroundColor: "rgba(126,126,126,0.13)"
                },
        color: "#3c3c3c",
    }

    return (
        <>
            <Box className="dropdown" zIndex="3">
                <Menu isOpen={isOpen}>
                    <Box sx={itemSx}>
                        <MenuButton _hover={{
                            // bg: useColorModeValue("gray.100", "gray.700"),
                            color: useColorModeValue("#0C6E5A", "#0C6E5A"),
                            transition: "0.3s"
                        }}
                                    aria-label="Courses"
                                    fontWeight="500"
                                    onMouseEnter={onOpen}
                                    onMouseLeave={onClose}
                        >
                            {props.title} {isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                        </MenuButton>
                    </Box>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>

                        {props.items.map((element) => (
                            <MenuItem className="menu-item" sx={menuItemSx}
                            >
                                <NavLink to={element.link}>
                                    {element.name}
                                    <MenuDivider width="100%"/>
                                </NavLink>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </>)
}

export default DropDownHover