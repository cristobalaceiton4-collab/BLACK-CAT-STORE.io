// Carrusel de Polerones
const carrusel = document.getElementById('carrusel');
const logoSlider = document.getElementById('logoSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarrusel() {
	const slideWidth = carrusel.children[0].offsetWidth;
	const logoWidth = logoSlider.children[0].offsetWidth;
	carrusel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
	logoSlider.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
}

nextBtn.addEventListener('click', () => {
	const totalSlides = carrusel.children.length;
	if (currentIndex < totalSlides - 1) { 
		currentIndex++; 
		updateCarrusel(); 
	}
});

prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) { 
		currentIndex--; 
		updateCarrusel(); 
	}
});

window.addEventListener('resize', updateCarrusel);

// Carrusel de Pantalones
const carruselPantalones = document.getElementById('carruselPantalones');
const logoSliderPantalones = document.getElementById('logoSliderPantalones');
const prevBtnPantalones = document.getElementById('prevBtnPantalones');
const nextBtnPantalones = document.getElementById('nextBtnPantalones');
let currentIndexPantalones = 0;

function updateCarruselPantalones() {
	const slideWidth = carruselPantalones.children[0].offsetWidth;
	const logoWidth = logoSliderPantalones.children[0].offsetWidth;
	carruselPantalones.style.transform = `translateX(-${currentIndexPantalones * slideWidth}px)`;
	logoSliderPantalones.style.transform = `translateX(-${currentIndexPantalones * logoWidth}px)`;
}

nextBtnPantalones.addEventListener('click', () => {
	const totalSlides = carruselPantalones.children.length;
	if (currentIndexPantalones < totalSlides - 1) { 
		currentIndexPantalones++; 
		updateCarruselPantalones(); 
	}
});

prevBtnPantalones.addEventListener('click', () => {
	if (currentIndexPantalones > 0) { 
		currentIndexPantalones--; 
		updateCarruselPantalones(); 
	}
});

window.addEventListener('resize', updateCarruselPantalones);

// Carrusel de Shorts
const carruselShorts = document.getElementById('carruselShorts');
const logoSliderShorts = document.getElementById('logoSliderShorts');
const prevBtnShorts = document.getElementById('prevBtnShorts');
const nextBtnShorts = document.getElementById('nextBtnShorts');
let currentIndexShorts = 0;

function updateCarruselShorts() {
	const slideWidth = carruselShorts.children[0].offsetWidth;
	const logoWidth = logoSliderShorts.children[0].offsetWidth;
	carruselShorts.style.transform = `translateX(-${currentIndexShorts * slideWidth}px)`;
	logoSliderShorts.style.transform = `translateX(-${currentIndexShorts * logoWidth}px)`;
}

nextBtnShorts.addEventListener('click', () => {
	const totalSlides = carruselShorts.children.length;
	if (currentIndexShorts < totalSlides - 1) { 
		currentIndexShorts++; 
		updateCarruselShorts(); 
	}
});

prevBtnShorts.addEventListener('click', () => {
	if (currentIndexShorts > 0) { 
		currentIndexShorts--; 
		updateCarruselShorts(); 
	}
});

window.addEventListener('resize', updateCarruselShorts);

// Carrusel de Poleras
const carruselPoleras = document.getElementById('carruselPoleras');
const logoSliderPoleras = document.getElementById('logoSliderPoleras');
const prevBtnPoleras = document.getElementById('prevBtnPoleras');
const nextBtnPoleras = document.getElementById('nextBtnPoleras');
let currentIndexPoleras = 0;

function updateCarruselPoleras() {
	const slideWidth = carruselPoleras.children[0].offsetWidth;
	const logoWidth = logoSliderPoleras.children[0].offsetWidth;
	carruselPoleras.style.transform = `translateX(-${currentIndexPoleras * slideWidth}px)`;
	logoSliderPoleras.style.transform = `translateX(-${currentIndexPoleras * logoWidth}px)`;
}

nextBtnPoleras.addEventListener('click', () => {
	const totalSlides = carruselPoleras.children.length;
	if (currentIndexPoleras < totalSlides - 1) { 
		currentIndexPoleras++; 
		updateCarruselPoleras(); 
	}
});

prevBtnPoleras.addEventListener('click', () => {
	if (currentIndexPoleras > 0) { 
		currentIndexPoleras--; 
		updateCarruselPoleras(); 
	}
});

window.addEventListener('resize', updateCarruselPoleras);

