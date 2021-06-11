import React from 'react';
import { connect } from 'react-redux';
import NewRecordInput from './NewRecordInput';
import { addNewRecord, inputName, inputAge, inputEmail } from '../../redux/reducer'

class NewRecordInputContainer extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<NewRecordInput
				addNewRecord={this.props.addNewRecord}
				inputName={this.props.inputName}
				inputAge={this.props.inputAge}
				inputEmail={this.props.inputEmail}
				inputNameText={this.props.inputNameText}
				inputAgeText={this.props.inputAgeText}
				inputEmailText={this.props.inputEmailText}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		inputNameText: state.reducer.inputNameText,
		inputAgeText: state.reducer.inputAgeText,
		inputEmailText: state.reducer.inputEmailText,
	}
}

export default connect(mapStateToProps, { addNewRecord, inputName, inputAge, inputEmail })(NewRecordInputContainer);