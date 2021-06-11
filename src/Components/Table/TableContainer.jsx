import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import { deleteRecord, setRecordsFromAPI, updateRecord } from '../../redux/reducer'

class TableContainer extends React.Component {
	componentDidMount() {
		this.props.setRecordsFromAPI()
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.records.length !== this.props.records.length) {
			this.props.setRecordsFromAPI()
		}
	}
	render() {
		return (
			<Table
				list={this.props.records}
				deleteRecord={this.props.deleteRecord}
				updateRecord={this.props.updateRecord}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		records: state.reducer.records,
	}
}

export default connect(mapStateToProps, { deleteRecord, setRecordsFromAPI, updateRecord })(TableContainer);