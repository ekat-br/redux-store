import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  
  reducerPath: 'productsApi',
  baseQuery: (fetchBaseQuery({ baseUrl: '/'})), //naseURL /, da die lokale Datei im Root-Verzeichnis des Projektes liegt
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => 'data/products.json'
    })
  })
})


export const { useGetAllProductsQuery } = apiSlice