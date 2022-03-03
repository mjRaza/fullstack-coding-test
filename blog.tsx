import {
  Box,
  Modal,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import BlogPosts from "components/BlogPosts";
import React, { useState } from "react";
import { db } from "src/config/firebase.config";
import useAuth from "src/hooks/auth";
export type Props = {
  Allblogs: [{ createdAt: any; id: string; imageUrl: string; postedBy: string; title: string }];
};
const blog: React.FC<Props> = ({ Allblogs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const createBlog = () => {
    try {
      db.collection("blogs").add({
        title,
        imageUrl: url,
        body,
        postedBy: user.uid,
        createdAt: new Date(),
      });
      onClose()
      toast({
        title: "Blog created.",
        description: "Blog created sucessfully!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error.",
        description: "Error creating blog!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const showModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image Url</FormLabel>
              <Input onChange={(e) => setUrl(e.target.value)} placeholder="Image Url" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input onChange={(e) => setBody(e.target.value)} placeholder="Image Url" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={createBlog} disabled={!url || !title} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <Flex h="100vh" direction="column">
      <Flex w="100%" bg="lightgreen" p={4} align="center">
        <Box color="white">
          <Heading size="md">Blogs</Heading>
        </Box>
        <Spacer />
        <Box color="white">
          <Button onClick={onOpen}>Create</Button>
        </Box>
      </Flex>
      <Flex>
        <BlogPosts Allblogs={Allblogs} />
      </Flex>

      {showModal()}
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const querySnap = await db.collection("blogs").orderBy("createdAt", "desc").get();
  const Allblogs = querySnap.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });

  return {
    props: { Allblogs }, // will be passed to the page component as props
  };
}

export default blog;
