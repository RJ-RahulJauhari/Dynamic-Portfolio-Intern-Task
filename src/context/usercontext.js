import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [data,setData] = useState("Nothing");
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        herodata()
    },[])

    const herodata = async () => {
        try {
            const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
            const info = response.data;
            if (info) {
                console.log(info);
                setData(info.user);
                setLoading(false);
                console.log(data)
            } else {
                throw new Error("Data not found");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return <UserContext.Provider value={{data,setData,loading}}>
        {children}
    </UserContext.Provider>
}