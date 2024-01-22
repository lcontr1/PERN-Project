import { useFetchAuthorsQuery } from "../api/woodworkingApi"
import React from "react"
import { Link } from "react-router-dom"


function Authors() {
    const { data = {}, error, isLoading } = useFetchAuthorsQuery()

    if (isLoading) {
        return <div>Loading..</div>
    } if (error) {
        return <div>Error: {error.message}</div>
    }

    console.log(data)

    return (
        <>
        <h2>These are the woodworkers:</h2>
            {data.map
                (
                    (author) =>
                    {
                        return (
                            <div key={author.authorID}>
                                <h3>{author.firstname} {author.lastname}</h3>
                                <p>{author.bio}</p>
                                <nav>
                                    <Link to={`/authors/${author.authorID}`}>Woodworker Details</Link>
                                </nav>
                            </div>
                        )
                    }   
                )
            }

        </>
    )
}

export default Authors