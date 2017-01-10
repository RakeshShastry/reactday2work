import React from 'react';
import jsonp from 'jsonp';

export default class Conversion extends React.Component{
  constructor(props){
    super(props);
    this.state={finalResult:0};
    this.convertCurrency=this.convertCurrency.bind(this);
    this.currencyList=["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","GBP","HKD","HRK","HUF","IDR","ILS","INR","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","ZAR","EUR","USD","INR"]
  }
  convertCurrency(){
    const fromRate = this.fromcur.value;
    const toRate = this.tocur.value;
    const amount = (+this.amount.value > 0)?+this.amount.value:0;
    jsonp(`http://api.fixer.io/latest?base=${fromRate}`, null ,(err,data) => {
      if(err){
        console.log(err);
      } else {
        const currExRate=data.rates[toRate];
        const finalResult=(+currExRate)*amount;
        this.setState({finalResult});
      }
    })
  }
    render(){
        return(
          <div>
            <div className="panel panel-primary">
              <div className="panel-body">
                  <h1>Conversion</h1>
                  <span> From:</span> <select ref={fromnode => this.fromcur=fromnode}>{this.currencyList.map((a,b)=><option value={a} key={b}>{a}</option>)}</select>
                  <span> To:</span> <select ref={tonode => this.tocur=tonode}>{this.currencyList.map((c,d)=><option value={c} key={d}>{c}</option>)}</select>
                  <span> Amount:</span><input ref={amt => this.amount=amt} type ="text"   placeholder="Amount" />
                  <button onClick={this.convertCurrency} className="btn btn-danger">Convert</button>
                </div>
                </div>
                <div className="panel panel-primary">
                <div className="panel-body">
                  <h1>{this.state.finalResult}</h1>
              </div>
            </div>
          </div>
        );
    }
};