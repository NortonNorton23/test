import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewRecordInput from './NewRecordInput';
import { addNewRecord, inputName } from '../../redux/reducer';

class NewRecordInputContainer extends React.Component {
	componentDidMount() {
	}

	render() {
		const {
			inputNameText,
			inputName,
			addNewRecord,
		} = this.props;
		return (
			<NewRecordInput
				addNewRecord={addNewRecord}
				inputName={inputName}
				inputNameText={inputNameText}
			/>
		);
	}
}

NewRecordInputContainer.propTypes = {
	inputName: PropTypes.func,
	addNewRecord: PropTypes.func,
	inputNameText: PropTypes.string,
};

NewRecordInputContainer.defaultProps = {
	inputName: undefined,
	addNewRecord: undefined,
	inputNameText: '',
};

const mapStateToProps = (state) => (
	{
		inputNameText: state.reducer.inputNameText,
	}
);

export default connect(mapStateToProps, { addNewRecord, inputName })(NewRecordInputContainer);
