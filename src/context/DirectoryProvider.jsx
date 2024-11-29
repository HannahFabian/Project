import React, {createContext, useContext, useReducer} from "react";
import contacts from "../data/data";

const DirectoryContext = createContext();

function DirectoryProvider({children}){
    //const [data, setData] = useState([...contacts]);
    const initialState = {
        contacts,
        filter : ""
    }
    const [state, dispatch] = useReducer(DirectoryReducer, initialState);
    return(
        <DirectoryContext.Provider value = {{state, dispatch}}>
            {children}
        </DirectoryContext.Provider>
    );
}

function useMyContext(){
    return useContext(DirectoryContext);
}

function addContact(dispatch, newContact){
    dispatch({
        type: ADD_CONTACT,
        payload: newContact
    });
}

export default DirectoryProvider;
export {useMyContext, addContact};