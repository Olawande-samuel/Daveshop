import React from "react";
import CloseBtn from "../../Images/Icons/back.svg";
import Back from "../../Images/Icons/close.svg";
import { Link } from "react-router-dom";
function SubNav({ title }) {
	return (
		<div>
			<div className="purchaseNav">
				<div className="back">
					<Link to="/" exact>
						<img src={Back} alt="back" />
					</Link>
				</div>
				<p>{title}</p>
				<div className="cancel">
					<Link to="/" exact>
						<img src={CloseBtn} alt="close" />
					</Link>
				</div>
			</div>
		</div>
	);
}
export default SubNav;
