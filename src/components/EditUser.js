import React, { useState, useContext, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';

export const EditUser = (props) => {
	const [selectedUser, setSelectedUser] = useState({
		id: '',
		name: '',
	});
	const { users, editUser } = useContext(GlobalContext);
	const history = useNavigate();
	const id = useParams();
	useEffect(() => {
		const userId = id;
		console.log(userId);
		const selectedUse = users.find((user) => user.id == userId.id);
		setSelectedUser(selectedUse);
	}, [id, users]);

	const onSubmit = () => {
		editUser(selectedUser);
		history('/');
	};
	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<Label>Name</Label>
				<Input
					type='text'
					name='name'
					value={selectedUser.name}
					onChange={(e) => {
						setSelectedUser({
							...selectedUser,
							[e.target.name]: e.target.value,
						});
					}}
				></Input>
			</FormGroup>
			<Button type='Submit'>Edit Name</Button>
			<Link to='/' className='btn btn-danger ml-2'>
				Cancel
			</Link>
		</Form>
	);
};
