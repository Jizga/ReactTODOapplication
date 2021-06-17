import React from "react";
import PropTypes from "prop-types";

export function TaskDone(props) {
	return (
		<div className="row no-gutters mt-2">
			{props.taskDoneList.map(task => {
				<div
					className="col-7 col-sm-8 col-md-8 col-lg-10 col-xl-10 myTask taskDone"
					key={task.id}>
					{task.text}
					{console.log("Texto tarea hecha -->> ", task.text)}
					<hr></hr>
				</div>;
				<div
					className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
					key={task.id}>
					<div className="d-flex pt-2">
						<i
							className="far fa-trash-alt mr-4"
							onClick={() => props.deleteTask(props.id)}></i>

						<i
							className="fas fa-check"
							onClick={() => {
								props.addTaskDone(props.id);
							}}></i>
					</div>
					<hr></hr>
				</div>;
			})}
		</div>
	);
}

TaskDone.propTypes = {
	//Mis ids son de dos tipos, los de la lista de inicio son números y el resto son fechas (Date Object)
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	deleteTask: PropTypes.func,
	addTaskDone: PropTypes.func,
	taskDoneList: PropTypes.array
};
