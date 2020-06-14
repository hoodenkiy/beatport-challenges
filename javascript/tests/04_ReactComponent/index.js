import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import sliderData from './slider-data';

ReactDOM.render(
	<Slider
		sliderData={sliderData}
		interval={3000}
		customClass="radiohead-slider"
	/>,
	document.getElementById('root')
);
