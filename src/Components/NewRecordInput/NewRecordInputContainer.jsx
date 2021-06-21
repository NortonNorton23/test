import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewRecordInput from './NewRecordInput';
import {
	addNewRecord, inputName, inputAge, inputEmail,
} from '../../redux/reducer';

class NewRecordInputContainer extends React.Component {
	componentDidMount() {
	}

	render() {
		const {
			inputNameText,
			inputAgeText,
			inputEmailText,
			inputName,
			addNewRecord,
			inputAge,
			inputEmail,
		} = this.props;
		return (
			<NewRecordInput
				addNewRecord={addNewRecord}
				inputName={inputName}
				inputAge={inputAge}
				inputEmail={inputEmail}
				inputNameText={inputNameText}
				inputAgeText={inputAgeText}
				inputEmailText={inputEmailText}
			/>
		);
	}
}

NewRecordInputContainer.propTypes = {
	inputName: PropTypes.func,
	inputAge: PropTypes.func,
	inputEmail: PropTypes.func,
	addNewRecord: PropTypes.func,
	inputNameText: PropTypes.string,
	inputAgeText: PropTypes.string,
	inputEmailText: PropTypes.string,
};

NewRecordInputContainer.defaultProps = {
	inputName: undefined,
	inputAge: undefined,
	inputEmail: undefined,
	addNewRecord: undefined,
	inputNameText: '',
	inputAgeText: '',
	inputEmailText: '',
};

const mapStateToProps = (state) => (
	{
		inputNameText: state.reducer.inputNameText,
		inputAgeText: state.reducer.inputAgeText,
		inputEmailText: state.reducer.inputEmailText,
	}
);

export default connect(mapStateToProps, {
	addNewRecord,
	inputName,
	inputAge,
	inputEmail,
})(NewRecordInputContainer);
