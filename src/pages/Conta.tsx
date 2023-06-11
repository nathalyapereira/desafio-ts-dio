import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [ userData, setUserData ] = useState<null | UserData>()
    
    const { isLoggedIn } = useContext(AppContext)
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
}, [])


const actualData = new Date()
const { id } = useParams()
const navigate = useNavigate()

!isLoggedIn && navigate('/')

if(userData && id !== userData.id){
    navigate('/')
}

    return (
        <Center height='87vh'>
            <SimpleGrid columns={2} spacing={8}>
                {
                    userData === undefined || userData === null ? (
                    <Center>
                        <Spinner size='xl' color='#fff' />
                    </Center>) :
                    ( 
                        <>
                        <CardInfo  mainContent={`Bem vinda ${userData?.name}`} 
                        content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()} `} 
                        />
                        <CardInfo  mainContent={`Saldo`} 
                        content={`R$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    );
}

export default Conta