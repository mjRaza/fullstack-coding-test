import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Flex, Input } from "@chakra-ui/react";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" >
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex padding="5rem 0"flexDirection ="column" justifyContent="center" alignItems="center">
        <DynamicText />
        <Input onChange={onChange} placeholder="Enter" variant="filled" mb={3}/>
      </Flex>
    </Flex>
  );
};

export default Home;
