import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	return (
		// "no-gutters" elimina el espacio entre columnas de boostrap
		<div className="row no-gutters mt-2">
			{props.done === false ? (
				<>
					<div className="col-7 col-sm-8 col-md-8 col-lg-10 col-xl-10 myTask">
						{props.taskText}
						<hr></hr>
					</div>

					<div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
						<div className="d-flex pt-2">
							<i
								className="far fa-trash-alt mr-4"
								onClick={() => props.deleteTask(props.id)}></i>

							<i
								className="fas fa-check fa-lg"
								onClick={() => {
									props.addTaskDone(props.id);
								}}></i>
						</div>
						<hr></hr>
					</div>
				</>
			) : (
				<>
					<div className="col-7 col-sm-8 col-md-8 col-lg-10 col-xl-10 myTask">
						{props.taskText}
						<hr></hr>
					</div>

					<div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
						<div className="d-flex pt-2">
							<i
								className="far fa-trash-alt mr-4"
								onClick={() => props.deleteTask(props.id)}></i>

							<i
								className="fas fa-times fa-lg"
								onClick={() => props.dontDone(props.id)}></i>
						</div>
						<hr></hr>
					</div>
				</>
			)}
		</div>
	);
}

Task.propTypes = {
	taskText: PropTypes.string,
	deleteTask: PropTypes.func,
	//Mis ids son de dos tipos, los de la lista de inicio son números y el resto son fechas (Date Object)
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	done: PropTypes.bool,
	addTaskDone: PropTypes.func,
	taskDoneList: PropTypes.array,
	dontDone: PropTypes.func
};
