import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { ARTICLES_API } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { t_article } from "@/type";


type ArticlesResponse = t_article[] | null

const articleSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes: ["Article"],
    endpoints: (build) => ({
        getArticles: build.query<ArticlesResponse, void>({
            query: () => 'articles',
        }),
        getArticleById: build.query<ArticlesResponse, void>({
            query: id => `/articles/${id}`,

        }),

        createArticle: build.mutation<t_article, Partial<t_article>>({
            query: initialPost => ({
                url: "/articles",
                method: "POST",
                body: {
                    ...initialPost,

                }
            }),
            invalidatesTags: [
                { type: 'Article', id: "LIST" }
            ]
        }),
        deleteArticle: build.mutation<t_article, Partial<t_article>>({
            query(id) {
                return {
                    url: `articles`,
                    method: 'DELETE',
                    id,
                }
            },
        }),
    })

})


export const {
    useGetArticlesQuery,
    useLazyGetArticleByIdQuery

} = articleSlice