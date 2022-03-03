import Head from "next/head";
import React, { useRef } from "react";
import { Box, Button, Flex, Heading, Input, Spacer } from "@chakra-ui/react";
import DynamicText from "components/DynamicText";
import { withProtected } from "src/hooks/route";
import useAuth from "src/hooks/auth";
import { useRouter } from "next/router";

const Home = () => {
  const childFunc = useRef(null);
  const { logout } = useAuth();
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    childFunc.current(e.target.value);
  };

  return (
    <Flex height="100vh" direction="column" align="center">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100%" bg="lightgreen" p={4} align="center">
        <Box color="white">
          <Heading size="md">Blogs</Heading>
        </Box>
        <Spacer />
        <Box color="white" textColor="black" mr={3} >
        <Button onClick={()=> router.push('/blog')}>Blog</Button>
        </Box>
        <Box color="white" textColor="black" >
        <Button  onClick={logout}>Logout</Button>
        </Box>


      </Flex>
    
      <Flex wrap="wrap" maxW="40vw" padding="5rem 0" flexDirection="column" justifyContent="center" alignItems="center">
        <DynamicText childFunc={childFunc} />
        <Input onChange={onChange} placeholder="Enter" variant="filled" mb={3} />
      </Flex>
    </Flex>
  );
};

export default withProtected(Home);
