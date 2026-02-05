const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".offscreen-menu");

hamMenu.addEventListener("click", () => {
	hamMenu.classList.toggle("active");
	offScreenMenu.classList.toggle("active");
});

const solucoesBtn = document.querySelector(".solucoes-btn");
const solucoesSubmenu = document.querySelector(".solucoes-submenu");

solucoesBtn.addEventListener("click", () => {
	solucoesSubmenu.classList.toggle("active");
});

// menu clicável para mobile
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownButton && dropdownContent) {
	dropdownButton.addEventListener("click", (e) => {
		e.preventDefault();
		dropdownContent.classList.toggle("active");
	});

	// Fechar dropdown ao clicar em um link
	document.querySelectorAll(".dropdown-content a").forEach((link) => {
		link.addEventListener("click", () => {
			dropdownContent.classList.remove("active");
		});
	});

	// Fechar dropdown ao clicar fora
	document.addEventListener("click", (e) => {
		if (!dropdownMenu.contains(e.target)) {
			dropdownContent.classList.remove("active");
		}
	});
}

// animaçao das palavras na pagina inicial
const words = ["responde", "cresce", "inova", "conecta", "impacta"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const wordElement = document.querySelector(".word-change");

function typeWord() {
	const currentWord = words[wordIndex];

	if (isDeleting) {
		charIndex--;
	} else {
		charIndex++;
	}

	wordElement.textContent = currentWord.substring(0, charIndex);

	if (!isDeleting && charIndex === currentWord.length) {
		setTimeout(() => {
			isDeleting = true;
		}, 1500);
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		wordIndex = (wordIndex + 1) % words.length;
	}

	const speed = isDeleting ? 50 : 100;
	setTimeout(typeWord, speed);
}

typeWord();
