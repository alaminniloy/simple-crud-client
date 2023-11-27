// import { useRef } from "react";
import "./App.css";

function App() {
	// reset field
	// const formRef = useRef();

	const handleAddUser = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		console.log(user);

		// formRef.current.reset();

		fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert("Users added successfully");
					form.reset();
				}
			});
	};
	return (
		<>
			<h1>Simple Crud</h1>
			<form /* ref={formRef} */ onSubmit={handleAddUser}>
				<input type="text" name="name" placeholder="name" id="" />
				<br />
				<input type="email" name="email" placeholder="email" id="" />
				<br />
				<input type="submit" value="Add User" />
			</form>
		</>
	);
}

export default App;
