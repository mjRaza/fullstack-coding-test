import { Button, Flex, Input } from "@chakra-ui/react";
import ErrorMsg from "components/ErrorMsg";
import React, { useState } from "react";
import useAuth from "src/hooks/auth";
import { withPublic } from "src/hooks/route";

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
        <small>
          <p>Already have an account?</p>
        </small>
        <ErrorMsg error={error || errorFromFb.message } />
      </Flex>
    </Flex>
  );
};

export default withPublic(signup);
