import { Flex, Box, Heading, Input, Button, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";
import Link from 'next/link'

const Login = () => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700')

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Box>
                <Text mb={6}>
                    <Link href="/">Go back</Link>
                </Text>
                <Flex direction="column" background={formBackground} py={8} px={12} rounded={6}>
                    <Heading mb={6}>Log in</Heading>
                    <Input placeholder="Email" variant="filled" type="email" mb={3} />
                    <Input placeholder="Password" variant="filled" type="password" mb={6} />
                    <Button colorScheme="teal" mb={3}>Log In</Button>
                    <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Login;