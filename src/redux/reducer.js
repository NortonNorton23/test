import { recordsAPI } from '../api/api'

export const clearInputs = () => {
	return { type: 'CLEAR_INPUTS' }
}
export const inputName = (text) => {
	return { type: 'INPUT_NAME', text: text }
}
export const inputAge = (text) => {
	return { type: 'INPUT_AGE', text: text }
}
export const inputEmail = (text) => {
	return { type: 'INPUT_EMAIL', text: text }
}
export const setRecords = (records) => {
	return { type: 'SET_RECORDS', records }
}

export const setRecordsFromAPI = () => {
	return (dispatch) => {
		recordsAPI.getAllRecords().then(data => {
			dispatch(setRecords(data))
		})
	}
}
export const addNewRecord = (name, age, email) => {
	return (dispatch) => {
		recordsAPI.addRecord(name, age, email).then(response => {
			if (response.statusText === "OK") {
				dispatch(clearInputs())
				dispatch(setRecordsFromAPI())
			}
		})
	}
}
export const deleteRecord = (id) => {
	return (dispatch) => {
		recordsAPI.deleteRecordById(id).then(response => {
			if (response.data) {
				dispatch(clearInputs())
				dispatch(setRecordsFromAPI())
			}
		})
	}
}
export const updateRecord = (id, name, age, email) => {
	return (dispatch) => {
		recordsAPI.updateRecordById(id, name, age, email).then(response => {
			if (response.statusText === "OK") {
				dispatch(setRecordsFromAPI())
			}
		})
	}
}

let initialState = {
	records: [],
	inputNameText: '',
	inputAgeText: '',
	inputEmailText: '',
}

let reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CLEAR_INPUTS':
			return {
				...state,
				inputNameText: '',
				inputAgeText: '',
				inputEmailText: ''
			}
		case 'INPUT_NAME':
			return {
				...state,
				inputNameText: action.text
			}
		case 'INPUT_AGE':
			return {
				...state,
				inputAgeText: action.text
			}
		case 'INPUT_EMAIL':
			return {
				...state,
				inputEmailText: action.text
			}
		case 'SET_RECORDS':
			return {
				...state,
				records: action.records
			}
		default:
			return state
	}
}

export default reducer;