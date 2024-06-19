import { Box, Heading, CardBody, Stack, Text, Card, Divider, Image, CardFooter, Button, ButtonGroup,Flex, Link } from "@chakra-ui/react";
import { SiChakraui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";




function Projects() {
    return (
        <>
        <Heading textAlign='center'>
            PROJECTS
        </Heading>
        <Box>
            <Card maxW='sm' ml='auto' mr='auto'>
                <CardBody>
                    <Image
                        src='./images/rststore.png'
                        alt='rst store'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>RST STORE <Text fontSize='sm' color='blue.600'> <Link href='http://172.105.56.105/' target="_blank">(live preview)</Link></Text></Heading>
                        <Text>
                            A fully functional single page ecom-website with
                            user authentication, admin panel and
                            payment gateway.


                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            TechStack
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <Flex alignItems='center' justifyContent='space-evenly' mt='1rem'>
                <SiChakraui></SiChakraui>
                <FaReact></FaReact>
                <SiRedux></SiRedux>
                <SiMongodb></SiMongodb>
                <SiExpress></SiExpress>
                <FaNodeJs></FaNodeJs>
                </Flex>
                <CardFooter>


                </CardFooter>
            </Card>


        </Box>
        </>
    )
};

export default Projects;