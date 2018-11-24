const start = new Date().getTime();
const shape = document.getElementById("shape");
const timeTaken1 = document.getElementById("timeTaken1");

function getRandomColor() {
	let letters = '0123456789ABCDEF'.split('');
	let color = '#';
	for(let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function makeShapeAppear() {
	const top = Math.random() * 400;
	const left = Math.random() * 400;
	const width = (Math.random() * 200) + 100;

	if (Math.random() > 0.5) {
		shape.style.borderRadius = "50%";
	} else {
		shape.style.borderRadius = "0";
	}

	shape.style.top = top + "px";
	shape.style.left = left + "px";
	shape.style.width = width + "px";
	shape.style.height = width + "px";
	shape.style.display = "block";
	shape.style.backgroundColor = getRandomColor();
	const start = new Date().getTime();
}

function appearAfterDelay() {
	setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay();

shape.addEventListener("click", disappear);
function disappear() {
	shape.style.display = "none";
	const end = new Date().getTime();
	const timeTaken = (end - start) / 1000;
	timeTaken1.innerHTML = timeTaken + " s";
	appearAfterDelay();
}