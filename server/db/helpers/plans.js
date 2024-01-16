const client = require('../client')


//create plan function

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

module.exports = { getAllPlans, getPlansById }