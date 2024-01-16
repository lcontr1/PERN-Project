const client = require('../client')

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

module.export = { getAllComments }