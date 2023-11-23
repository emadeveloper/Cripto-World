import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b6bed08cdcmsh267fa9fc141cfd3p16083bjsn80081cef7262',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', cryptoApiHeaders['X-RapidAPI-Key']);
            headers.set('X-RapidAPI-Host', cryptoApiHeaders['X-RapidAPI-Host']);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const  {
    useGetCryptosQuery,
} = cryptoApi;

