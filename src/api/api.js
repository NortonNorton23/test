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
	addRecord(name, age, email) {
		return baseUrl.post('/data', { data: { name, age, email } }).then((Response) => Response);
	},
	updateRecordById(id, name, age, email) {
		return baseUrl.patch(`/data/${id}`, { data: { name, age, email } }).then((Response) => Response);
	},
};

export default recordsAPI;
