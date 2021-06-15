import React, { useState } from "react";
import { Task } from "./Task";

export function TaskList() {
	const [inputTast, setInputTast] = useState("");
	const [list, setList] = useState([
		{
			id: 1,
			text: "Learn React"
		},
		{
			id: 2,
			text: "Learn Python"
		}
	]);

	function addNewTask(task) {
		setList([...list, { id: new Date(), text: task }]);
	}

	//Añadir la nueva tarea pulsando "Enter"
	function pressEnter(e) {
		if (e.key === "Enter") {
			addNewTask(inputTast);
			setInputTast("");
		}
	}

	return (
		<div className="container text-center mt-5 myListContainer">
			<div className="row d-flex flex-column">
				<h1 className="col-6 col-sm-7 col-md-7 col-lg-9 col-xl-9 mb-3">
					TODO App
				</h1>
				<div className="row mb-3">
					<input
						className="col-6 col-sm-7 col-md-7 col-lg-10 col-xl-10"
						type="text"
						//Recoger el valor del input y añadirlo a la lista
						onChange={e => setInputTast(e.target.value)}
						value={inputTast}
						//Añadir la nueva tarea pulsando "Enter"
						onKeyPress={e => pressEnter(e)}
						placeholder="No tasks, add a task"
					/>
				</div>
				<div>
					{list.map(task => {
						return <Task key={task.id} taskText={task.text} />;
					})}
				</div>
			</div>
		</div>
	);
}
