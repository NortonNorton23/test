import * as axios from 'axios';

let baseUrl = axios.create({
	baseURL: 'http://178.128.196.163:3000',
})

export const recordsAPI = {
	getAllRecords() {
		return baseUrl.get(`/api/records`).then(Response => Response.data)
	},
	deleteRecordById(id) {
		return baseUrl.delete(`/api/records/${id}`).then(Response => Response)
	},
	addRecord(name, age, email) {
		return baseUrl.put(`/api/records`, { data: { name: name, age: age, email: email } }).then(Response => Response)
	},
	updateRecordById(id, name, age, email) {
		return baseUrl.post(`/api/records/${id}`, { data: { name: name, age: age, email: email } }).then(Response => Response)
	}
}