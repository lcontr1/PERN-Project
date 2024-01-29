const client = require('./client')

const { comments, plans, authors } = require('./seedData')


//drop existing tables - For dropping/creating the tables, you’ll be using client.query, where client is our postgres setup coming from a client.js file in our DB folder
const dropTables = async () => {
    try{
        
        console.log('Starting to drop tables')
        await client.query(`
        DROP TABLE IF EXISTS comments;
        DROP TABLE IF EXISTS authors;
        DROP TABLE IF EXISTS plans;
        
        `)
        console.log('Tables dropped!')
    }catch (error){
        console.log('Error dropping tables')
        throw error
    }
}

//create tables with the right data types and restrictions
const createTables = async () => {
   try { 
    console.log('building tables...')
    await client.query(`
    
    CREATE TABLE plans (
        "planID" SERIAL PRIMARY KEY,
        "imgUrl" TEXT NOT NULL,
        title varchar(255) NOT NULL,
        description TEXT NOT NULL,
        website varchar(255)
    );
    CREATE TABLE comments (
        "commentID" SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        "planID" INTEGER REFERENCES plans("planID") NOT NULL
    );
    CREATE TABLE authors (
        "authorID" SERIAL PRIMARY KEY,
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        bio text NOT NULL,
        "isProfessional" BOOLEAN NOT NULL,
        "planID" INTEGER REFERENCES plans("planID") NOT NULL
    );
 
  
    
    `)
    console.log("tables built!")
    //write it as datakey - use "" if using camelCase then data type and if required write NOT NULL(doesnt need to be on a primary key). needs to go in order as seed data. foreign key has a REFERENCES to the table it is referencing and the name of the column (will also have a NOT NULL). 

    //if write something wrong when creating table then drop the table and recreate it
    } catch (error) {
        console.error(error)
    }

}


//populate the tables - Populating will rely on importing functions and routes that we have not made yet, so feel free to either name them and their files here, or put placeholders
//create comments
const createInitialComments = async () => {
    try {
        console.log('starting comments')
       for (const comment of comments) {
        const {
            rows: [comments]
        } = await client.query(
            `
            INSERT INTO comments(content, "planID")
            VALUES ($1, $2, $3);
            `, [comment.content, comment.planID]
            )
       }
       console.log("created comments")
    }catch (error) {
        throw error
    }
}

//placeholder for all other comment route options

//create plans
const createInitialPlans = async () => {
    try {
        console.log("starting plans")
        for (const plan of plans) {
            const {
                rows: [plans]
            } = await client.query(
                `
                INSERT INTO plans("imgUrl", title, description, website)
                VALUES ($1, $2, $3, $4);
                `, [plan.imgUrl, plan.title, plan.description, plan.website]
            )
        }
        console.log("created plans!")
    }catch(error){

    }
}


//create authors
const createInitialAuthors = async() => {
    try{
        console.log("starting authors")
        for (const author of authors) {
            const {
                rows: [authors]
            } = await client.query(
                `
                INSERT INTO authors(firstname, lastname, bio, "isProfessional", "planID")
                VALUES($1, $2, $3, $4, $5);
                `, [author.firstname, author.lastname, author.bio, author.isProfessional, author.planID]
            )
        }
        console.log("created authors!")
    }catch(error){
        throw error
    }
}
//placeholder for all other author route options

//Call all the functions to build my database - its an async function

const buildDb = async () => {
    try {
        console.log("starting the build")
        //Connect to the local database
        client.connect()

        //run our functions
        await dropTables()
        await createTables()

        await createInitialPlans()
        await createInitialComments()
        await createInitialAuthors()

    } catch (error){
        console.log('Error buildDb')
        throw error
        //finally will always run, whether the catch triggers or not
    } finally {
        client.end()
    }

}

buildDb()