import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMessage, updateNewMessageTextActionCreator} from '../../redux/dialogs_reducer';


const Dialogs = (props) => { 

    let dialogsElments = props.dialogsPage.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map( (m) => <Message message={m.message}/>)

    let textMessage = React.createRef()
    

    let newMessage = () => {

        let text = textMessage.current.value
        props.dispatch(addNewMessage(text))
        props.dispatch(updateNewMessageTextActionCreator(''))
        textMessage.current.value = null
    }

    let onMessageChange = () => {
        let text = textMessage.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

   

    return (
        <div className={s.conteiner}>
            <div className={s.dialog_items}>
                {dialogsElments}
            </div>
            <div className={s.message_items}>
                {messagesElements}
                <textarea ref={textMessage} placeholder="Write your message" onChange={onMessageChange} />
                <button onClick={newMessage} >New message</button>
            </div>
        </div>
    )
}

export default Dialogs;