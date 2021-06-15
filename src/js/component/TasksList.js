import React from "react";
import { Task } from "./Task";

export function TaskList() {
	return (
		<div className="container text-center mt-5 myListContainer">
			<Task taskText="prueba 1" />
		</div>
	);
}
