document.addEventListener("DOMContentLoaded", () => {
	// Detectar página atual e marcar link como ativo
	const currentPage = window.location.pathname.split("/").pop() || "index.html";
	const navLinks = document.querySelectorAll(".barra-de-navegacao-links a");
	const offscreenLinks = document.querySelectorAll(".offscreen-menu a");

	navLinks.forEach((link) => {
		const href = link.getAttribute("href");
		if (href === currentPage || (currentPage === "" && href === "index.html")) {
			link.classList.add("active");
		}
	});

	offscreenLinks.forEach((link) => {
		const href = link.getAttribute("href");
		if (href === currentPage || (currentPage === "" && href === "index.html")) {
			link.classList.add("active");
		}
	});

	// menu
	const hamMenu = document.querySelector(".ham-menu");
	const offScreenMenu = document.querySelector(".offscreen-menu");

	if (hamMenu && offScreenMenu) {
		hamMenu.addEventListener("click", () => {
			hamMenu.classList.toggle("active");
			offScreenMenu.classList.toggle("active");
		});
	}
	// submenu soluções
	const solucoesBtn = document.querySelector(".solucoes-btn");
	const solucoesSubmenu = document.querySelector(".solucoes-submenu");

	if (solucoesBtn && solucoesSubmenu) {
		solucoesBtn.addEventListener("click", () => {
			solucoesSubmenu.classList.toggle("active");
		});
	}
	// menu clicável para mobile
	const dropdownButton = document.querySelector(".dropdown-button");
	const dropdownContent = document.querySelector(".dropdown-content");
	const dropdownMenu = document.querySelector(".dropdown-menu");

	if (dropdownButton && dropdownContent && dropdownMenu) {
		dropdownButton.addEventListener("click", (e) => {
			e.preventDefault();
			dropdownContent.classList.toggle("active");
		});

		document.querySelectorAll(".dropdown-content a").forEach((link) => {
			link.addEventListener("click", () => {
				dropdownContent.classList.remove("active");
			});
		});

		document.addEventListener("click", (e) => {
			if (!dropdownMenu.contains(e.target)) {
				dropdownContent.classList.remove("active");
			}
		});
	}
});
// animação de texto pagina inicial
const wordElement = document.querySelector(".word-change");

if (wordElement) {
	const words = ["responde", "cresce", "inova", "conecta", "impacta"];
	let wordIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	function typeWord() {
		const currentWord = words[wordIndex];
		charIndex += isDeleting ? -1 : 1;

		wordElement.textContent = currentWord.substring(0, charIndex);

		if (!isDeleting && charIndex === currentWord.length) {
			setTimeout(() => (isDeleting = true), 1500);
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			wordIndex = (wordIndex + 1) % words.length;
		}

		setTimeout(typeWord, isDeleting ? 50 : 100);
	}

	typeWord();
}

// Scroll animation header com throttle
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener(
	"scroll",
	() => {
		const currentScroll = window.scrollY;

		if (currentScroll > 50) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	},
	{ passive: true }
);
