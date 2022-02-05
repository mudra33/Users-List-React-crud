import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	users: [{ id: 1, name: 'User One Added Default' }],
};

//create Context

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const removeUser = (id) => {
		dispatch({
			type: 'REMOVE_USER',
			payload: id,
		});
	};

	const addUser = (user) => {
		dispatch({
			type: 'ADD_USER',
			payload: user,
		});
	};
	const editUser = (user) => {
		dispatch({
			type: 'EDIT_USER',
			payload: user,
		});
	};
	return (
		<GlobalContext.Provider
			value={{ users: state.users, removeUser, addUser, editUser }}
		>
			{' '}
			{children}{' '}
		</GlobalContext.Provider>
	);
};
