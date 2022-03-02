import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Spinner color="red.500" size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" />
    </Flex>
  );
};

export default Loader;
