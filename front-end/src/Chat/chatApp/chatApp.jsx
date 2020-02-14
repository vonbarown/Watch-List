import React, { useEffect } from 'react'
import ChatHistory from '../chatHistory/chatHistory'
import ChatInput from '../chatInput/chatInput'
import { connect } from 'react-redux'
import axios from 'axios'
import { loadChatMessages } from '../../store/actions/chatActions'

const ChatApp = (props) => {

    useEffect(() => {
        const loadChatMessages = async () => {
            try {
                const { data: { payload } } = await axios.get(`/api/chat/${props.match.params.chatId}`)
                console.log(payload);
                props.loadChatMessages(payload);

            } catch (error) {

            }
        }
        loadChatMessages()
    })


    return (
        <>
            <ChatHistory />
            <ChatInput />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChatMessages: data => dispatch(loadChatMessages(data))
    }
}

export default connect(null, mapDispatchToProps)(ChatApp)