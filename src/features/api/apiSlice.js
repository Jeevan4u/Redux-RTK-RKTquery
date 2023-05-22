import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath : 'todoApi',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3500'}),
    tagTypes: ['Todos'],
    endpoints : (builder) =>({
        getTodos: builder.query({
            query : () => '/users',
            transformResponse : res => res.sort((a,b)=> b.id - a.id),
            providesTags: ['Todos'],
        }),
        getUserById : builder.query({
            query : (id) => `/users/${id}` 
        }),
        postUsers : builder.mutation({
            query : (data)=>{
                return {
                    url : "/users",
                    method : 'POST',
                    body : data
                }},
                invalidatesTags:['Todos']
              
                
        })
    })
})

export const {useGetTodosQuery,useGetUserByIdQuery,usePostUsersMutation} = apiSlice
 