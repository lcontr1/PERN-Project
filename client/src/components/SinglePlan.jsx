import { useFetchSinglePlanQuery } from "../api/woodworkingApi"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Comments from "./Comments"
import CreateCommentForm from "./CreateCommentForm"

function SinglePlan() {
    const { planID, commentID } = useParams()
    const { data = {}, error, isLoading } = useFetchSinglePlanQuery(planID)
    const navigate = useNavigate()
    if (isLoading) {
        return <div>Loading...</div>
    } if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>
    }
    
    function plansButton() {
      navigate('/plans')
    }
    return (
        <div>
        <button type='button' onClick={plansButton}>Back to all Plans</button>
            <div className="planBox" key={ data.planID }>
            <h3>{data.title}</h3>
             <img src={data.imgUrl} alt={data.title}/>
             <p>{data.description}</p>
             <a href={data.website}>Go to plan Website to see entire plan!</a>
             <div className="commentSection">
                <h3 style={{fontSize: '50px'}}>Comment Section</h3>
                <Comments  commentID={commentID} />
                <CreateCommentForm planID={planID}/>
            </div>
            </div>
        </div>
    )
}

export default SinglePlan