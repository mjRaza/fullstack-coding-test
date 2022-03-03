import {
  Box,
  Modal,
  Button,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
  Text,
} from "@chakra-ui/react";
import { Props, Blog } from "pages/blog";
import React, { useState } from "react";

const BlogPosts: React.FC<Props> = ({ Allblogs }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  console.log({blog})
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(isOpen);
  const showModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}  size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{blog?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <FormControl mt={4}>
            <Image src={blog?.imageUrl} />
          
              
                {blog?.body && <Box padding={10}><Text fontSize="md">{blog?.body}</Text>    </Box>}
            
          </FormControl>

          <ModalFooter>
            <Button onClick={()=>{
                setBlog(null)
                onClose()
            }}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <>
      {showModal()}
      {Allblogs.map((blog) => (
        <Box
        key={blog.id}
        mt={3}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          onClick={() => {
            onOpen();
            setBlog(blog);
          }}>
          <Box p={3} >
            <Image src={blog.imageUrl}  boxSize='300px'objectFit='cover'/>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {blog.title}
            </Box>

        
          </Box>
        </Box>
      ))}
    </>
  );
};

export default BlogPosts;
