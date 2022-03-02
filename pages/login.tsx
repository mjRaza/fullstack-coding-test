import { Button, Flex, Input } from "@chakra-ui/react";
import ErrorMsg from "components/ErrorMsg";
import Router from "next/router";
import React, { useState } from "react";
import useAuth from "src/hooks/auth";
import { withPublic } from "src/hooks/route";

const signIn = () => {
  const { loginWithEmailPassword, user, error: errorFromFb } = useAuth();
  console.log({ user });
  console.log({ errorFromFb });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const signInWithEmailAndPassword = () => {
 
    if (!password) {
      setError("Please enter password.");
      return;
    }
    if (!email) {
      setError("Please enter email.");
      return;
    }
    if (error !== "") setError("");
    loginWithEmailPassword(email, password);
  };
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        padding="5rem 0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#c8e7f5">
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
        <Button onClick={signInWithEmailAndPassword} color="success">
          Login
        </Button>
        <small>
          <p>want to register?</p>
        </small>
        <ErrorMsg error={error || errorFromFb.message} />
      </Flex>
    </Flex>
  );
};

export default withPublic(signIn);
