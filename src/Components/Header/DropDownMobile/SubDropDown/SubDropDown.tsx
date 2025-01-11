import React, {useState} from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import {ChevronDownIcon, CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {NavLink} from "react-router-dom";
import logo from "../../../../../public/AT_logo.png"
import backgroundImg from "../../../../../public/wallpaper-opac.svg"

interface MenuItemType {
    label: string;
    link?: string;
    subItems?: {label: string, link: string}[];
}

const SubDropDown: React.FC = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

    const menuItems: MenuItemType[] = [
        {label: 'Home', link: '/'},
        {
            label: 'Beverages',
            subItems: [
                {label: 'Hot Beverages', link: '/hot-beverages'},
                {label: 'Cold Beverages', link: '/cold-beverages'},
                {label: 'Smoothies', link: '/smoothies'},
            ],
        },
        {label: 'Berry Acai', link: '/berry-acai'},
        {
            label: 'Pastries & Savouries',
            subItems: [
                {label: 'Pastries', link: '/pastries'},
                {label: 'Savouries', link: '/savouries'},
            ],
        },
        {label: 'Food', link: '/food'},
        {
            label: 'About',
            subItems: [
                {label: 'About Us', link: '/about-us'},
                {label: 'Loyalty Program', link: '/loyalty-program'},
            ],
        },

    ];

    const handleMenuItemClick = (item: MenuItemType) => {
        setSelectedMenuItem(item.label);
    };
    console.log(selectedMenuItem)
    return (
        <>
            <IconButton
                icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                aria-label="Open Menu"
                onClick={isOpen ? onClose : onOpen}
                margin="auto"
                color="#0C6E5A"
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent backgroundColor="#0C6E5A" backgroundImage={backgroundImg} backgroundSize="cover"
                               backgroundAttachment="fixed"
                >
                    <Flex width="100%" backgroundColor="">
                        <Image src={logo} width="50%" backgroundColor="" margin="1em 0 0 1em"/>
                    </Flex>
                    <DrawerBody>
                        {menuItems.map((item) =>
                            item.subItems ? (
                                <Flex key={item.label} title={item.label}
                                      height="4em" backgroundColor="" alignItems="center"
                                >
                                    <Menu>
                                        <Flex alignItems="center">
                                            <Text color="white" fontFamily="Inter"
                                                  fontSize="1.2em">
                                                {item.label}
                                            </Text>
                                            <MenuButton color="#0C6E5A" as={IconButton} icon={<ChevronDownIcon/>}
                                                        marginLeft="10px"/>
                                            <MenuList>
                                                <MenuGroup key={item.label}>
                                                    {item.subItems.map((subItem) => (
                                                        <MenuItem
                                                            key={subItem.label}
                                                            onClick={() => handleMenuItemClick(subItem)}
                                                        >
                                                            <NavLink to={String(subItem.link)}>
                                                                <Text color="#0C6E5A">
                                                                    {subItem.label}
                                                                </Text>
                                                            </NavLink>
                                                        </MenuItem>
                                                    ))}
                                                </MenuGroup>
                                            </MenuList>
                                        </Flex>
                                    </Menu>
                                </Flex>
                            ) : (
                                <Flex key={item.label} onClick={() => handleMenuItemClick(item)}
                                      color="white" fontFamily="Inter"
                                      fontSize="1.2em" height="3em" backgroundColor="" alignItems="center"
                                >
                                    <NavLink to={String(item.link)}>
                                        {item.label}
                                    </NavLink>
                                </Flex>
                            )
                        )}
                    </DrawerBody>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#EF9540" fill-opacity="1"
                              d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,138.7C672,128,768,192,864,186.7C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                    </svg>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SubDropDown;