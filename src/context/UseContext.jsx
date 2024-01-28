import {createContext,useContext, useState} from "react"

export const UserContext = createContext(false);

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [generalData, setGeneralData] = useState(null);
    const [allData , setAllData] = useState({});

    return(
        <UserContext.Provider value={{user,setUser,generalData,setGeneralData,allData,setAllData}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;

export const useUserContext = () => useContext(UserContext);