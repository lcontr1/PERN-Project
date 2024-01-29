const express = require('express')
const router = express.Router()
const { createComments, getAllComments, getCommentsById, getCommentsbyPlanID, updateComments, deleteComments } = require('../db/helpers/comments')
const client = require('../db/client')

//post a comment
router.post('/', async (req, res, next) => {
    try {
        const { content, planID } = req.body
        const comment = await createComments({content, planID})
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

// get comment by planID joing two different tables
router.get('/:planID', async (req, res, next) => {
    try {
        const comment = await getCommentsbyPlanID(req.params.planID)
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