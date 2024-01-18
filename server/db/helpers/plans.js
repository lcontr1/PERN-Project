const client = require('../client')


//create plan function
const createPlans = async({ imgUrl, title, description, website }) => {
    try {
        const { rows: [plan] } = await client.query(
            `
            INSERT INTO plans ("imgUrl", title, description, website) VALUES($1, $2, $3, $4) RETURNING *;
            `, [imgUrl, title, description, website]
        )
        return plan
    } catch (error) {
        throw error
    }
}

const getAllPlans = async() => {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM plans;
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}

const getPlansById = async(planID) => {
    try {
        const { rows: [plan] } = await client.query(
            `
            SELECT * FROM plans
            WHERE "planID" = ${planID};
            `
        )
        return plan;
    } catch (error) {
        throw error
    }
}

module.exports = { createPlans, getAllPlans, getPlansById }