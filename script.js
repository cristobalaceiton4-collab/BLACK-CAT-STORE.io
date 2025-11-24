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

// Funcionalidad táctil para móviles - Polerones
let touchStartX = 0;
let touchEndX = 0;

carrusel.addEventListener('touchstart', (e) => {
	touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carrusel.addEventListener('touchend', (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	if (touchEndX < touchStartX - swipeThreshold) {
		// Deslizar a la izquierda (siguiente)
		const totalSlides = carrusel.children.length;
		if (currentIndex < totalSlides - 1) {
			currentIndex++;
			updateCarrusel();
		}
	}
	if (touchEndX > touchStartX + swipeThreshold) {
		// Deslizar a la derecha (anterior)
		if (currentIndex > 0) {
			currentIndex--;
			updateCarrusel();
		}
	}
}

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

// Funcionalidad táctil - Pantalones
let touchStartXPantalones = 0;
let touchEndXPantalones = 0;

carruselPantalones.addEventListener('touchstart', (e) => {
	touchStartXPantalones = e.changedTouches[0].screenX;
}, { passive: true });

carruselPantalones.addEventListener('touchend', (e) => {
	touchEndXPantalones = e.changedTouches[0].screenX;
	handleSwipePantalones();
});

function handleSwipePantalones() {
	const swipeThreshold = 50;
	if (touchEndXPantalones < touchStartXPantalones - swipeThreshold) {
		const totalSlides = carruselPantalones.children.length;
		if (currentIndexPantalones < totalSlides - 1) {
			currentIndexPantalones++;
			updateCarruselPantalones();
		}
	}
	if (touchEndXPantalones > touchStartXPantalones + swipeThreshold) {
		if (currentIndexPantalones > 0) {
			currentIndexPantalones--;
			updateCarruselPantalones();
		}
	}
}

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

// Funcionalidad táctil - Shorts
let touchStartXShorts = 0;
let touchEndXShorts = 0;

carruselShorts.addEventListener('touchstart', (e) => {
	touchStartXShorts = e.changedTouches[0].screenX;
}, { passive: true });

carruselShorts.addEventListener('touchend', (e) => {
	touchEndXShorts = e.changedTouches[0].screenX;
	handleSwipeShorts();
});

function handleSwipeShorts() {
	const swipeThreshold = 50;
	if (touchEndXShorts < touchStartXShorts - swipeThreshold) {
		const totalSlides = carruselShorts.children.length;
		if (currentIndexShorts < totalSlides - 1) {
			currentIndexShorts++;
			updateCarruselShorts();
		}
	}
	if (touchEndXShorts > touchStartXShorts + swipeThreshold) {
		if (currentIndexShorts > 0) {
			currentIndexShorts--;
			updateCarruselShorts();
		}
	}
}

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

// Funcionalidad táctil - Poleras
let touchStartXPoleras = 0;
let touchEndXPoleras = 0;

carruselPoleras.addEventListener('touchstart', (e) => {
	touchStartXPoleras = e.changedTouches[0].screenX;
}, { passive: true });

carruselPoleras.addEventListener('touchend', (e) => {
	touchEndXPoleras = e.changedTouches[0].screenX;
	handleSwipePoleras();
});

function handleSwipePoleras() {
	const swipeThreshold = 50;
	if (touchEndXPoleras < touchStartXPoleras - swipeThreshold) {
		const totalSlides = carruselPoleras.children.length;
		if (currentIndexPoleras < totalSlides - 1) {
			currentIndexPoleras++;
			updateCarruselPoleras();
		}
	}
	if (touchEndXPoleras > touchStartXPoleras + swipeThreshold) {
		if (currentIndexPoleras > 0) {
			currentIndexPoleras--;
			updateCarruselPoleras();
		}
	}
}

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

// Funcionalidad táctil - Chaquetas
let touchStartXChaquetas = 0;
let touchEndXChaquetas = 0;

carruselChaquetas.addEventListener('touchstart', (e) => {
	touchStartXChaquetas = e.changedTouches[0].screenX;
}, { passive: true });

carruselChaquetas.addEventListener('touchend', (e) => {
	touchEndXChaquetas = e.changedTouches[0].screenX;
	handleSwipeChaquetas();
});

function handleSwipeChaquetas() {
	const swipeThreshold = 50;
	if (touchEndXChaquetas < touchStartXChaquetas - swipeThreshold) {
		const totalSlides = carruselChaquetas.children.length;
		if (currentIndexChaquetas < totalSlides - 1) {
			currentIndexChaquetas++;
			updateCarruselChaquetas();
		}
	}
	if (touchEndXChaquetas > touchStartXChaquetas + swipeThreshold) {
		if (currentIndexChaquetas > 0) {
			currentIndexChaquetas--;
			updateCarruselChaquetas();
		}
	}
}