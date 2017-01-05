import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
    it('should have the length of bar equal to usage percentage', () => {
        const wrapper = mount(<ProgressBar usagePercentageValue={0.3} />);
        const progressBar = wrapper.find('.progress-bar-progress');

        expect(progressBar).to.exist;
        expect(progressBar).to.have.style('width', '30%');
    });

    it('should change bar color to red and length to 100% if usage is over 100%', () => {
        const wrapper = mount(<ProgressBar usagePercentageValue={1.1} />);
        const progressBar = wrapper.find('.progress-bar-progress');
        expect(progressBar).to.have.style('backgroundColor', 'red');
        expect(progressBar).to.have.style('width', '100%');
    });
});