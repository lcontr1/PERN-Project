const express = require('express')
const router = express.Router()
const { createComments, getAllComments, getCommentsById, updateComments, deleteComments } = require('../db/helpers/comments')
const client = require('../db/client')

//post a comment
router.post('/', async (req, res, next) => {
    try {
        const comment = await createComments(req.body)
        res.send(comment)
    } catch(error) {
        next(error)
    }
})

//get all /api/comments
router.get('/', async (req, res, next) => {
    try {
        const comments = await getAllComments()
        res.send(comments)
    } catch (error) {
        next(error)
    }
})

//get comment by ID /api/comments/commentID
router.get('/:commentID', async (req, res, next) => {
    try {
        const comment = await getCommentsById(req.params.commentID)
        res.send(comment)
    } catch(error) {
        next(error)
    }
})

//put update comment by ID /api/comments/commentID
//when testing put requests should be updated via the Body section in thunderclient
router.put('/:commentID', async (req, res, next) => {
    try {
        const comment = await updateComments(req.params.commentID, req.body)
        res.send(comment)
    } catch(error) {
        next(error)
    }
})

//delete comment by ID /api/comments/commentID
router.delete('/:commentID', async (req, res, next) => {
    try {
        const comment = await deleteComments(req.params.commentID)
        res.send(comment)
    } catch(error){
        next(error)
    }
})

 module.exports = router