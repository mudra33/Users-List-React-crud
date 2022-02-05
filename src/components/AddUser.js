import React, { useState, useContext } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';

export const AddUser = () => {
	const [name, setName] = useState('');
	const { addUser } = useContext(GlobalContext);
	const history = useNavigate();

	const onSubmit = () => {
		const newUser = { id: uuid(), name: name };
		addUser(newUser);
		history('/');
	};
	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<Label>Name</Label>
				<Input
					type='text'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder='Enter Name:'
				></Input>
			</FormGroup>
			<Button type='Submit'>Submit</Button>
			<Link to='/' className='btn btn-danger ml-2'>
				Cancel
			</Link>
		</Form>
	);
};
