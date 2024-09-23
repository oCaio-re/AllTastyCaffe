import {Box, Flex} from "@chakra-ui/react";
import backgroundImage from "../../../../public/flat-lay-coffee-ingredients-with-copy-space.jpg"

function Carousell() {
    return (
      <>
          <Flex height="90vh" w="100%" top="0" backgroundColor="" mb="-2em">
            <Box className="img-wrap" zIndex="0"
                 w="100vw" h="90vh"
            >
                <Box as="img" src={backgroundImage}
                     w="100vw" h="90vh" ml="auto" mr="auto"
                     objectFit="cover"
                     zIndex="1"
                 />
            </Box>
          </Flex>
      </>
    );
}

export default Carousell;