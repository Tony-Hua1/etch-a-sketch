// let cell = document.body.getElementsByClassName('cell');
// let mouseOverFunction = function () {
// 	this.style.color = '#00FFFF';
// };
// cell.onmouseover = mouseOverFunction;

// const cell = document.querySelectorAll('#cell');
// cell.addEventListener('mouseover', () => {
// 	cell.style.background = '#00FFFF';
// });

// document.querySelectorAll('#cell').forEach(cell => {
// 	cell.addEventListener('mouseover', () => {
// 		cell.style.background = '#00FFFF';
// 	});
// })

const div1 = document.createElement('div');
div1.classList.add('container');
document.body.appendChild(div1);

const div2 = document.createElement('div');
div2.classList.add('grid');
div1.appendChild(div2);

for (let i = 0; i < 64; i++) {
	const div3 = document.createElement('div');
	div3.classList.add('cell');
	div2.appendChild(div3);
}

let container = document.querySelector('.container');
container.setAttribute('style', 'background: black; display: inline-block; border: 1px solid black;');

let grid = document.querySelector('.grid');
grid.setAttribute('style', 'display: grid; grid-template-columns: repeat(8, 80px); grid-template-rows: repeat(8, 80px); grid-gap: 1px;');

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
	cell.setAttribute('style', 'justify-content: center; align-items: center; display: flex; background: white;');
});

cells.forEach(cell => {
	cell.addEventListener('mouseover', () => {
		cell.style.background = 'black';
	});
})

