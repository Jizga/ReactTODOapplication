import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	return (
		<div className="row">
			<div className="col-5 col-sm-6 col-md-6 col-lg-8 col-xl-8 bg-danger">
				{props.taskText}
			</div>
			<div className="col-1 col-sm-1 col-md-1 col-lg-2 col-xl-2 bg-warning">
				<i class="far fa-trash-alt"></i>
			</div>
		</div>
	);
}

Task.propTypes = {
	taskText: PropTypes.string
};
