import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Props } from "pages/blog";
import React from "react";

const BlogPosts: React.FC<Props> = ({ Allblogs }) => {
  console.log(Allblogs);
  return (
    <>
      {Allblogs.map((blog) => (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box boxSize="sm">
            <Image src={blog.imageUrl} />

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {blog.title}
            </Box>
           
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" >
              Read more...
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default BlogPosts;
