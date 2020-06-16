import React from 'react';
import './slider.scss';
import Slide from './Slide';

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */
class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			slides: this.props.sliderData,
			interval: this.props.interval || 4000,
			customClass: this.props.customClass,
			showButtons: { display: 'none' },
			timer: null
		};

		this.prevNext = this.prevNext.bind(this);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
	}
	componentDidMount() {
		this.play();
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	play() {
		setTimeout(() => {
			const timer = setInterval(() => {
				const firstSlide = this.state.slides.shift();
				this.setState({
					slides: [...this.state.slides, firstSlide]
				});
			}, this.state.interval);
			this.setState({ timer: timer });
		}, 400);

		this.setState({
			showButtons: { display: 'none' }
		});
	}

	pause() {
		clearInterval(this.state.timer);
		this.setState({
			showButtons: { display: 'block' }
		});
	}

	prevNext(action) {
		if (action === 'prev') {
			const lastSlide = this.state.slides.pop();

			this.setState({
				slides: [lastSlide, ...this.state.slides]
			});
		} else {
			const firstSlide = this.state.slides.shift();

			this.setState({
				slides: [...this.state.slides, firstSlide]
			});
		}
	}

	render() {
		return (
			<div
				className={`slider ${this.state.customClass}`}
				onMouseEnter={this.pause}
				onMouseLeave={this.play}
			>
				<PrevNext
					action="prev"
					icon="&#x21a9;"
					handler={this.prevNext}
					showButtons={this.state.showButtons}
				/>
				<Slide slide={this.state.slides[0]} />
				<PrevNext
					action="next"
					icon="&#x21aa;"
					handler={this.prevNext}
					showButtons={this.state.showButtons}
				/>
			</div>
		);
	}
}

const PrevNext = ({ action, handler, icon, showButtons }) => (
	<button
		aria-label={`${action} slide`}
		className={`arrow ${action}`}
		onClick={() => handler(action)}
		style={showButtons}
	>
		{icon}
	</button>
);

export default Slider;
