import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BinanceApiHeaders = {
  "X-RapidAPI-Key": "9e662d87c7mshdd36c800f5a6567p1403f5jsnef181d66f3d5",
  "X-RapidAPI-Host": "binance43.p.rapidapi.com",
};
const baseUrl = "https://binance43.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: BinanceApiHeaders });

export const binanceApi = createApi({
  reducerPath: "binanceApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCandleStick: builder.query({
      query: (interval) => createRequest(`klines/${interval}`),
    }),
  }),
});

export const { useGetCandleStickQuery } = binanceApi;
