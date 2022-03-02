import Head from "next/head";
import React, { useRef } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import DynamicText from "components/DynamicText";
import { withProtected } from "src/hooks/route";
import useAuth from "src/hooks/auth";

const Home = () => {
  const childFunc = useRef(null);
  const { logout } = useAuth();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    childFunc.current(e.target.value);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Button onClick={logout}>Logout</Button>
      </Flex>
      <Flex padding="5rem 0" flexDirection="column" justifyContent="center" alignItems="center">
        <DynamicText childFunc={childFunc} />
        <Input onChange={onChange} placeholder="Enter" variant="filled" mb={3} />
      </Flex>
    </Flex>
  );
};

export default withProtected(Home);
