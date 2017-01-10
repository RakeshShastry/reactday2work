import React from 'react';
import axios from 'axios';

export default class Random extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[]};
        this.fetch=this.fetch.bind(this);
    }
    fetch(){
        const num=this.number.value;
        axios.get(`https://qrng.anu.edu.au/API/jsonI.php?length=${num}&type=uint8`)
        .then(response => {
            const data=response.data.data;
            this.setState({data});
        })
        .catch(error => {
        console.log(error);
        });
    }
    render(){
        return(
            <div>
                <h1>Random</h1>
                <input ref={node => this.number = node} type="number" />
                <button onClick={this.fetch} className="btn btn-danger btn-xs">Generator</button>
                <div>
                    <ul>
                        {
                        this.state.data.map((nums,index) => <li key={index}>{nums}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
};