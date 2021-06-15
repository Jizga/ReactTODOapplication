import React, { useState } from "react";
import { Task } from "./Task";

export function TaskList() {
	const [newTask, setNewTask] = useState("");

	const tasks = [
		{
			id: 1,
			text: "Learn React"
		},
		{
			id: 2,
			text: "Learn Python"
		}
		// {
		// 	id: new Date().getMilliseconds(),
		// 	text: newTask
		// }
	];

	// let list = tasks.map(t => {
	// 	console.log("task ", t, typeof t);
	// 	return <Task key={t.id} taskText={t.text} />;
	// });

	let addNewTask = [
		...tasks,
		{ id: new Date().getMilliseconds(), text: newTask }
	];

	let list = addNewTask.map(t => {
		console.log("task ", t, typeof t);
		return <Task key={t.id} taskText={t.text} />;
	});

	return (
		<div className="container text-center mt-5 myListContainer">
			<div className="row d-flex flex-column">
				<h1 className="col-6 col-sm-7 col-md-7 col-lg-9 col-xl-9 mb-3">
					TO DO App
				</h1>
				<div className="row mb-3">
					<input
						className="col-6 col-sm-7 col-md-7 col-lg-10 col-xl-10"
						type="text"
						onChange={e => setNewTask(e.target.value)}
						value={newTask}
						placeholder="No tasks, add a task"
					/>
				</div>
				<div>{list}</div>
			</div>
		</div>
	);
}
