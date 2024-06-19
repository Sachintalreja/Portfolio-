import { Box,Image,Text,Grid} from '@chakra-ui/react';


function Profile(){
    return(
        <>
        <Grid templateColumns='1fr 1fr'>
         <Box>
            <Text fontSize="xl" fontWeight="semibold"textAlign='center'>Hi,I am Sachin Talreja </Text>
            <Text fontsize="md"  textAlign='center'  padding='5'>Full Stack Developer  who works on both the front-end and back-end of web applications, handling the client-side and server-side development.  proficient in HTML,CSS,JAVASCRIPT frameworks, and databases, ensuring seamless integration and functionality across the entire system. designing and developing scalable software, writing clean code, testing and debugging, and collaborating with cross-functional teams to deliver high-quality solutions</Text>
        </Box>

        <Box>
            <Image src='./images/Profile.png'></Image>
        </Box>
        </Grid>
        </>
    )
};

export default Profile;