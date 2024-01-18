const express = require('express')
const router = express.Router()
const { createPlans, getPlansById, getAllPlans } = require('../db/helpers/plans')
const client = require('../db/client')

//get all plans /api/plans
router.get('/', async (req, res, next) => {
    try{
        const plans = await getAllPlans()
        res.send(plans)
    } catch (error){
        next(error)
    }
})
 
//get plans by ID
router.get('/:planID', async (req, res, next) => {
    try {
        const comment = await getPlansById(req.params.planID)
        res.send(comment)
    } catch(error){
        next(error)
    }
})

module.exports = router