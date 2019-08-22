import axios from "axios";
const contactUrl = "http://localhost:8080/api/contacts";


export const addContacts = (contact) => { 
    return (dispatch) => {
        axios.post(contactUrl, contact)
        .then(response => {
            dispatch({type: "ADD_CONTACTS"});
        })
        .catch((err) => {
            console.error(err);
            return err;
        })
    }

}

const contactsReducer = (prevState = [], action) => {
    switch(action.type) {
        case "ADD_CONTACTS": 
            return [...prevState, action.contacts]
        default: 
            return prevState;
    }

}


export default contactsReducer;