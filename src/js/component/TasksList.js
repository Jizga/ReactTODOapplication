import React, { useState } from "react";
import { Task } from "./Task";
import { TaskDone } from "./TaskDone";

export function TaskList() {
	const [inputTast, setInputTast] = useState("");
	const [toDoList, setToDoList] = useState([
		{
			id: 1,
			text: "Learn React"
		},
		{
			id: 2,
			text: "Learn Python"
		}
	]);

	const [taskDoneList, setTaskDoneList] = useState([]);

	function addNewTask(task) {
		if (inputTast.trim() !== "") {
			//'new Date()' para hacer el id único
			setToDoList([...toDoList, { id: new Date(), text: task }]);
		}
	}

	//Añadir la nueva tarea pulsando "Enter"
	function pressEnter(e) {
		if (inputTast.trim() !== "") {
			if (e.key === "Enter") {
				addNewTask(inputTast);
				setInputTast("");
			}
		}
	}

	function deleteTask(idTask) {
		const newtoDoList = toDoList.filter(task => task.id !== idTask);
		setToDoList(newtoDoList);
	}

	//Tareas hechas
	function addTaskDone(idTaskDone) {
		if (taskDoneList !== []) {
			toDoList.filter(task => {
				if (task.id === idTaskDone) {
					setTaskDoneList([...taskDoneList, task]);

					//Sacar las tareas hechas de la toDoLista de tareas
					let indexTaskDone = toDoList.indexOf(task);
					toDoList.splice(indexTaskDone, 1);
					setToDoList(toDoList);
				}
			});
		}
	}

	return (
		<div className="container text-center mt-5 mb-5 myListContainer">
			<div className="row d-flex flex-column myListRow">
				<div className="d-flex">
					<div className="hole"></div>
					<div className="hole ml-2"></div>
				</div>
				<div className="d-flex justify-content-end">
					<div className="hole"></div>
					<div className="hole ml-2 mr-4"></div>
				</div>
				<h1 className="col-6 col-sm-7 col-md-7 col-lg-9 col-xl-9 mb-3 mt-2">
					TODO App
				</h1>

				<div className="row mb-4">
					<input
						className="col-6 col-sm-7 col-md-7 col-lg-10 col-xl-10 border-0 rounded-pill text-center"
						type="text"
						//Recoger el valor del input y añadirlo a la lista
						onChange={e => setInputTast(e.target.value)}
						value={inputTast}
						//Añadir la nueva tarea pulsando "Enter"
						onKeyPress={e => pressEnter(e)}
						placeholder="No tasks, add a task"
						autoFocus
					/>
				</div>

				<div className="d-flex col-8 col-sm-9 col-md-10 col-lg-10 col-xl-10">
					<div className="row d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
						<h4 className="col-8 col-sm-9 col-md-9 col-lg-12 col-xl-12">
							To do tasks
						</h4>
						{toDoList.map(task => {
							return (
								<Task
									key={task.id}
									id={task.id}
									taskText={task.text}
									deleteTask={deleteTask}
									//Seleccionar las tareas hechas
									addTaskDone={addTaskDone}
									//Para hacer que el componente hijo tache las tareas hechas
									taskDoneList={taskDoneList}
								/>
							);
						})}

						<div className="d-flex justify-content-start">
							<div className="taskLeft">
								{toDoList.length} task left
							</div>
						</div>
					</div>

					<div className="row d-flex flex-column col-2 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
						<h4 className="col-8 col-sm-9 col-md-9 col-lg-12 col-xl-12">
							Done tasks
						</h4>
						{toDoList.map(task => {
							return (
								<TaskDone
									key={task.id}
									id={task.id}
									deleteTask={deleteTask}
									//Seleccionar las tareas hechas
									addTaskDone={addTaskDone}
									//Para hacer que el componente hijo tache las tareas hechas
									taskDoneList={taskDoneList}
								/>
							);
						})}

						<div className="d-flex justify-content-start mt-1">
							<div className="taskLeft">
								{taskDoneList.length} task done
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
