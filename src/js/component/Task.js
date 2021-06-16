import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	return (
		// "no-gutters" elimina el espacio entre columnas de boostrap
		<div className="row no-gutters">
			{/* Asegurarse de que la tarea no esté vacía */}
			{props.taskText.trim() !== "" ? (
				<div className="col-5 col-sm-6 col-md-6 col-lg-8 col-xl-8 myTask">
					{props.taskText}
					<hr></hr>
				</div>
			) : null}
			{props.taskText.trim() !== "" ? (
				<div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
					<div className="d-flex pt-2">
						<i
							className="far fa-trash-alt mr-4"
							onClick={() => props.deleteTask(props.id)}></i>

						<i
							className="fas fa-check"
							onClick={() => props.addTaskDone(props.id)}></i>
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
	addTaskDone: PropTypes.func
};
