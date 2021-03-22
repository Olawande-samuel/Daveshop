import React from "react";
import Purchase from "./Reusables/interactive";
import { Package } from "./Reusables/Amount";

function Data() {
	return (
		<div className="purchase-wrapper">
			<div className="purchase">
				<Purchase header="Buy Data" rest={<Package />} />
			</div>
		</div>
	);
}

export default Data;
