import {addNewMessage, updateNewMessageTextActionCreator} from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        newMessage: (text) => {
            dispatch(addNewMessage(text))
            dispatch(updateNewMessageTextActionCreator(''))
        }
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConteiner;