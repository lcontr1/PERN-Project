const client = require('../client')
const util = require('../util')

const createComments = async ({ date, content }) => {
    try{
        const { rows: [comment] } = await client.query(
            `
            INSERT INTO comment(date, content)
            VALUES($1, $2)
            RETURNING *;
            `, [date, content]
        )
        return comment
    }catch(error) {
        throw error
    }
}

const getAllComments = async() => {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM comments;
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}

//getCommentsById

//updateComments

//deleteComments

module.export = { createComments, getAllComments }