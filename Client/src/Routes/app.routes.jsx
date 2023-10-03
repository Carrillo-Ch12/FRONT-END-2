import { Routes,Route,Navigate } from "react-router-dom"
import Login from "../Pages/Login.jsx"
import Bliblioteca from "../Pages/Biblioteca.jsx"
import Error from "../Pages/Error.jsx"
export const AppRouter = props => {
  return (
    <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route exact path="/Biblioteca" element= {<Bliblioteca/>}/>
        <Route path="/*" element= {<Error/>}/>
    </Routes>
  )
}

