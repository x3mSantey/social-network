import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {

    _state: {

        profilePage: {
            posts: [
                { message: 'hi, how are you?', like: 14, dislike: 7 },
                { message: 'Its my posts', like: 9, dislike: 2 },
                { message: 'Iam good!', like: 20, dislike: 5 },
                { message: 'New post :)', like: 12, dislike: 0 }
            ],
            newPostText: ''
            
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Vasya' },
                { id: 3, name: 'Igor' },
                { id: 4, name: 'Petr' },
                { id: 5, name: 'Vanya' },
                { id: 6, name: 'NomaD' }
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'how, are you?' },
                { id: 3, message: 'Iam fine, thank you' }
            ],
            newMessageText: ''
        }
        
    },
    _callSubscriber() {
        console.log('changes')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
    

}


export default store;
window.store = store;