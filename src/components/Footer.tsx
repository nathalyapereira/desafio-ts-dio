import { Box, Center, ChakraProvider } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <ChakraProvider>
            <Center
            backgroundColor={'purple.700'} 
            color={'#fff'} 
            display={'flex'} 
            flexDirection={'column'} 
            alignContent={'flex-end'}
            height={'3rem'}
            >
            <Box>
                
                <div>Modificado por Nathalya Pereira</div>
            </Box>
            </Center>
        
        </ChakraProvider>
    )
}