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

 // This is the place where we load the data we get from an API, to be used throughout components by setting state
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

// code to make request every 3 seconds, will se live updates:
// ------------------------------------------------------------
// async componentDidMount() {
//          try {
//            setInterval(async () => {
//              Adapter.getStocks().then(res =>{
//                console.log('cool',res);
//                this.setState({
//                  stocks: res
//                })
//              })
//            }, 3000);
//          } catch(e) {
//            console.log('eeeee',e);
//          }
//    }
// ------------------------------------------------------------