// Carrusel de Chaquetas
const carruselChaquetas = document.getElementById('carruselChaquetas');
const logoSliderChaquetas = document.getElementById('logoSliderChaquetas');
const prevBtnChaquetas = document.getElementById('prevBtnChaquetas');
const nextBtnChaquetas = document.getElementById('nextBtnChaquetas');
let currentIndexChaquetas = 0;

function updateCarruselChaquetas() {
	const slideWidth = carruselChaquetas.children[0].offsetWidth;
	const logoWidth = logoSliderChaquetas.children[0].offsetWidth;
	carruselChaquetas.style.transform = `translateX(-${currentIndexChaquetas * slideWidth}px)`;
	logoSliderChaquetas.style.transform = `translateX(-${currentIndexChaquetas * logoWidth}px)`;
}

nextBtnChaquetas.addEventListener('click', () => {
	const totalSlides = carruselChaquetas.children.length;
	if (currentIndexChaquetas < totalSlides - 1) { 
		currentIndexChaquetas++; 
		updateCarruselChaquetas(); 
	}
});

prevBtnChaquetas.addEventListener('click', () => {
	if (currentIndexChaquetas > 0) { 
		currentIndexChaquetas--; 
		updateCarruselChaquetas(); 
	}
});

window.addEventListener('resize', updateCarruselChaquetas);

// FÍSICA DE CUERDA REALISTA
const canvas = document.getElementById('ropeCanvas');
const ctx = canvas.getContext('2d');
const etiqueta = document.getElementById('etiqueta');
const container = document.getElementById('etiquetaContainer');

// Segunda etiqueta
const canvas2 = document.getElementById('ropeCanvas2');
const ctx2 = canvas2.getContext('2d');
const etiqueta2 = document.getElementById('etiqueta2');
const container2 = document.getElementById('etiquetaContainer2');

canvas.width = 150;
canvas.height = 250;
canvas2.width = 180;
canvas2.height = 280;

// Función para crear puntos de cuerda
function createRopePoints(segments, segLength, startX, startY) {
	const pts = [];
	for (let i = 0; i <= segments; i++) {
		pts.push({
			x: startX,
			y: startY + i * segLength,
			oldX: startX,
			oldY: startY + i * segLength,
			pinned: i === 0
		});
	}
	return pts;
}

// Puntos de las cuerdas - empiezan desde Y=0 (debajo de la barra)
const ropeSegments = 12;
const segmentLength = 13;
const points = createRopePoints(ropeSegments, segmentLength, 90, 0);
const points2 = createRopePoints(14, 13, 100, 0);

// Físicas
const gravity = 0.5;
const friction = 0.99;

let isDragging = false;
let isDragging2 = false;
let lastScrollY = window.scrollY;
let scrollVelX = 0;
let scrollVelY = 0;

// Actualizar física de los puntos
function updatePoints(pts, canvasW, canvasH, minY) {
	for (let i = 0; i < pts.length; i++) {
		const p = pts[i];
		if (p.pinned) continue;
		
		const vx = (p.x - p.oldX) * friction;
		const vy = (p.y - p.oldY) * friction;
		
		p.oldX = p.x;
		p.oldY = p.y;
		
		p.x += vx + scrollVelX;
		p.y += vy + gravity + scrollVelY;
		
		// Límites - NO tocar arriba
		if (p.x < 10) { p.x = 10; }
		if (p.x > canvasW - 10) { p.x = canvasW - 10; }
		if (p.y < minY) { p.y = minY; p.oldY = p.y; }
		if (p.y > canvasH - 50) { p.y = canvasH - 50; }
	}
}

// Mantener distancia entre puntos
function applyConstraints(pts, segLen) {
	for (let iteration = 0; iteration < 5; iteration++) {
		for (let i = 0; i < pts.length - 1; i++) {
			const p1 = pts[i];
			const p2 = pts[i + 1];
			
			const dx = p2.x - p1.x;
			const dy = p2.y - p1.y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			const diff = segLen - dist;
			const percent = diff / dist / 2;
			
			const offsetX = dx * percent;
			const offsetY = dy * percent;
			
			if (!p1.pinned) {
				p1.x -= offsetX;
				p1.y -= offsetY;
			}
			if (!p2.pinned) {
				p2.x += offsetX;
				p2.y += offsetY;
			}
		}
	}
}

// Dibujar la cuerda
function drawRope(context, pts) {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	
	context.beginPath();
	context.moveTo(pts[0].x, pts[0].y);
	
	for (let i = 1; i < pts.length - 1; i++) {
		const xc = (pts[i].x + pts[i + 1].x) / 2;
		const yc = (pts[i].y + pts[i + 1].y) / 2;
		context.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
	}
	
	context.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
	
	context.strokeStyle = '#1a1a1a';
	context.lineWidth = 3;
	context.lineCap = 'round';
	context.stroke();
}

