import { Tiingo } from "../src/api.ts";

const tiingo = new Tiingo("");

// tiingo.eod("HOOD").then(
//   (jsonData: any) => console.log(jsonData)
// );

// tiingo.eod("HOOD").then(data => console.log(data[0]['high']))

const nvda = await tiingo.eod({
  ticker: "SCHD",
});

console.log(await nvda.json());

// const nvda = await tiingo.ticker_meta('NVDA');

// console.log(await nvda.json().then(data => (data['description'])))

// const news = await tiingo.latestNews();

// console.log(await news.json());
