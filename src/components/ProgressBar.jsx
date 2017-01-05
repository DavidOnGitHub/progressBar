import React from 'react';
import {Motion, spring} from 'react-motion';

export default (props) => {
	const {usagePercentageValue} = props;

	const convertValueToPercentage = value => `${(value * 100).toFixed()}%`;

	const usagePercentageString = convertValueToPercentage(usagePercentageValue);
	const barWidth = usagePercentageValue <= 1 ? usagePercentageValue : 1;

	return (
		<div className="progress-bar-frame">
			<div className="progress-bar-progress-wrapper">
				<Motion style={{width: spring(barWidth, {precision: 0.1})}}>
					{
						motionStyle => {
							let barStyle = {
								width: convertValueToPercentage(motionStyle.width)
							};
							if (usagePercentageValue > 1) {
								Object.assign(barStyle, {
									backgroundColor: 'red'
								});
							}
							return <div className="progress-bar-progress"
								style={barStyle}
								key="progressBar"
							/>
						}
					}
				</Motion>
			</div>
			<span className="progress-bar-percentage">
				{usagePercentageString}
			</span>
		</div>
	);
}