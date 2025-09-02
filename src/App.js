import React, { useState, useEffect } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

const startState = {
	allSushis: [],
	startIndex: 0,
	bank: 100,
	eatenSushi: [],
};

export const App = () => {
	const [sushis, setSushis] = useState(startState);

	useEffect(() => {
		/*Please come up with a logic to select all sushis from the list*/
	}, []);

	const activePageContent = () => {
		/*Please come up with a logic to display 4 sushis at a time */
	};

	const moreSushis = () => {
		/*Please come up with a logic to allow users to see the next 4 sushis */
	};

	const goBack = () => {
		/*Please come up with a logic to allow users to see the previous 4 sushis */
	};

	const updateSushis = (id, price) => {
		/*
		Please come up with a logic prompt users on the following:
		1) If sushi has already been eaten, display an alert that shows "Sushi has been eaten!"
		2) If user's bank balance is less than the price of the sushi selected, display an alert that shows "Insufficient funds!"
		3) Only when the above 2 conditions are satisfied, allow users to eat the sushi. When the sushi is eaten, the sushi will only show
			an empty plate in its original place and there will be an additional empty plate on the table. Please refer to the gif for 
			described behaviour.    
		*/
	};

	return (
		<div className="app">
			<SushiContainer
				sushis={activePageContent()}
				moreSushis={moreSushis}
				goBack={goBack}
				eatSushi={updateSushis}
				eatenSushi={sushis.eatenSushi}
			/>
			<Table sushiPlate={sushis.eatenSushi} bank={sushis.bank} />
		</div>
	);
};

export default App;
