import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import { deleteRecord, setRecordsFromAPI, updateRecord } from '../../redux/reducer';

class TableContainer extends React.Component {
	componentDidMount() {
		const {
			setRecordsFromAPI,
		} = this.props;
		setRecordsFromAPI();
	}

	componentDidUpdate(prevProps) {
		const {
			setRecordsFromAPI,
			records,
		} = this.props;
		if (prevProps.records.length !== records.length) {
			setRecordsFromAPI();
		}
	}

	render() {
		const {
			records,
			deleteRecord,
			updateRecord,
		} = this.props;
		return (
			<Table
				list={records}
				deleteRecord={deleteRecord}
				updateRecord={updateRecord}
			/>
		);
	}
}

TableContainer.propTypes = {
	records: PropTypes.arrayOf,
	deleteRecord: PropTypes.func,
	updateRecord: PropTypes.func,
	setRecordsFromAPI: PropTypes.func,
};

TableContainer.defaultProps = {
	records: [],
	deleteRecord: undefined,
	updateRecord: undefined,
	setRecordsFromAPI: undefined,
};

const mapStateToProps = (state) => (
	{
		records: state.reducer.records,
	}
);

export default connect(mapStateToProps, {
	deleteRecord,
	setRecordsFromAPI,
	updateRecord,
})(TableContainer);
