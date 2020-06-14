import { mount } from 'enzyme';
import React from 'react';
import Slider from './Slider';
import sliderData from './slider-data';

describe('Slider', () => {
	it('mounts', () => {
		const container = mount(<Slider sliderData={sliderData} />);
		expect(container.find('.slider').exists()).toBe(true);
	});
});
