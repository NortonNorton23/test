import React from 'react';
import './App.css';
import NewRecordInputContainer from './Components/NewRecordInput/NewRecordInputContainer';
import TableContainer from './Components/Table/TableContainer';

const App = () => (
	<div className="App">
		<NewRecordInputContainer />
		<TableContainer />
	</div>
);

export default App;
