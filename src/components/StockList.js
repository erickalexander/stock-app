import React from 'react'

const StockList = (props) =>
{
  console.log('props',props);

  return(
    <div>
    {
      props.stocks ? props.stocks.map(st =>{
        console.log('st',st);
        let symbol = st["Meta Data"]["2. Symbol"]
        let currentDate = st["Meta Data"]["3. Last Refreshed"]
        let lastPrice = st["Time Series (Daily)"]
        let openPrice = lastPrice[currentDate]["1. open"]
        let closePrice = lastPrice[currentDate]["4. close"]

        console.log('ccc',);
        console.log('jjj', symbol);
        console.log(currentDate);
        return (
          <div>
          <h1>{symbol}</h1>
          <h2>Current Day: {currentDate}</h2>
          <h2>Open: {openPrice}</h2>
          <h2>Close: {closePrice}</h2>
          </div>
        )
      }):null
    }

    </div>
  )
}

export default StockList


// allStocks ? allStocks.map(st =>{
//   console.log('st',st);
//   let obj = st["Meta Data"]
//   for(var key in obj){
//     if (key == "2. Symbol"){
//       console.log("NAME",obj[key]);
//       return (<h1>{obj[key]}</h1>)
//     }
//   }
// }):null
