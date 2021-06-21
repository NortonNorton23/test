import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import st from './NewRecordInput.module.css';

const NewRecordInput = (props) => {
	const newNameText = (e) => {
		const name = e.target.value;
		props.inputName(name);
	};
	const addRecord = () => {
		props.addNewRecord(props.inputNameText);
	};
	const onKeyEnterAddRecord = (e) => {
		if (e.keyCode === 13) {
			addRecord();
		}
	};
	const { inputNameText } = props;
	return (
		<div className={st.main}>
			<TextField className={st.input} value={inputNameText} onChange={newNameText} onKeyDown={onKeyEnterAddRecord} id="outlined-basic" label="New task" variant="outlined" />
			<Button variant="contained" color="primary" onClick={addRecord}>
				Add task
			</Button>
		</div>
	);
};

NewRecordInput.propTypes = {
	inputName: PropTypes.func,
	addNewRecord: PropTypes.func,
	inputNameText: PropTypes.string,
};

NewRecordInput.defaultProps = {
	inputName: undefined,
	addNewRecord: undefined,
	inputNameText: '',
};

export default NewRecordInput;
