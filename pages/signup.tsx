import { Button, Flex, Input, Text } from "@chakra-ui/react";
import ErrorMsg from "components/ErrorMsg";
import React, { useState } from "react";
import useAuth from "src/hooks/auth";
import { withPublic } from "src/hooks/route";
import Link from 'next/link'

const signup = () => {

const {SignUpWithEmailPassword, user, error:errorFromFb}= useAuth()
console.log({errorFromFb})
    const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Password and confirm password do not match.");
      return;
    }
    if (!password || !confirm) {
      setError("Please enter password and confirm.");
      return;
    }
    if (!email) {
      setError("Please enter email.");
      return;
    }
    if (error !== "") setError("");
    SignUpWithEmailPassword(email,password)
   
  };
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        w="35vw"
        h="45vh"
        borderRadius={25}
        padding={5}
        flexDirection="column"
        justifyContent='space-around'
        alignItems="center"
        backgroundColor="#c8e7f5">

        <Text as="b" fontSize='5xl' >Sign Up</Text>

        <Flex direction="column"  w="25vw">


        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          variant="filled"
          mb={3}
        />
        <Input
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Confirm password"
          type="password"
          variant="filled"
          mb={3}
        />
        <Button onClick={signUpWithEmailAndPassword} color="success">
          Sign up
        </Button>
        <Text textAlign="center"  >
        Already have an account?  <Link href="/login">
          <a  style={{color:'blue'}}>Click here</a>
        </Link>
          </Text>

        <ErrorMsg error={error || errorFromFb.message } />
      </Flex>
</Flex>

    </Flex>
  );
};

export default withPublic(signup);
