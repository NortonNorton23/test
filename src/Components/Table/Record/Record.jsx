import React from 'react';
import PropTypes from 'prop-types';
import st from './Record.module.css';

class Record extends React.Component {
	constructor(props) {
		super(props);
		const {
			data,
		} = this.props;
		this.state = {
			isEdit: false,
			nameText: !data ? 'Name' : data.name,
			ageText: !data ? 'Age' : data.age,
			emailText: !data ? 'E-mail' : data.email,
		};
	}

	componentDidUpdate(prevProps) {
		const {
			data,
		} = this.props;
		if (prevProps.data.name !== data.name
			&& prevProps.data.age !== data.age
			&& prevProps.data.email !== data.email) {
			this.state = {
				nameText: data.name,
				ageText: data.age,
				emailText: data.email,
			};
		}
	}

	deleteRecordWithId = (e) => {
		const {
			deleteRecord,
		} = this.props;
		const {
			id,
		} = e.target;
		deleteRecord(id);
	}

	edit = () => {
		this.setState({ isEdit: true });
	}

	noEdit = () => {
		const {
			id,
			updateRecord,
		} = this.props;
		const {
			nameText,
			ageText,
			emailText,
		} = this.state;
		this.setState({ isEdit: false });
		updateRecord(id, nameText, ageText, emailText);
	}

	changeNameText = (e) => {
		this.setState({
			nameText: e.target.value,
		});
	}

	changeAgeText = (e) => {
		this.setState({
			ageText: e.target.value,
		});
	}

	changeEmailText = (e) => {
		this.setState({
			emailText: e.target.value,
		});
	}

	render() {
		const {
			isEdit,
			nameText,
			ageText,
			emailText,
		} = this.state;
		const {
			id,
			data,
		} = this.props;
		if (isEdit) {
			return (
				<div className={st.main} key={id}>
					<input onChange={this.changeNameText} type="text" value={nameText} className={st.input} />
					<input onChange={this.changeAgeText} type="number" value={ageText} className={st.input} />
					<input onChange={this.changeEmailText} type="email" value={emailText} className={st.input} />
					<button type="button" onClick={this.noEdit} className={st.btn}>Save</button>
				</div>
			);
		} return (
			<div className={st.main} key={id}>
				<div className={st.data}>
					<p className={st.name}>{!data ? 'name' : data.name}</p>
					<p className={st.name}>{!data ? 'age' : data.age}</p>
					<p className={st.name}>{!data ? 'email' : data.email}</p>
				</div>
				<button type="button" onClick={this.edit} className={st.btn}>Edit</button>
				<button type="button" onClick={this.deleteRecordWithId} id={id} className={st.btn}>Delete</button>
			</div>
		);
	}
}

Record.propTypes = {
	data: PropTypes.shape,
	deleteRecord: PropTypes.func,
	id: PropTypes.string,
	updateRecord: PropTypes.func,
};

Record.defaultProps = {
	data: undefined,
	deleteRecord: undefined,
	id: '',
	updateRecord: undefined,
};

export default Record;
