import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {App} from '../App';
import ProgressBar from '../ProgressBar';
import ControlButton from '../ControlButton';

describe('App', () => {
    let wrapper, fetchAllData, usageAmounts, controlValues, limit, selectedUsageIndex, selectUsage, increaseUsage;
    
    beforeEach(() => {
        fetchAllData = jest.fn();
        usageAmounts = [10, 20];
        controlValues = [4, 10, -5, -1];
        limit = 200;
        selectedUsageIndex = 1;
        selectUsage = jest.fn();
        increaseUsage = jest.fn();

        wrapper = mount(
            <App fetchAllData={fetchAllData}
                 usageAmounts={usageAmounts}
                 controlValues={controlValues}
                 limit={limit}
                 selectedUsageIndex={selectedUsageIndex}
                 selectUsage={selectUsage}
                 increaseUsage={increaseUsage}/>
        );
    });

    it('should fetch data before mounting', () => {
        expect(fetchAllData.mock.calls.length).to.equal(1);
    });

    it('should have 2 progress bars', () => {
        const progressBars = wrapper.find(ProgressBar);

        expect(progressBars).to.have.length(2);
    });

    it('should have 4 control buttons', () => {
        const controlButtons = wrapper.find(ControlButton);

        expect(controlButtons).to.have.length(4);
    });

    it('should have 1 dropdown', () => {
        const dropdonws = wrapper.find('select');

        expect(dropdonws).to.have.length(1);
    });

    it('should be able to select usage', () => {
        const dropdown = wrapper.find('.select-usage-dropdown');
        dropdown.simulate('change', {
            target: {
                value: 0
            }});

        expect(selectUsage.mock.calls.length).to.equal(1);
        expect(selectUsage.mock.calls[0][0]).to.equal(0);
    });
    
    it('should be able to increase usage', () => {
        const secondControlButton = wrapper.find(ControlButton).at(1);
        secondControlButton.simulate('click');

        expect(increaseUsage.mock.calls.length).to.equal(1);
        expect(increaseUsage.mock.calls[0][0]).to.equal(1);
        expect(increaseUsage.mock.calls[0][1]).to.equal(10);
    });
});