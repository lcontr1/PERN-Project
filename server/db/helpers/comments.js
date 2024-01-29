const client = require('../client')
const util = require('../util')

const createComments = async ({ date, content, planID }) => {
    try{
        const { rows: [comment] } = await client.query(
            `
            INSERT INTO comments(content, "planID")
            VALUES($1, $2)
            RETURNING *;
            `, [content, planID]
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
const getCommentsById = async (commentID) => {
    try {
        const { rows: [comment] } = await client.query(`
        SELECT * FROM comments WHERE "commentID" = ${commentID};
        `
        )
        return comment
    }catch(error) {
        throw error
    }
}

//get comments by planID
const getCommentsbyPlanID = async (planID) => {
    try {
        const { rows } = await client.query(`
        SELECT * FROM comments WHERE "planID" = ${planID};
        `
        )
        return rows
    } catch (error) {
        throw error
    }
}

//update comments
const updateComments = async(commentID, fields) => {
    try {
        const toUpdate = {}
        for (let column in fields) {
            if (fields[column] !== undefined) toUpdate[column] = fields[column]
        }
        let comment
        if(util.dbFields(toUpdate).insert.length > 0) {
            const { rows } = await client.query(
                `
                UPDATE COMMENTS SET ${util.dbFields(toUpdate).insert} WHERE "commentID"=${commentID} RETURNING *;
                `, Object.values(toUpdate)
            )
            comment = rows[0]
        }
        return comment
    } catch(error) {
        throw error
    }
}
//delete comments
const deleteComments = async (commentID) => {
    try{
        const { rows } = await client.query(
            `
            DELETE FROM comments WHERE "commentID" = $1 RETURNING *;
            `, [commentID]
        )
        return rows[0]
    }catch(error) {
        throw error
    }
}

module.exports = { createComments, getAllComments, getCommentsById, getCommentsbyPlanID, updateComments, deleteComments }