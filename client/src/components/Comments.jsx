import { useDeleteCommentsMutation, useFetchCommentbyPlanIDQuery } from "../api/woodworkingApi";
import React from "react";
import { useParams } from "react-router-dom";
// import { EditCommentForm } from "./EditCommentsForm";

function Comments() {
    const { planID, commentID } = useParams()

    const {data={}, error, isLoading } = useFetchCommentbyPlanIDQuery(planID)
    const [deleteComment, { isLoading: isDeleting } ] = useDeleteCommentsMutation(commentID)
    
    if (isLoading || isDeleting) {
        return <div>Loading...</div>
    } if (error) {
        return <div>Error:{error.message}</div>
    }

    async function deleteButton(commentID){
        try{
            await deleteComment({commentID})
        } catch (error) {
            console.error(error)
        }
    }

   
    return (
        <>
        {data.map((comment) => (
                <div className='commentBox' key={ comment.planID  } >
                <p>{comment.content}
                <button className="button-1" role="button" type='button' onClick={() => deleteButton(comment.commentID)} >delete</button>
                </p></div>

            )
        )}


       
        </>
    )
}

export default Comments