import React from "react";
import Purchase from "./Reusables/Purchase";
import { Package } from "./Reusables/Amount";

function Data() {
	return (
		<div className="purchase">
			<Purchase header="Buy Data" rest={<Package />} />
		</div>
	);
}

export default Data;
