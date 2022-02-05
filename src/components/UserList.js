import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const UserList = () => {
	const { users, removeUser } = useContext(GlobalContext);
	return (
		<ListGroup>
			{users.map((user) => (
				<ListGroupItem className='d-flex mt-4'>
					<strong>{user.name}</strong>
					<div className='ms-auto'>
						<Link className='btn btn-warning mx-1' to={`/edit/${user.id}`}>
							Edit
						</Link>
						<Button color='danger' onClick={() => removeUser(user.id)}>
							Delete
						</Button>
					</div>
				</ListGroupItem>
			))}
		</ListGroup>
	);
};
