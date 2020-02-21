const db = require('../db')


const getCommentByShowId = async (showId) => {
    const queryStr = `SELECT 
                    comments.id,
                    username,comment_body ,users.avatar_url
                    FROM
                    comments 
                    JOIN users ON user_id = users.id
                    WHERE show_id = $1
                    ORDER BY comments.id DESC
                    `

    return await db.any(queryStr, [showId])
}


const addNewComment = async (commentObj) => {
    console.log(commentObj);

    const newCommentQStr = `INSERT INTO comments ( comment_body,user_id,show_id) 
                            VALUES($/comment_body/,$/user_id/,$/show_id/) RETURNING comment_body,user_id,show_id`

    return await db.one(newCommentQStr, {
        comment_body: commentObj.comment_body,
        user_id: commentObj.user_id,
        show_id: commentObj.show_id
    })
}


const updateComment = async (commentObj, id) => {

    console.log(commentObj);

    const updateCommentQtr = `UPDATE comments 
                            SET comment_body = $1 ,
                            edited = $2
                            WHERE id = $3
                            RETURNING   comment_body,user_id,show_id,edited`

    return await db.oneOrNone(updateCommentQtr, [commentObj, 'edited', Number(id)])



}
module.exports = {
    getCommentByShowId,
    addNewComment,
    updateComment
}