// Actualizar posición de las etiquetas
function updateTags() {
	const lastPoint = points[points.length - 1];
	etiqueta.style.left = lastPoint.x + 'px';
	etiqueta.style.top = lastPoint.y + 'px';
	
	const lastPoint2 = points2[points2.length - 1];
	etiqueta2.style.left = lastPoint2.x + 'px';
	etiqueta2.style.top = lastPoint2.y + 'px';
}

// Loop principal
function animate() {
	updatePoints(points, canvas.width, canvas.height, 30);
	updatePoints(points2, canvas2.width, canvas2.height, 30);
	applyConstraints(points, segmentLength);
	applyConstraints(points2, 10);
	drawRope(ctx, points);
	drawRope(ctx2, points2);
	updateTags();
	
	scrollVelX *= 0.95;
	scrollVelY *= 0.95;
	
	requestAnimationFrame(animate);
}

// Scroll
window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY;
	const deltaY = currentScrollY - lastScrollY;
	
	scrollVelY = -deltaY * 0.3;
	scrollVelX = (Math.random() - 0.5) * Math.abs(deltaY) * 0.5;
	
	lastScrollY = currentScrollY;
});

// Arrastrar etiqueta 1
let dragPoint = null;

etiqueta.addEventListener('mousedown', (e) => {
	isDragging = true;
	dragPoint = points[points.length - 1];
	etiqueta.style.cursor = 'grabbing';
	e.preventDefault();
});

// Arrastrar etiqueta 2
let dragPoint2 = null;

etiqueta2.addEventListener('mousedown', (e) => {
	isDragging2 = true;
	dragPoint2 = points2[points2.length - 1];
	etiqueta2.style.cursor = 'grabbing';
	e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
	if (isDragging && dragPoint) {
		const rect = container.getBoundingClientRect();
		dragPoint.x = e.clientX - rect.left;
		dragPoint.y = e.clientY - rect.top;
		dragPoint.x = Math.max(10, Math.min(canvas.width - 10, dragPoint.x));
		dragPoint.y = Math.max(30, Math.min(canvas.height - 50, dragPoint.y));
	}
	if (isDragging2 && dragPoint2) {
		const rect2 = container2.getBoundingClientRect();
		dragPoint2.x = e.clientX - rect2.left;
		dragPoint2.y = e.clientY - rect2.top;
		dragPoint2.x = Math.max(10, Math.min(canvas2.width - 10, dragPoint2.x));
		dragPoint2.y = Math.max(30, Math.min(canvas2.height - 50, dragPoint2.y));
	}
});

document.addEventListener('mouseup', () => {
	isDragging = false;
	isDragging2 = false;
	dragPoint = null;
	dragPoint2 = null;
	etiqueta.style.cursor = 'grab';
	etiqueta2.style.cursor = 'grab';
});

// Touch events etiqueta 1
etiqueta.addEventListener('touchstart', (e) => {
	isDragging = true;
	dragPoint = points[points.length - 1];
	e.preventDefault();
});

// Touch events etiqueta 2
etiqueta2.addEventListener('touchstart', (e) => {
	isDragging2 = true;
	dragPoint2 = points2[points2.length - 1];
	e.preventDefault();
});

document.addEventListener('touchmove', (e) => {
	if (isDragging && dragPoint) {
		const rect = container.getBoundingClientRect();
		const touch = e.touches[0];
		dragPoint.x = touch.clientX - rect.left;
		dragPoint.y = touch.clientY - rect.top;
		dragPoint.x = Math.max(10, Math.min(canvas.width - 10, dragPoint.x));
		dragPoint.y = Math.max(30, Math.min(canvas.height - 50, dragPoint.y));
	}
	if (isDragging2 && dragPoint2) {
		const rect2 = container2.getBoundingClientRect();
		const touch = e.touches[0];
		dragPoint2.x = touch.clientX - rect2.left;
		dragPoint2.y = touch.clientY - rect2.top;
		dragPoint2.x = Math.max(10, Math.min(canvas2.width - 10, dragPoint2.x));
		dragPoint2.y = Math.max(30, Math.min(canvas2.height - 50, dragPoint2.y));
	}
});

document.addEventListener('touchend', () => {
	isDragging = false;
	isDragging2 = false;
	dragPoint = null;
	dragPoint2 = null;
});

animate();