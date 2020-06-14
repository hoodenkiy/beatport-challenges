const initResize = () => {
	const trigger = document.getElementById('resize');

	trigger.addEventListener('mousedown', () => {
		document.addEventListener('mousemove', startResizingPanel);
	});
};

const startResizingPanel = event => {
	document.addEventListener('mouseup', () => {
		document.removeEventListener('mousemove', startResizingPanel);
	});

	const panel = document.getElementById('panel');
	panel.style.height = window.innerHeight - event.clientY + 'px';
};

window.initResize = initResize;
export default initResize;
