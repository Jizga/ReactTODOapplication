import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	return (
		<div className="row">
			{/* Asegurarse de que la tarea no esté vacía */}
			{props.taskText.trim() !== "" ? (
				<div className="col-5 col-sm-6 col-md-6 col-lg-8 col-xl-8">
					{props.taskText}
					<hr></hr>
				</div>
			) : null}
			{props.taskText.trim() !== "" ? (
				<div className="col-1 col-sm-1 col-md-1 col-lg-2 col-xl-2">
					<i
						className="far fa-trash-alt"
						onClick={() => props.deleteTask(props.id)}></i>
					<hr></hr>
				</div>
			) : null}
		</div>
	);
}

Task.propTypes = {
	taskText: PropTypes.string,
	deleteTask: PropTypes.func,
	//Mis ids son de dos tipos, los de la lista de inicio son números y el resto son fechas (Object Date)
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};
