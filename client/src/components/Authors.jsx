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

   

    return (
        <>
        <h2>These are the woodworkers:</h2>
            {data.map
                (
                    (author) =>
                    {
                        return (
                            <div className="woodworkers" key={author.authorID}>
                                <h3 style={{fontSize: '50px'}}>{author.firstname} {author.lastname}</h3>
                                <p>{author.bio}</p>
                                <nav>
                                    <Link style={{ backgroundColor: '#e3d477', fontWeight: 'bold', color: '#e8b38c', lineHeight : 5, padding: 20 }} to={`/authors/${author.authorID}`}>Woodworker Details</Link>
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