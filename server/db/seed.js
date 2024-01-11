const clinet = require('./client')

const { createUser, getAllUsers } = require('./helpers/users')
const { createComments } = require('./helpers/comments')
const { createPlans, getPlanById } = require('.helpers/plans')
const { createPlanAuthors } = require('./helpers/planAuthors')

const{ users, comments, plans, planAuthors } = require('./seedData')
const client = require('./client')
//drop existing tables - For dropping/creating the tables, you’ll be using client.query, where client is our postgres setup coming from a client.js file in our DB folder
const dropTables = async () => {
    try{
        console.log('Starting to drop tables')
        await client.query('
        ')
    }catch (error){
        console.log('Error dropping tables')
        throw error
    }
}

//create tables with the right data types and restrictions

//populate the tables - Populating will rely on importing functions and routes that we have not made yet, so feel free to either name them and their files here, or put placeholders
