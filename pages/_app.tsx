import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "src/hooks/auth";
import AuthStateChanged from "src/layout/authState";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthStateChanged>
    </AuthProvider>
  );
}
export default MyApp;
