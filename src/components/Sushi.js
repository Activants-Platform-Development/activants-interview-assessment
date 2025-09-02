import React from "react";

const Sushi = (props) => {
	return (
		<div className="sushi">
			<div className="plate">
			{
				/* Tell me if this sushi has been eaten! You can use the following image tag inside the condition you will be creating.*/
			}
			</div>
			<h4 className="sushi-details">
				{props.displaySushi.name} - ${props.displaySushi.price}
			</h4>
		</div>
	);
};

export default Sushi;
