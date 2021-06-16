import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	// console.log("Lista PROPS", props.list);

	// //*** Intento de tachar la tarea hecha SIN props */
	// function taskDone(idTaskDone) {
	// 	console.log("id de la tarea hecha", idTaskDone);
	// 	return props.list.filter(task => {
	// 		if (task.id === idTaskDone) {
	// 			<p className="taskDone">{task.text}</p>;
	// 		} else {
	// 			<p>{task.text}</p>;
	// 		}
	// 	});
	// }

	return (
		// "no-gutters" elimina el espacio entre columnas de boostrap
		<div className="row no-gutters">
			{/* Asegurarse de que la tarea no esté vacía */}
			{props.taskText.trim() !== "" ? (
				<div className="col-5 col-sm-6 col-md-6 col-lg-8 col-xl-8 myTask">
					{/* {props.taskText} */}

					{props.taskDone.length > 0 ? (
						// <p style={{ textDecoration: "line - through" }}>
						<p className="taskDone">
							{console.log("Tarea hecha: ", props.taskDone)}
							{props.taskText}
						</p>
					) : (
						<p>{props.taskText}</p>
					)}
					<hr></hr>
				</div>
			) : null}

			{/* TACHAR LAS TAREAS HECHAS!! >--< */}
			{/* {props.taskDone.length > 0 ? (
				<div
					className="col-5 col-sm-6 col-md-6 col-lg-8 col-xl-8 myTask"
					style={{ textDecoration: "line - through" }}>
					{console.log(props.taskDone)} {props.taskDone.text}
					<hr></hr>
				</div>
			) : null} */}

			{props.taskText.trim() !== "" ? (
				<div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
					<div className="d-flex pt-2">
						<i
							className="far fa-trash-alt mr-4"
							onClick={() => props.deleteTask(props.id)}></i>

						<i
							className="fas fa-check"
							onClick={() => props.addTaskDone(props.id)}

							// //*** Intento de tachar la tarea hecha SIN props */
							// onClick={() => taskDone(props.id)}
						></i>
					</div>
					<hr></hr>
				</div>
			) : null}
		</div>
	);
}

Task.propTypes = {
	taskText: PropTypes.string,
	deleteTask: PropTypes.func,
	//Mis ids son de dos tipos, los de la lista de inicio son números y el resto son fechas (Date Object)
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	addTaskDone: PropTypes.func,
	taskDone: PropTypes.array
	// //*** Intento de tachar la tarea hecha SIN props */
	// list: PropTypes.array
};
