import {Box, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";
import {useDisclosure, useColorModeValue} from "@chakra-ui/react";

function DropDownHover() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const itemSx = {
        alignContent: "center",
        color: "grey",
        ":hover": {
            color: "orange",
            transitionDuration: "200ms",
            cursor: "pointer",
        },
        fontSize: "20px",
    }

    return (
        <>
            <Box className="dropdown" zIndex="3">
                <Menu isOpen={isOpen} >
                    <Box sx={itemSx}>
                        <MenuButton _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                    aria-label="Courses"
                                    fontWeight="normal"
                                    onMouseEnter={onOpen}
                                    onMouseLeave={onClose}
                        >
                            Services {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </MenuButton>
                    </Box>
                    <MenuList onMouseEnter = { onOpen } onMouseLeave = { onClose }>
                        <MenuItem className="menu-item">
                            <Box as="a" href="https://www.lightforthepeople.org/seed-of-light" target="blank">
                                Seed of Light
                            </Box>
                        </MenuItem>

                        <MenuItem className="menu-item">
                            All Tasty Caffé
                        </MenuItem>

                        <MenuItem className="menu-item">
                            <NavLink to="/light-house">
                                LightHouse
                            </NavLink>
                        </MenuItem>

                        <MenuItem className="menu-item">
                            <Box as="a" href="https://www.lightforthepeople.org" target="blank">
                                LPM Church
                            </Box>
                        </MenuItem>

                        <MenuItem className="menu-item">
                            <NavLink to="/zoe-school">
                                Zoe School
                            </NavLink>
                        </MenuItem>

                        <MenuItem className="menu-item">
                            <NavLink to="/services">
                                More
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </>    )
}

export default DropDownHover