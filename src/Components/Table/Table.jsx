import React from 'react';
import PropTypes from 'prop-types';
import Record from './Record/Record';

class Table extends React.Component {
	render() {
		const {
			list,
			deleteRecord,
			updateRecord,
		} = this.props;
		return list.map((el) => (
			!el.data ? null
				: (
					<Record
						id={el.id}
						data={el.data}
						isChecked={el.isChecked}
						deleteRecord={deleteRecord}
						updateRecord={updateRecord}
					/>
				)));
	}
}

Table.propTypes = {
	list: PropTypes.arrayOf,
	deleteRecord: PropTypes.func,
	updateRecord: PropTypes.func,
};

Table.defaultProps = {
	list: [],
	deleteRecord: undefined,
	updateRecord: undefined,
};

export default Table;
