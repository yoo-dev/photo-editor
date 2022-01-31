const image = document.querySelector('#image');

const filter = (image, name, value) => {
	let property = [];
	let prevProperty = image.style.filter;
	if(prevProperty.length) {
		property = prevProperty.split(' ').filter(x => !x.startsWith(name));
	}

	switch(name) {
		case "blur":
			property.push(`blur(${value}px)`);
			break;
		case "brightness":
			property.push(`brightness(${value}%)`);
			break;
		case "contrast":
			property.push(`contrast(${value}%)`);
			break;
		case "grayscale":
			property.push(`grayscale(${value}%)`);
			break;
		case "hue-rotate":
			property.push(`hue-rotate(${value}deg)`);
			break;
		case "invert":
			property.push(`invert(${value}%)`);
			break;
		case "opacity":
			property.push(`opacity(${value}%)`);
			break;
		case "saturate":
			property.push(`saturate(${value}%)`);
			break;
		case "sepia":
			property.push(`sepia(${value}%)`);
			break;
	}

	image.style.filter = property.join(' ');
}

const inputs = document.querySelectorAll('input[type="range"]');
inputs.forEach(input => {
	input.addEventListener('change', (event) => {
		const value = event.target.value;
		const name = event.target.getAttribute('id');
		filter(image, name, value);
	});
})