import React from "react";

function Button({ btn, btnClass, handleClick }) {
	return (
		<>
			<button className={btnClass} type="button" onClick={handleClick}>
				{btn}
			</button>
		</>
	);
}

export default Button;
