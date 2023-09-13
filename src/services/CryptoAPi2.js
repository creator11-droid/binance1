import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BinanceApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_KEYS,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
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
