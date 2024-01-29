import { useNavigate, useParams } from "react-router-dom"
import { useFetchSingleAuthorQuery } from "../api/woodworkingApi"
import React from "react"

function SingleAuthor() {
    const { authorID } = useParams()
    const { data={}, error, isLoading } = useFetchSingleAuthorQuery(authorID)
    const navigate = useNavigate()
    if (isLoading) {
        return <div>Loading...</div>
    } if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>
    }
   
    function authorsButton() {
        navigate('/authors')
    }
    
    return (
        <div>
            <button type='button' onClick={authorsButton}>Back to all Woodworkers</button>
            <div className="woodworkerBox" key={data.authorID}>
                <h3 style={{fontSize: '50px'}}>{data.firstname} {data.lastname}</h3>
                <p>{data.bio}</p>
            </div>
        </div>
    )
}

export default SingleAuthor