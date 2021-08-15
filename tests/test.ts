import { Tiingo } from "../src/api.ts";

const tiingo = new Tiingo("123");

// tiingo.eod("HOOD").then(
//   (jsonData: any) => console.log(jsonData)
// );

// tiingo.eod("HOOD").then(data => console.log(data[0]['high']))

const nvda = await tiingo.eod({
  ticker: "NVDA",
});

console.log(await nvda.json());
