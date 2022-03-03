import React from "react";
import { Lista } from "./Lista.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div>
			<p className="text-center" id="title">
				todos
			</p>
			<Lista />
		</div>
	);
};

export default Home;
