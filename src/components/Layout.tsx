import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}:any) => {
    return (
        <>
        <Box minHeight='100vh'
        backgroundColor='#000'
        background={'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(110,9,121,1) 35%, rgba(2,29,34,1) 70%)'}
        >
            <Header />
            {children}
            <Footer />
        </Box>
        </>
    )
}