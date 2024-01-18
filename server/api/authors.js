const express = require('express')
const router = express.Router()
const { getAllAuthors, getAuthorById } = require('../db/helpers/authors')
const client = require('../db/client')

//get all authors /api/authors
router.get('/', async(req, res, next) => {
    try{
        const authors = await getAllAuthors()
        res.send(authors)
    }catch(error) {
        next(error)
    }
})

//get author by id /api/authors/authorID
router.get('/:authorID', async(req, res, next) => {
    try{
        const author = await getAuthorById(req.params.authorID)
        res.send(author)
    }catch(error){
        next(error)
    }
})


module.exports = router