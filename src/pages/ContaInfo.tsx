import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const CardInfo = () => {
    return (
       <>
        <Text fontSize='3xl' fontWeight='bold' color='#fff'>
            Informações da Conta
        </Text>
        <Link to='/conta/1'>
        <Text fontSize='xl' color='#fff'>
            Conta
        </Text>
        </Link>
       </>
    )
}

export default CardInfo