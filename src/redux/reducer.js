import recordsAPI from '../api/api';

export const clearInputs = () => (
	{ type: 'CLEAR_INPUTS' }
);
export const inputName = (text) => (
	{ type: 'INPUT_NAME', text }
);
export const inputAge = (text) => (
	{ type: 'INPUT_AGE', text }
);
export const inputEmail = (text) => (
	{ type: 'INPUT_EMAIL', text }
);
export const setRecords = (records) => (
	{ type: 'SET_RECORDS', records }
);

export const setRecordsFromAPI = () => (
	(dispatch) => {
		recordsAPI.getAllRecords().then((data) => {
			dispatch(setRecords(data));
		});
	}
);
export const addNewRecord = (name, age, email) => (
	(dispatch) => {
		recordsAPI.addRecord(name, age, email).then((response) => {
			if (response.statusText === 'Created') {
				dispatch(clearInputs());
				dispatch(setRecordsFromAPI());
			}
		});
	}
);
export const deleteRecord = (id) => (
	(dispatch) => {
		recordsAPI.deleteRecordById(id).then((response) => {
			if (response.data) {
				dispatch(clearInputs());
				dispatch(setRecordsFromAPI());
			}
		});
	}
);
export const updateRecord = (id, name, age, email) => (
	(dispatch) => {
		recordsAPI.updateRecordById(id, name, age, email).then((response) => {
			if (response.statusText === 'OK') {
				dispatch(setRecordsFromAPI());
			}
		});
	}
);

const initialState = {
	records: [],
	inputNameText: '',
	inputAgeText: '',
	inputEmailText: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CLEAR_INPUTS':
			return {
				...state,
				inputNameText: '',
				inputAgeText: '',
				inputEmailText: '',
			};
		case 'INPUT_NAME':
			return {
				...state,
				inputNameText: action.text,
			};
		case 'INPUT_AGE':
			return {
				...state,
				inputAgeText: action.text,
			};
		case 'INPUT_EMAIL':
			return {
				...state,
				inputEmailText: action.text,
			};
		case 'SET_RECORDS':
			return {
				...state,
				records: action.records,
			};
		default:
			return state;
	}
};

export default reducer;
