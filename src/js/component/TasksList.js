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

	// **** 2º Método
	const [taskDone, setTaskDone] = useState([]);

	function addNewTask(task) {
		//'new Date()' para hacer el id único
		setList([...list, { id: new Date(), text: task }]);
	}

	//Añadir la nueva tarea pulsando "Enter"
	function pressEnter(e) {
		if (e.key === "Enter") {
			addNewTask(inputTast);
			setInputTast("");
		}
	}

	function deleteTask(idTask) {
		const newList = list.filter(task => task.id !== idTask);
		setList(newList);
	}

	//No tacha la tarea seleccionada
	function addTaskDone(idTaskDone) {
		// *** 2º Métdo
		list.filter(task => {
			if (task.id === idTaskDone) {
				setTaskDone([...taskDone, task]);
			}
		});

		// ======================================= 1º Método: SIN USAR ESTADOS PARA LAS TAREAS HECHAS ======================
		//**** Intenta hacer el tachado directamente con un tag de boostrap */
		//
		// let taskDone = list.filter(task => {
		// 	if (task.id === idTaskDone) {
		// 		console.log("Texto -- ", task.text);
		// 		<del>{task.text}</del>;
		// 	}
		// });

		//**** Intenta hacer el tachado usando el DOM de JS (Sólo tacha el primer elemento de la lista)*/
		//
		// if (taskDone[0]) {
		// 	console.log("Texto -- ", taskDone[0].text);

		// 	document.querySelector(".myTask").style.textDecorationLine =
		// 		"line-through";
		// }
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

				<div>
					{list.map(task => {
						return (
							<Task
								key={task.id}
								id={task.id}
								taskText={task.text}
								deleteTask={deleteTask}
								//Seleccionar las tareas hechas
								addTaskDone={addTaskDone}
								//2º método: para hacer que el componente hijo tache las tareas hechas
								taskDone={taskDone}
								// //*** 3º método: Intento de Tachar las tareas hechas haciendo la función de tachado en Task */
								// list={list}
							/>
						);
					})}
				</div>

				<div className="d-flex justify-content-start">
					<div className="taskLeft">{list.length} task left</div>
				</div>
			</div>
		</div>
	);
}
