const fetchTodoList = async () => {
	try {
		await fetch("http://localhost:3000")
			.then((response) => response.json())
			.then((data) => data);
	} catch (error) {
		console.log(error);
	}
};
