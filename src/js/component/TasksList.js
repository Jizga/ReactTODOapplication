import React, { useState } from "react";
import { Task } from "./Task";

export function TaskList() {
	const [inputTask, setInputTask] = useState("");
	const [toDoList, setToDoList] = useState([
		{
			id: 1,
			text: "Learn React",
			done: false
		},
		{
			id: 2,
			text: "Learn Python",
			done: false
		}
	]);

	const [taskDoneList, setTaskDoneList] = useState([]);

	function addNewTask(task) {
		if (inputTask.trim() !== "") {
			//'new Date()' para hacer el id único
			setToDoList([
				...toDoList,
				{ id: new Date(), text: task, done: false }
			]);
		}
	}

	//Añadir la nueva tarea pulsando "Enter"
	function pressEnter(e) {
		if (inputTask.trim() !== "") {
			if (e.key === "Enter") {
				addNewTask(inputTask);
				setInputTask("");
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
					task.done = true;

					//Se mete en su lista (tareas hechas)
					setTaskDoneList([...taskDoneList, task]);

					//Sacar las tareas hechas de la toDoLista de tareas
					let indexTaskDone = toDoList.indexOf(task);
					toDoList.splice(indexTaskDone, 1);

					//Actualizar la lista de tareas no hechas
					setToDoList(toDoList);
				}
			});
		}
	}

	//Devolver la tarea a tareas pendientes
	function dontDone(idTask, done) {
		if (done === true) {
			taskDoneList.filter(task => {
				if (task.id === idTask) {
					task.done = false;

					//Se mete en su lista de verdad, las no hechas
					setToDoList([...toDoList, task]);

					//Sacar la tarea que al final no se hizo de taskDoneList
					let indexTask = toDoList.indexOf(task);
					taskDoneList.splice(indexTask, 1);

					//Actualizar la lista de tareas hechas
					setTaskDoneList(taskDoneList);
				}
			});
		}
	}

	return (
		<div className="container text-center mt-5 mb-5 pt-3 pb-5 d-flex justify-content-center rounded myListContainer">
			<div className="p-0 m-0 myContainer">
				<div className="row">
					<h1 className="col-9 col-sm-10 col-md-10 col-lg-12 col-xl-12 mb-3 mt-2">
						TODO App
					</h1>
				</div>

				<div className="row mb-4">
					<input
						className="col-9 col-sm-10 col-md-10 col-lg-12 col-xl-12 border-0 rounded-pill text-center"
						type="text"
						//Recoger el valor del input y añadirlo a la lista
						onChange={e => setInputTask(e.target.value)}
						value={inputTask}
						//Añadir la nueva tarea pulsando "Enter"
						onKeyPress={e => pressEnter(e)}
						placeholder="No tasks, add a task"
						autoFocus
					/>
				</div>

				<div className="row d-flex">
					<div className="d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
						<h4 className="col-8 col-sm-9 col-md-9 col-lg-12 col-xl-12 taskTitle">
							To do tasks
						</h4>
						{toDoList.map(task => {
							return (
								<Task
									key={task.id}
									id={task.id}
									taskText={task.text}
									done={task.done}
									deleteTask={deleteTask}
									addTaskDone={addTaskDone}
									taskDoneList={taskDoneList}
									dontDone={dontDone}
								/>
							);
						})}

						<div className="d-flex justify-content-start">
							<div className="taskLeft">
								{toDoList.length} task left
							</div>
						</div>
					</div>

					<div className="d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
						<h4 className="col-8 col-sm-9 col-md-9 col-lg-12 col-xl-12 taskTitle">
							Done tasks
						</h4>
						{taskDoneList.map(task => {
							return (
								<Task
									key={task.id}
									id={task.id}
									taskText={task.text}
									done={task.done}
									deleteTask={deleteTask}
									addTaskDone={addTaskDone}
									taskDoneList={taskDoneList}
									dontDone={dontDone}
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

			{/* </div> */}
		</div>
	);
}
