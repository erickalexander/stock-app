class Adapter {
  static getStocks(){
    let stockUrl = []
    let techStocks = ["AAPL","TWTR","FB","AMZN","TSLA"]

    techStocks.map(ts => {
      // console.log("stocks",ts);
      // console.log(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ts}&apikey=SLI1JHDJXNXXPSGT`);

    stockUrl.push(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ts}&apikey=SLI1JHDJXNXXPSGT`)

   })

   console.log('s',stockUrl);

   return Promise.all(stockUrl.map(url =>
    fetch(url).then(res => res.json())
    ))

  }
}

export default Adapter
