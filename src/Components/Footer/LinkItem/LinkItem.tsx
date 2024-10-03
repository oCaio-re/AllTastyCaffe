import {Box, Flex, Text} from "@chakra-ui/react";
import {GoLink} from "react-icons/go";
import {NavLink} from "react-router-dom";

function LinkItem() {
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
        "filter": "drop-shadow(-14px 8px 8px rgba(77, 76, 76, 0.6))"
    }
    return (
      <>
          <Flex w="100%" position="absolute" alignItems="center" backgroundColor="" m="auto" zIndex="0"
          >
              <GoLink size="xl" color="white" opacity="15%"/>
          </Flex>
          <Flex className="content-wrap" sx={contentWrapSx}>
              <Box className="header-wrap" backgroundColor="" h="20%">
                  <Text color="white" fontSize="1.9em" fontWeight="bold">Quick Links:</Text>
              </Box>
              <Flex flexDirection="column" h="80%" backgroundColor="" mt="0.8em"
                    color="#FFFFFF" fontSize="1.5em" fontWeight="500">
                  <NavLink to="/beverages">
                      <Text>Beverage Menu</Text>
                  </NavLink>
                  <NavLink to="/food">
                      <Text>Food</Text>
                  </NavLink>
                  <NavLink to="/about">
                      <Text>About Us</Text>
                  </NavLink>
                  <NavLink to="/">
                      <Text>Loyalty Program</Text>
                  </NavLink>
              </Flex>
          </Flex>
      </>
    );
}

export default LinkItem;