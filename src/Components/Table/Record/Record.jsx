import React from 'react';
import st from './Record.module.css'

class Record extends React.Component {

	state = {
		isEdit: false,
		nameText: !this.props.data ? 'Name' : this.props.data.name,
		ageText: !this.props.data ? 'Age' : this.props.data.age,
		emailText: !this.props.data ? 'E-mail' : this.props.data.email
	}

	deleteRecordWithId = (e) => {
		let id = e.target.id
		this.props.deleteRecord(id)
	}
	edit = () => {
		this.setState({ isEdit: true })
	}
	noEdit = () => {
		this.setState({ isEdit: false })
		this.props.updateRecord(this.props.id, this.state.nameText, this.state.ageText, this.state.emailText)
	}
	changeNameText = (e) => {
		this.setState({
			nameText: e.target.value
		})
	}
	changeAgeText = (e) => {
		this.setState({
			ageText: e.target.value
		})
	}
	changeEmailText = (e) => {
		this.setState({
			emailText: e.target.value
		})
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.data.name !== this.props.data.name
			&& prevProps.data.age !== this.props.data.age
			&& prevProps.data.email !== this.props.data.email) {
			this.setState({
				nameText: this.props.data.name,
				ageText: this.props.data.age,
				emailText: this.props.data.email
			})
		}
	}
	render() {
		if (this.state.isEdit) {
			return (
				<div className={st.main} key={this.props.id}>
					<input onChange={this.changeNameText} type='text' value={this.state.nameText} className={st.input} />
					<input onChange={this.changeAgeText} type='number' value={this.state.ageText} className={st.input} />
					<input onChange={this.changeEmailText} type='email' value={this.state.emailText} className={st.input} />
					<button onClick={this.noEdit} className={st.btn}>Save</button>
				</div>
			)
		} else {
			return (
				<div className={st.main} key={this.props.id}>
					<div className={st.data}>
						<p className={st.name}>{!this.props.data ? 'name' : this.props.data.name}</p>
						<p className={st.name}>{!this.props.data ? 'age' : this.props.data.age}</p>
						<p className={st.name}>{!this.props.data ? 'email' : this.props.data.email}</p>
					</div>
					<button onClick={this.edit} className={st.btn}>Edit</button>
					<button onClick={this.deleteRecordWithId} id={this.props.id} className={st.btn}>Delete</button>
				</div>
			)
		}
	}
}

export default Record;