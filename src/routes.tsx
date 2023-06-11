import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContaInfo from "./pages/ContaInfo"
import Conta from "./pages/Conta"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"
import Perfil from "./pages/Perfil"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)



    return (
 <Routes>
        <Route path='/' element={ <Home /> }/>
        
        <Route path='/conta/:id' element={ !isLoggedIn ? <Home /> : <Conta /> }/>
        <Route path='/containfo' element={ <ContaInfo /> }/>
        <Route path='/conta/:id/perfil' element={ !isLoggedIn ? <Home /> : <Perfil /> }/>

  </Routes>
    )
}

export default MainRoutes