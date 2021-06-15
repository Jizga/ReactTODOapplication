import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	return (
		<div className="row">
			{props.taskText ? (
				<div className="col-5 col-sm-6 col-md-6 col-lg-8 col-xl-8">
					{props.taskText}
					<hr></hr>
				</div>
			) : null}
			{props.taskText ? (
				<div className="col-1 col-sm-1 col-md-1 col-lg-2 col-xl-2">
					<i className="far fa-trash-alt"></i>
					<hr></hr>
				</div>
			) : null}
		</div>
	);
}

Task.propTypes = {
	taskText: PropTypes.string
};
