import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowDownNarrowWide } from "react-icons/lu";
import {NavLink} from "react-router-dom";
import {Box, IconButton, Menu, MenuList, MenuItem, useDisclosure}
from '@chakra-ui/react';

function DropDownMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box zIndex="20" m="auto"  backgroundColor="">
                <IconButton
                    aria-label="Menu"
                    icon={isOpen ? <LuArrowDownNarrowWide /> : <GiHamburgerMenu />}
                    width="3em"
                    height="3em"
                    color="#0C6E5A"
                    ml={{base: "auto"}}
                    mr="0.5em"
                    onClick={onOpen}
                    zIndex="3"
                />
                <Menu isOpen={isOpen} onClose={onClose} >
                    <MenuList ml="6em" mt="5.5rem">
                        <MenuItem className="menu-item">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <NavLink to="/beverages">
                                Beverages
                            </NavLink>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <NavLink to="/berry-acai">
                                Berry Acai
                            </NavLink>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <NavLink to="/pastries">
                                Pastries & Savouries
                            </NavLink>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <NavLink to="/food">
                                Food
                            </NavLink>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </>
    );
}

export default DropDownMobile;