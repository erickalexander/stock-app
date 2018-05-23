import React, { Component } from 'react';
import Adapter from '../api/Adapter'
import StockList from './StockList'

export default class StockContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      stocks:[],
    }
  }
  componentDidMount(){
    Adapter.getStocks().then(res =>{
      console.log('cool',res);
      this.setState({
        stocks: res
      })
    })

  }

    render(){
      console.log("REDERING.........",this.state.stocks);

      return(
        <div>
        <StockList stocks={this.state.stocks} />
        </div>
      )
    }
}
// let newStocks = []
//   Adapter.getStocks().map(stock => {
//     stock.then(stocknew => newStocks.push(stocknew))
//     this.setState({
//       stocks: newStocks
//     })
//   })
