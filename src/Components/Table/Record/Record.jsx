import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
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
			isChecked: !data ? false : data.isChecked,
		};
	}

	componentDidUpdate(prevProps) {
		const {
			data,
		} = this.props;
		if (prevProps.data !== data) {
			this.state = {
				nameText: data.name,
				isChecked: data.isChecked,
			};
		}
	}

	deleteRecordWithId = (e) => {
		const {
			deleteRecord,
		} = this.props;
		const {
			id,
		} = e.currentTarget;
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
			isChecked,
		} = this.state;
		this.setState({ isEdit: false });
		updateRecord(id, nameText, isChecked);
	}

	changeNameText = (e) => {
		this.setState({
			nameText: e.target.value,
		});
	}

	toggleIsChecked = () => {
		const {
			id,
			updateRecord,
		} = this.props;
		const {
			nameText,
			isChecked,
		} = this.state;
		this.setState({ isEdit: false });
		updateRecord(id, nameText, !isChecked);
	};

	saveRecordOnEnter = (e) => {
		if (e.keyCode === 13) {
			this.noEdit();
		}
	};

	render() {
		const {
			isEdit,
			nameText,
		} = this.state;
		const {
			id,
			data,
		} = this.props;
		if (isEdit) {
			return (
				<div className={st.main} key={id}>
					<Checkbox
						checked={data.isChecked}
						inputProps={{ 'aria-label': 'primary checkbox' }}
						onChange={this.toggleIsChecked}
					/>
					<TextField className={st.input} value={nameText} onChange={this.changeNameText} onKeyDown={this.saveRecordOnEnter} onBlur={this.noEdit} id="outlined-basic" variant="outlined" />
					<Button
						variant="contained"
						color="secondary"
						startIcon={<DeleteIcon />}
						onClick={this.deleteRecordWithId}
						id={id}
					>
						Delete
					</Button>
				</div>
			);
		} return (
			<div className={st.main} key={id}>
				<Checkbox
					checked={data.isChecked}
					inputProps={{ 'aria-label': 'primary checkbox' }}
					onChange={this.toggleIsChecked}
				/>
				<ListItemText
					className={st.input}
					primary={!data ? 'name' : data.name}
					onClick={this.edit}
				/>
				<Button
					variant="contained"
					color="secondary"
					startIcon={<DeleteIcon />}
					onClick={this.deleteRecordWithId}
					id={id}
				>
					Delete
				</Button>
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
