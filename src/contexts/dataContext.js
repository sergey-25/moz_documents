import React, {createContext, useContext, useEffect, useState} from "react";
import apiCall from "../api/api";



export const Context = createContext(null);
export const ContextProvider = ({children}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {

            const response = await apiCall('/photos', 'get', null);
            setData(response.data)
        }
        fetchData()
    }, []);



    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = () => {
        setAnchorEl(true);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Context.Provider
            value={{
                data,
                setData,
                handleClick,
                handleClose,
                open,
                anchorEl,
                id
            }}>
            {children}
        </Context.Provider>
    )
};

export const useStateContext =()=> useContext(Context)