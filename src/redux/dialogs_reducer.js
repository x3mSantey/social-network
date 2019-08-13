const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Vasya' },
            { id: 3, name: 'Igor' },
            { id: 4, name: 'Petr' },
            { id: 5, name: 'Switch' },
            { id: 6, name: 'NomaD' }
        ],
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'how, are you?' },
            { id: 3, message: 'Iam fine, thank you' }
        ],
        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_MESSAGE: 
            let newMessage =  {
                id: 4,
                message: action.message
            }
        
            state.messages.push(newMessage)
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message
            return state;
        default: 
            return state;
    }
}

export const addNewMessage = (text) => ({type: ADD_MESSAGE, message: text})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: text})

export default dialogsReducer;