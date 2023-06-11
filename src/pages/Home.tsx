import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { DButton } from "../components/DButton";
import { changeLocalStore } from "../services/storage";

const Home = ( ) => {
   const  [ email, setEmail ]  = useState<string>('')
   const  [ password, setPassword ]  = useState<string>('')
   const { setIsLoggedIn } = useContext(AppContext)
   const navigate = useNavigate()

   const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)
        console.log('nao logado ' + !loggedIn)
        if (!loggedIn) {
           return alert('Email e/ou senha invalido(a)')
        } 

        setIsLoggedIn(true)
        changeLocalStore({ login: true})
        navigate('/conta/1')
   }

   return (
      <Box width={"100%"} height={"100%"}>
        <Card>
        <Center
                    padding='15px'
                    fontSize={'2rem'}
                    fontWeight={'bold'}
                    color={'gray.600'}
                    >

                        <h1>Faça o login</h1>
                            </Center>
                            <Input placeholder='email' type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                            <Input marginTop={'.5rem'} placeholder='password' type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                            <Center>
                                <DButton 
                                onClick={() => validateUser(email, password)}/>
                            </Center>
        </Card>
      </Box>
    );
}
export default Home;