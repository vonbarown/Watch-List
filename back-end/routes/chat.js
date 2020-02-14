const express = require('express');
const router = express.Router();
const queries = require('../db/queries/chat')
// const { loginRequired } = require('../auth/helpers')

router.get('/:id', async (req, res, next) => {
    try {
        let chat = await queries.getMessagesByChatId(req.params.id)

        res.json({
            payload: chat,
            message: 'all chat retrieved',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you took a wrong turn',
            error: true
        })
    }
});

router.post('/', async (req, res, next) => {
    try {
        let newChat = await queries.addNewChat(req.body)
        console.log('new', newChat);

        res.json({
            payload: newChat,
            message: 'new chat instance created',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you can\'t perform this action',
            error: true
        })
    }
})


module.exports = router