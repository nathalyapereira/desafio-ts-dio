import './Header.css'
import { 
    Box,
    Center,
    ChakraProvider,
    Heading,
    Image
} from '@chakra-ui/react'

export const Header = () => {
    return (
        <ChakraProvider>
            <Box backgroundColor={'purple.700'} color={'#fff'}>
                <Center>
               <Image 
               boxSize={'50px'}
               src='https://nathalyapereira.github.io/dio-portfolio/assets/img/dio.svg' alt='Dio' />
                <Heading fontSize={'25px'} margin={'.7rem'} >Dio Bank</Heading>
                
                </Center>
            </Box>
        </ChakraProvider>
    )
}

// export default class