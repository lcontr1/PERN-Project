import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: true,
    msg: '',
    error:'',
    commentID: '',
    content: '',
}
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        editComment(state, action) {
            const {commentID, content} = action.payload
            const existingComment = state.find(comment => comment.commentID === commentID)
            if (existingComment) {
                existingComment.content = content
            }
        }
    }
})

export const { editComment } = commentsSlice.actions

export default commentsSlice.reducer