import {Button, Label} from 'react-aria-components'
import React from 'react'
import {useCreateCommentMutation} from '../api/woodworkingApi'
import { useState } from 'react'

function CreateCommentForm ({ planID }) {
    const [content, setContent] = useState('')
    const [addNewComment, { isLoading }] = useCreateCommentMutation()
 
    if (isLoading) {
        return <div>Loading...</div>
    }

    const onButtonClick = async (e) => {
        e.preventDefault()
        try {
            await addNewComment({content, planID})
            setContent('')

        } catch(error) {
            console.error('Failed to post comment: ', error)
        }
    }

    return (
        <>
             <form method='post' onSubmit={onButtonClick}>
                <Label>Comment:</Label>
                <input type='text' placeholder='thoughts on this plan?' value={content} onChange={(e) => {setContent(e.target.value)}}></input>
                <Button className="button-1" role="button" type='submit'>comment</Button>
            </form>
        </>
    )
}

export default CreateCommentForm