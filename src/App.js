import React, { Component } from 'react';
import './App.css';
import NewRecordInputContainer from './Components/NewRecordInput/NewRecordInputContainer';
import TableContainer from './Components/Table/TableContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NewRecordInputContainer />
				<TableContainer />
			</div>
		);
	}
}

export default App;
