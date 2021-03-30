import React from "react";

function Button({ btn, btnClass, handleClick }) {
	return (
		<>
			<button className={btnClass} type="submit" onClick={handleClick}>
				{btn}
			</button>
		</>
	);
}

export default Button;
