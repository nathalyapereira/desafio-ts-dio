import { Box, Card, CardBody, Center, Divider, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../components/AppContext"
import { api } from "../api"
import { useNavigate, useParams } from "react-router-dom"


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

export const Perfil = () => {
    const [ userData, setUserData ] = useState<null | UserData>()
    
    const {user, isLoggedIn } = useContext(AppContext)
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const { id } = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id){
        navigate('/')
    }
    return(
        <SimpleGrid height='87vh' paddingTop={16} paddingBottom={16}>

        {
            userData === undefined || userData === null ? (
            <Center>
                <Spinner size='xl' color='#fff' />
            </Center>) :
            ( 
                <>
                <Center>
                <Box>
                <Card height='60vh' width='40vw'>
                    <CardBody>
                        <Center marginBottom='4rem'>
                        <Heading size='2xl'>Perfil</Heading>
                        </Center>
                        <Divider  marginBottom='2rem' />
                        <Heading size='x1'>Nome</Heading>
                        <h1>{userData?.name}</h1>
                        <Divider  marginBottom='2rem' marginTop='2rem' />
                        <Heading size='x1'>Email</Heading>
                        <h1>{userData?.email}</h1>
                        <Divider  marginBottom='2rem' marginTop='2rem' />

                    </CardBody>
                </Card>
             </Box>
                </Center>
                </>
            )
        }
        </SimpleGrid>

    )
}

export default Perfil