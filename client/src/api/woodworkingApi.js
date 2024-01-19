import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const woodworkingApi = createApi({
    reducerPath: 'woodworkingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        prepareHeaders: (headers) => {
            headers.set('Content-type', 'application/json')
            return headers
        }
    }),
    endpoints: (build) => ({
        fetchPlans: build.query({
            query: () => '/plans',
        }),
        fetchSinglePlan: build.query({
            query: (planID) => `/plans/${planID}`
        }),
        fetchAuthors: build.query({
            query: () => '/authors'
        }),
        fetchSingleAuthor: build.query({
            query: (authorID) => `/authors/${authorID}`
        }),
        fetchComments: build.query({
            query: () => '/comments'
        }),
        fetchSingleComment: build.query({
            query: (commentID) => `/comments/${commentID}`
        }),
        createComment: build.mutation ({
            query: (data) => ({
                url: `/comments/${data.commentID}`,
                method: 'POST',
                body: JSON.stringify(data)
            })
        }),
        editComment: build.mutation ({
            query: (data) => ({
                url: `/comments/${data.commentID}`,
                method: 'PUT',
                body: JSON.stringify(data)
            })
        }),
        deleteComment: build.mutation ({
            query: (data) => ({
                url: `/comments/${data.commentID}`,
                method: 'DELETE'
            })
        }),
    })
})

export const { useFetchPlansQuery, useFetchSinglePlanQuery, useFetchAuthorsQuery, useFetchSingleAuthorQuery, useFetchCommentsQuery, useCreateCommentMutation, useEditCommentMutation, useDeleteCommentMutation  } = woodworkingApi