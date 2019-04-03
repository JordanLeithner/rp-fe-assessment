import React, { Component } from 'react'
import '../../scss/styles.css'
import LaunchEntry from '../launchentry/launchentry';
import HeaderNav from '../headernav/headernav';

class App extends Component { 
	constructor(props) {  //when object is first used
		super(props);  //iniitializes everything for component
		this.state = {
			launches: [],
			header: [],
			filter: {
				success: true,
				reused: false,
				reddit: true
			},
			pendingFilter: {
				success: true,
				reused: false,
				reddit: true
			}
		};
		//this.state.filter.success = false;
		//this.state.filter['success'] = true;
		//const x = 'success';
		//this.state.filter[x] = false;
	}


	componentDidMount() { 
		fetch ('https://api.spacexdata.com/v2/launches')
			.then (resp => {
				resp.json()
					.then( data => {
						this.setState ({
							launches: data  //calling information with state "Launches" and calls the data it has from API
						});
		
						console.log(data);
					}); //object that contains result of above as a JSON object
			});
	}

	doRefresh() {
		const stateCopy = Object.assign({}, this.state);
		stateCopy.filter = Object.assign({}, this.state.pendingFilter);
		this.setState(stateCopy);
	};

	render() {
		return (
			<div id="app" className="page-wrapper">
				<h1>SpaceX Launches</h1>
				
				<div className="panel nav">
					<HeaderNav filter = {this.state.filter} filterChange = {(filterName, isChecked) => {
						const stateCopy = Object.assign({}, this.state);  //copies attributes into something else. Cant just change inline, becasue React wont know something changed
						stateCopy.pendingFilter[filterName] = isChecked;
						console.log('filterHandler', {filterName, isChecked, stateCopy});
						this.setState(stateCopy);
					}}
					
					doRefresh = {() => this.doRefresh()} />

				</div>

				<div className="panel">
					<div class="tableRow tableHeader">
						<div class="small">Badge</div>
						<div class="med">Rocket Name</div>
						<div class="med">Rocket Type</div>
						<div class="med">Launch Date</div>
						<div class="large">Details</div>
						<div class="small">ID</div>
						<div class="small">Article</div>
					</div>
				</div>

				<div className="panel">
					{this.state.launches.map(launchEntry => {
						return <LaunchEntry entry = {launchEntry} filter = {this.state.filter} />  //pulls in LaunchEntry.js
					} )}
				</div>
			</div>
		)
	}
}

export default App
