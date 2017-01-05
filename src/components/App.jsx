import React from 'react';
import {connect} from 'react-redux';
import '../styles/main.scss';
import ProgressBar from './ProgressBar';
import ControlButton from './ControlButton';
import {fetchAllData} from '../actions/commonActions';
import {selectUsage, increaseUsage} from '../actions/usageActions';

export class App extends React.Component {
    constructor() {
        super();
        this.increaseUsage = this.increaseUsage.bind(this);
    }
    componentWillMount() {
        this.props.fetchAllData();
    }

    increaseUsage(value) {
        const {selectedUsageIndex, increaseUsage} = this.props;
        return () => {
            increaseUsage(selectedUsageIndex, value);
        };
    }

    render () {
        const {usageAmounts,
            controlValues,
            limit,
            selectedUsageIndex,
            selectUsage} = this.props;

        return usageAmounts.length && limit > 0 && controlValues.length ?
            <div className="container">
                <div className="page-title">
                    Progress Bars
                </div>
                <div>
                    {usageAmounts.map((amount, index) => (
                        <ProgressBar usagePercentageValue={amount / limit}
                            key={index}
                        />
                    ))}
                </div>
                <div className="control-panel">
                    <select value={selectedUsageIndex}
                        onChange={(event) => selectUsage(event.target.value)}
                        className="select-usage-dropdown">
                        {usageAmounts.map((amount, index) => (
                            <option value={index}
                                    key={index}>
                                {`#progress${index + 1}`}
                            </option>
                        ))}
                    </select>
                    <div className="control-button-section">
                        {controlValues.map((value, index) => (
                            <ControlButton controlValue={value}
                                onClick={this.increaseUsage(value)}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div> : <div>Loading...</div>;
    }
}

export default connect(
    (state) => ({
        usageAmounts: state.usage.usageAmounts,
        selectedUsageIndex: state.usage.selectedUsageIndex,
        controlValues: state.control.controlValues.sort((value1, value2) => value1 - value2),
        limit: state.control.limit
    }),
    (dispatch) => ({
        fetchAllData: () => dispatch(fetchAllData()),
        increaseUsage: (index, amount) => dispatch(increaseUsage(index, amount)),
        selectUsage: (index) => dispatch(selectUsage(index))
    })
)(App);