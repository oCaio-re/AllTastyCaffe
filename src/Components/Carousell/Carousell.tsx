import {Box, Flex} from "@chakra-ui/react";
import backgroundImage from "../../../public/flat-lay-coffee-ingredients-with-copy-space.jpg"

function Carousell() {
    return (
      <>
          <Flex height="90vh" w="100%"
                // position="relative"
                top="0"
                mb="auto"
          >
            <Box className="img-wrap" zIndex="0"
                 // position="relative"
                 w="100vw" h="90vh"
                pt="110px"
                // backgroundImage={backgroundImage}
            >
                <Box as="img" src={backgroundImage}
                     // position="absolute"
                     w="100vw" h="90vh" ml="auto" mr="auto"
                     objectFit="cover"
                     zIndex="1"
                     // backgroundAttachment="fixed"
                 />
            </Box>
          </Flex>
      </>
    );
}

export default Carousell;