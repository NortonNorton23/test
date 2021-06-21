import recordsAPI from '../api/api';

export const clearInputs = () => (
	{ type: 'CLEAR_INPUTS' }
);
export const inputName = (text) => (
	{ type: 'INPUT_NAME', text }
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
export const addNewRecord = (name) => (
	(dispatch) => {
		recordsAPI.addRecord(name).then((response) => {
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
export const updateRecord = (id, name, isChecked) => (
	(dispatch) => {
		recordsAPI.updateRecordById(id, name, isChecked).then((response) => {
			if (response.statusText === 'OK') {
				dispatch(setRecordsFromAPI());
			}
		});
	}
);

const initialState = {
	records: [],
	inputNameText: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CLEAR_INPUTS':
			return {
				...state,
				inputNameText: '',
			};
		case 'INPUT_NAME':
			return {
				...state,
				inputNameText: action.text,
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
