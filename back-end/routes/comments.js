const express = require('express');
const router = express.Router();
const queries = require('../db/queries/comments')
const { loginRequired } = require('../auth/helpers')


router.get('/show/:show_id', loginRequired, async (req, res, next) => {
    try {
        let comments = await queries.getCommentByShowId(req.params.show_id)

        res.json({
            comments: comments,
            message: 'all comments retrieved',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            comments: null,
            message: 'you took a wrong turn',
            error: true
        })
    }
});

router.post('/', loginRequired, async (req, res, next) => {
    try {
        let newComment = await queries.addNewComment(req.body)

        res.json({
            comment: newComment,
            message: 'new comment added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            comment: null,
            message: 'comment could not be added',
            error: true
        })
    }
})

module.exports = router