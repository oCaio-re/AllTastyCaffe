import {Box, Flex, Text} from "@chakra-ui/react";
import {GrLocation} from "react-icons/gr";
import {GoLink} from "react-icons/go";

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
                  <Text>Beverage Menu</Text>
                  <Text>Food Menu</Text>
                  <Text>About Us</Text>
                  <Text>Our Project</Text>
                  <Text>Loyalty Program</Text>
              </Flex>
          </Flex>
      </>
    );
}

export default LinkItem;