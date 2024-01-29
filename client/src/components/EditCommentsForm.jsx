import React, { useState } from "react";
import { useEditCommentMutation } from "../api/woodworkingApi";
// import { UseSelector } from "react-redux";

export const EditCommentForm =  ({ commentID }) => {
    // const comment = useSelector(state => state.content.find(content => content.commentID === commentID))
    // console.log(comment)
    const [content, setContent] = useState(initialState.content)
    const [editComment, {isLoading}] = useEditCommentMutation()
    
    if(isLoading) {
        return <div>Loading...</div>
    }
    
    const onEditCommentClick = async (e) => {
        e.preventDefault()
        if(content) {
            try {
                await editComment({content, commentID})
            } catch (error) {
                console.error('Failed to edit comment:', error)
            }
            
        }
    }
    return(
        <>
        <h2>Edit Comment</h2>
        <form>
            <label method='put'>Comment:</label>
            <input type='text' placeholder="thoughts?" value={content} onChange={(e) => {setContent(e.target.value)}}></input>
        </form>
        <button type='button' onClick={onEditCommentClick}>Save Comment</button>
        </>
    )
}

export default EditCommentForm