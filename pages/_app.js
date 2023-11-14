import { ChakraProvider } from '@chakra-ui/react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import {useRouter} from "next/router";
import {useEffect} from "react";
const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({ config })
function MyApp({ Component, pageProps }) {

  const Router = useRouter()
  // useEffect(() => {
  //   if(Router.pathname === '/register')
  //     Router.push('/').catch((e) => console.log(e))
  // }, [Router])

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/register') {
        Router.push('/').catch((e) => console.log(e));
      }
    };
  
    Router.events.on('routeChangeStart', handleRouteChange);
  
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [Router]);
  


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Box>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 Innovance 2k23. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Mail'} href={'mailto:iotkiit.in'}>
             <CgMail />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/iotlabkiit/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/iot.lab.kiit/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp