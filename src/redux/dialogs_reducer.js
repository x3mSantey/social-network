const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {

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