import React from 'react';

export default (props) => {
	const {controlValue, onClick} = props;

	return (
		<button onClick={onClick}
			className="control-button">
			{controlValue}
		</button>
	);
}