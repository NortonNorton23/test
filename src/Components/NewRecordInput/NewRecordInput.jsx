import React from 'react';
import st from './NewRecordInput.module.css'

let NewRecordInput = (props) => {

	let newNameText = (e) => {
		let name = e.target.value;
		props.inputName(name)
	}
	let newAgeText = (e) => {
		let age = e.target.value;
		props.inputAge(age)
	}
	let newEmailText = (e) => {
		let email = e.target.value;
		props.inputEmail(email)
	}
	let addRecord = () => {
		props.addNewRecord(props.inputNameText, props.inputAgeText, props.inputEmailText)
	}

	return (
		<div className={st.main}>
			<input value={props.inputNameText} onChange={newNameText} className={st.input} placeholder='Name' />
			<input type='number' value={props.inputAgeText} onChange={newAgeText} className={st.input} placeholder='Age' />
			<input type='email' value={props.inputEmailText} onChange={newEmailText} className={st.input} placeholder='E-mail' />
			<button className={st.btn} onClick={addRecord} >Add</button>
		</div>
	)
}

export default NewRecordInput;