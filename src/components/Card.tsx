import { 
    Center,
    ChakraProvider,
    Input,
    Box,
    Button
   } from '@chakra-ui/react'
import { login } from '../services/login'

export const Card = () => {
   
    return (
        <ChakraProvider>
          <Box minHeight='87vh' 
            backgroundColor='#000'
            background={'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(110,9,121,1) 35%, rgba(2,29,34,1) 70%)'} 
            padding='25px'>
            <Box 
            backgroundColor='#fff'  
            borderRadius='25px'
            padding='15px'
            >
            <Center 
            padding='15px' 
            fontSize={'2rem'} 
            fontWeight={'bold'}
            color={'gray.600'}
            >
            <h1>Faça o login</h1>
            
            
            </Center>
                <Input placeholder='email' type='email'/>
                <Input marginTop={'.5rem'} placeholder='password' type='password'/>

                <Center>
                <Button onClick={login} colorScheme='purple' width={'100%'} marginTop={'1rem'}>
                    Button
                </Button>
                </Center>
                
            </Box>
            </Box>
        </ChakraProvider>
    )
}