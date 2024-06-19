import { IconButton, VStack, useColorMode, Flex, Box, Link } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGitlab, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";


function Header() {
    const { ColorMode, toggleColorMode, } = useColorMode();
    const isDark = ColorMode === "dark";

    return (
        <>
            <VStack p={5}>
                <Flex w="100%"  alignItems='center' justifyContent='center'>



                           <Box mr='1rem'> <Link href="https://www.linkedin.com/in/sachin-talreja-3374441a9" target='_blank' ><FaLinkedinIn></FaLinkedinIn></Link></Box>
                            <Box mr='1rem'> <Link href="https://gitlab.com/sachintalreja94" target='_blank'><FaGitlab ></FaGitlab></Link></Box>
                            <Link href="mailto:sachintalreja94@gmail.com" target='_blank'><BiLogoGmail></BiLogoGmail></Link>

                            <IconButton ml={9} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                </Flex>

            </VStack>
        </>
    )
};

export default Header;