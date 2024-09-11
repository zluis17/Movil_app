import { useContext, useState, useEffect, createContext, Children} from "react";

const AuthContext = createContext ()

export  const AuthProvider = ({Children}) =>{

    const [loading, setLoading] =  useState(false)
    const [user, setUser] = useState(null)
    const loginUser = () => {}
    const logoutUser = ()  => {}
    const registerUser = (userInfo) =>{}

    const contextData = {
        user 
    }
    return (
    <AuthContext.Provider value={contextData}>
        {loading ? <p> Loading...</P>: Children}
    </AuthContext.Provider>
    )
}

export default AuthContext