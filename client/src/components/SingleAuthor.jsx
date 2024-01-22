import { useParams } from "react-router-dom"
import { useFetchSingleAuthorQuery } from "../api/woodworkingApi"
import React from "react"


function SingleAuthor() {
    const { authorID } = useParams()
    const { data={}, error, isLoading } = useFetchSingleAuthorQuery(authorID)

    if (isLoading) {
        return <div>Loading...</div>
    } if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>
    }
    console.log(data)
    return (
        <div>
            <div key={data.authorID}>
                <h3>{data.firstname} {data.lastname}</h3>
                <p>{data.bio}</p>
            </div>
        </div>
    )
}

export default SingleAuthor