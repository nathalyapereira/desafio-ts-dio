import { useContext, useEffect, useState } from 'react'
import './Header.css'
import { 
    Box,
    Button,
    Center,
    Flex,
    Image,
    Spacer
} from '@chakra-ui/react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStore } from '../../services/storage'
import { api } from '../../api'


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

    const [ userData, setUserData ] = useState<null | UserData>()
    

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const navigate = useNavigate()
   
    let path = ''

    const logoutAfter = () => {
        changeLocalStore({ login: false })

    }

    const logout = () => {
        changeLocalStore({ login: false })
        setIsLoggedIn(false)
        path = '/'
        navigate(path)
    }

    const profile = () => {
        changeLocalStore({ login: true })
        setIsLoggedIn(true)
        path = `conta/${userData?.id}/perfil`
        navigate(path)
    }

    const infoConta = () => {
        changeLocalStore({ login: true })
        setIsLoggedIn(true)
        path = `conta/${userData?.id}`
        navigate(path)
    }

    return (
        <Flex backgroundColor={'purple.700'}
        alignItems='center'
        >
            <Box marginLeft='1rem'>
                <Center>
               <Image 
               boxSize={'50px'}
               src='https://nathalyapereira.github.io/dio-portfolio/assets/img/dio.svg' alt='Dio' />
                </Center>
            </Box>
        {
          isLoggedIn && (
            <>
            <Spacer />
                <Box 
                marginRight='1rem'
                >
                         <Button 
                         marginLeft='1rem'
                            onClick={ () => profile() }
                            backgroundColor={'purple.100'}
                            >
                                Perfil
                        </Button>
                         <Button 
                         marginLeft='1rem'
                            onClick={ () => infoConta() }
                            backgroundColor={'purple.100'}
                            >
                                Minha Conta
                        </Button>
                        <Button 
                        marginLeft='1rem'
                            onClick={ () => logout() }
                            backgroundColor={'purple.100'}
                            >
                                Sair
                        </Button>
                </Box>
            </>
                    ) 
                    
         } :

        </Flex>
    )
}

// export default class