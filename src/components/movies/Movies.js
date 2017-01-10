import React from 'react';
import axios from 'axios';
import PouchDB from 'pouchdb';

export default class Movies extends React.Component{
    constructor(props){
        super(props);
				this.db = new PouchDB('movies');
				this.state={moviedata:[]};
				this.fetch=this.fetch.bind(this);
				this.clear=this.clear.bind(this);
				this.addmovie=this.addmovie.bind(this);
    }

		fetch(){
        const movieName=this.moviename.value;
        axios.get(`http://www.omdbapi.com/?s=${movieName}&page=1`)
        .then(response => {
            const moviedata=response.data.Search;
            this.setState({moviedata});
        })
        .catch(error => {
        console.log(error);
        });
    }
		clear(){
		this.setState({moviedata: []});
		}
		addmovie(event){
			const title=event.target.parentNode.parentNode.querySelector(".title").textContent;
			const year=event.target.parentNode.parentNode.querySelector(".year").textContent;
			const poster=event.target.parentNode.parentNode.querySelector(".poster").getAttribute("src");

		this.db.put({
			_id: title,
			year_movie: year,
		poster_movie: poster
		}).then(rsp => {
			console.log('rsp', rsp);
		}).catch(function (err) {
			console.log(err);
		});
		}
		componentDidMount(){
			this.db.allDocs({
				include_docs: true,
				attachments: true
			}).then(function (result) {
				console.log(result)
			}).catch(function (err) {
				console.log(err);
			});
		}
    render(){
        return(
            <div>
							<div>
							<h3>Movies</h3>
							<input ref={movie=>this.moviename=movie} type="text" placeholder="Search Movies" />
							<button onClick={this.fetch} className="btn btn-primary btn-xs">Search</button>
							 <button onClick={this.clear} className="btn btn-info btn-xs">Clear</button>
							</div><br/>
						<div className="panel panel-primary">
						<div className="panel-heading">Movie Details</div>
						<div className="panel-body">
							<table className="table table-striped">
								<thead>
								<tr>
									<th></th>
									<th>Title</th>
									<th>Year</th>
									<th>Poster</th>
								</tr>
								</thead>
								<tbody>
								{
									this.state.moviedata.map((m, i) => {
										return (
											<tr key={i}>
												<td><button className="btn btn-sucess btn-xs" onClick={this.addmovie}>Add</button></td>
												<td className="title"><label>{m["Title"]}</label></td>
												<td className="year"><label>{m["Year"]}</label></td>
												<td ><img  className="poster" src={m["Poster"]} height="200" width="200" alt="No Image"/></td>
											</tr>
										)
									})
								}
								</tbody>
  						</table>
						</div>
						</div>
						</div>
        );
    };
}