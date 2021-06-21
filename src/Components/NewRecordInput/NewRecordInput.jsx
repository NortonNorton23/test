import React from 'react';
import PropTypes from 'prop-types';
import st from './NewRecordInput.module.css';

const NewRecordInput = (props) => {
	const newNameText = (e) => {
		const name = e.target.value;
		props.inputName(name);
	};
	const newAgeText = (e) => {
		const age = e.target.value;
		props.inputAge(age);
	};
	const newEmailText = (e) => {
		const email = e.target.value;
		props.inputEmail(email);
	};
	const addRecord = () => {
		props.addNewRecord(props.inputNameText, props.inputAgeText, props.inputEmailText);
	};
	const onKeyEnterAddRecord = (e) => {
		if (e.keyCode === 13) {
			addRecord();
		}
	};
	const { inputNameText, inputAgeText, inputEmailText } = props;
	return (
		<form className={st.main}>
			<input value={inputNameText} onChange={newNameText} className={st.input} placeholder="Name" />
			<input type="number" value={inputAgeText} onChange={newAgeText} className={st.input} placeholder="Age" />
			<input type="email" value={inputEmailText} onChange={newEmailText} className={st.input} placeholder="E-mail" />
			<button type="button" className={st.btn} onClick={addRecord} onKeyDown={onKeyEnterAddRecord}>Add</button>
		</form>
	);
};

NewRecordInput.propTypes = {
	inputName: PropTypes.func,
	inputAge: PropTypes.func,
	inputEmail: PropTypes.func,
	addNewRecord: PropTypes.func,
	inputNameText: PropTypes.string,
	inputAgeText: PropTypes.string,
	inputEmailText: PropTypes.string,
};

NewRecordInput.defaultProps = {
	inputName: undefined,
	inputAge: undefined,
	inputEmail: undefined,
	addNewRecord: undefined,
	inputNameText: '',
	inputAgeText: '',
	inputEmailText: '',
};

export default NewRecordInput;
