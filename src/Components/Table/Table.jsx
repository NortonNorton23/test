import React from 'react';
import Record from './Record/Record';

class Table extends React.Component {
	render() {
		return this.props.list.map(el => (
			!el.data ? null :
				<Record
					id={el._id}
					data={el.data}
					deleteRecord={this.props.deleteRecord}
					updateRecord={this.props.updateRecord} />
		))
	}
}

export default Table;