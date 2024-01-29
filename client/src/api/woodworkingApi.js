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
    tagTypes: ['Comments'],
    endpoints: (build) => ({
        fetchPlans: build.query({
            query: () => '/plans',
        }),
        fetchSinglePlan: build.query({
            query: (planID) => `/plans/${planID}`,
            providesTags: ['Comments']
        }),
        fetchAuthors: build.query({
            query: () => '/authors'
        }),
        fetchSingleAuthor: build.query({
            query: (authorID) => `/authors/${authorID}`
        }),
        fetchComments: build.query({
            query: () => '/comments',
            providesTags: ['Comments']
        }),
        fetchCommentbyPlanID: build.query({
            query: (planID) => `/comments/${planID}`,
            providesTags: ['Comments']
        }),
        fetchSingleComment: build.query({
            query: (commentID) => `/comments/${commentID}`
        }),
        createComment: build.mutation ({
            query: (data) => ({
                url: '/comments',
                method: 'POST',
                body: {...data}
            }),
            invalidatesTags: ['Comments']
        }),
        editComment: build.mutation ({
            query: (data) => ({
                url: `/comments/${data.commentID}`,
                method: 'PUT',
                body: {...data}
            })
        }),
        deleteComments: build.mutation ({
            query: (data) => ({
                url: `/comments/${data.commentID}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Comments']
        }),
    })
})

export const { useFetchPlansQuery, useFetchSinglePlanQuery, useFetchAuthorsQuery, useFetchSingleAuthorQuery, useFetchCommentbyPlanIDQuery, useFetchCommentsQuery, useCreateCommentMutation, useEditCommentMutation, useDeleteCommentsMutation  } = woodworkingApi