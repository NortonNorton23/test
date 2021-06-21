import * as axios from 'axios';

const baseUrl = axios.create({
	baseURL: 'http://localhost:3000',
});

const recordsAPI = {
	getAllRecords() {
		return baseUrl.get('/data').then((Response) => Response.data);
	},
	deleteRecordById(id) {
		return baseUrl.delete(`/data/${id}`).then((Response) => Response);
	},
	addRecord(name) {
		return baseUrl.post('/data', { data: { name, isChecked: false } }).then((Response) => Response);
	},
	updateRecordById(id, name, isChecked) {
		return baseUrl.patch(`/data/${id}`, { data: { name, isChecked } }).then((Response) => Response);
	},
};

export default recordsAPI;
