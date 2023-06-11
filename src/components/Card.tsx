import { 
    ChakraProvider,
    Box,
   } from '@chakra-ui/react'

export const Card = ({ children }: any) => {

   return (
        <ChakraProvider>
            <Box minHeight='83vh' margin='1rem'>
                <Box
                backgroundColor='#fff'
                borderRadius='25px'
                padding='15px'
                >
                    { children }
                </Box> 
            </Box>
    </ChakraProvider>   
    );
}