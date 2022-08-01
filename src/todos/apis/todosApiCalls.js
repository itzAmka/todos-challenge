const BASE_URL = 'http://localhost:3000';

export const getTodos = async () => {
	const res = await axios.get(`${BASE_URL}/todos`);
	return res.data;
};

export const addTodo = async newTodo => {
	const res = await axios.post(`${BASE_URL}/todos`, newTodo);
	return res.data;
};

export const updateTodo = async (id, updateTitle) => {
	const res = await axios.put(`${BASE_URL}/todos/${id}`, {
		title: updateTitle,
		completed: false,
	});
	return res.data;
};

export const completeTodo = async id => {
	const res = await axios.patch(`${BASE_URL}/todos/${id}`, {
		completed: true,
	});
	return res.data;
};

export const deleteTodo = async id => {
	const res = await axios.delete(`${BASE_URL}/todos/${id}`);
	return res.data;
};