import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  childFunc: React.MutableRefObject<any>;
};
const DynamicText: React.FC<Props> = ({ childFunc }) => {
  React.useEffect(() => {
    childFunc.current = changeValue;
  }, [childFunc]);

  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <Flex wrap="wrap" maxW="45vw">
      <Text fontSize="md" isTruncated> {value}</Text>
    </Flex>
  );
};

export default DynamicText;
