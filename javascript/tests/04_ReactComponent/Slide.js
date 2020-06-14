import React from 'react';

const Slide = ({ slide }) => {
	const background = {
		backgroundImage: `url(${slide.url})`
	};

	if (Array.isArray(slide)) {
		const multiSlide = slide.map(slideData => (
			<div
				className="multi-slide"
				key={slideData.id}
				style={{ backgroundImage: `url(${slideData.url})` }}
			>
				<div className="slide-content">{slideData.title}</div>
			</div>
		));
		return <div className="multi-slide-wrapper">{multiSlide}</div>;
	}

	return (
		<div className="slide" style={background}>
			<div className="slide-content">{slide.title}</div>
		</div>
	);
};

export default Slide;
