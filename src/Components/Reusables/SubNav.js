import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IoChevronBack, IoCloseSharp } from "react-icons/io5";


function SubNav({ title }) {
	const history =useHistory()
	return (
		<div className="interactive-nav-wrapper">
			<div className="interactive-nav ">
				<div className="back">
						<IoChevronBack style={{ fontSize: "24px", color: "black" }} onClick={()=>{
							history.goBack();
						}} />
				</div>

				<p >{title}</p>

			
				<div className="cancel">
					<Link to="/" >
						<IoCloseSharp style={{ fontSize: "24px", color: "black" }} />
					</Link>
				</div>
			</div>
		</div>
	);
}
export default SubNav;
