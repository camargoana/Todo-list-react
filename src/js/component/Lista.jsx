import React, { useState } from "react";

export const Lista = () => {
	const [lista, setLista] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState("");
	let msn = "No tasks, add a task";
	let borderBox = "";
	if (lista.length > 0) {
		msn = lista.length + " items left";
		borderBox = "border-bottom";
	}
	return (
		<div>
			<div className="d-flex justify-content-center">
				<div className="box border shadow">
					<input
						id="input"
						className="inputText"
						placeholder="What needs to be done?"
						value={nuevaTarea}
						onChange={(evento) => {
							setNuevaTarea(evento.target.value);
						}}
						onKeyDown={(evento) => {
							if (evento.key === "Enter") {
								const nuevaLista = [...lista, nuevaTarea];
								setLista(nuevaLista);
								setNuevaTarea("");
							}
						}}></input>
					<ul
						id="tasks"
						className={
							"list-group list-group-flush border-top " +
							borderBox
						}>
						{lista.map((tarea, index) => {
							return (
								<li
									key={"task_" + index}
									className="list-group-item list-group-item-action text-start">
									{tarea}
									<span
										className="fas fa-times float-end"
										onClick={() => {
											let array = [...lista];
											array.splice(index, 1);
											setLista(array);
										}}></span>
								</li>
							);
						})}
					</ul>
					<div className="footer text-start d-inline-block w-100">
						{msn}
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="footer2 border border-top-0 shadow"></div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="footer3 border border-top-0 shadow"></div>
			</div>
		</div>
	);
};

export default Lista;
