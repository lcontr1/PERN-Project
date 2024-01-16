const client = require('../client')

const getAllAuthors = async() => {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM authors;
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}

const getAuthorById = async (authorID) => {
    try{
        const { rows: [author] } = await client.query(
            `
            SELECT * FROM authors
            WHERE "authorID" = ${authorID}; 
            `
        )
        return author;
    }catch(error) {
        throw error
    }
}

module.exports = { getAllAuthors, getAuthorById }