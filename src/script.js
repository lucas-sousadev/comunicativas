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


// animaçao das palavras na pagina inicial
const words = ['responde', 'cresce', 'prospera', 'irradia', 'impacta'];
		let wordIndex = 0;
		let charIndex = 0;
		let isDeleting = false;
		const wordElement = document.querySelector('.word-change');

		function typeWord() {
		    const currentWord = words[wordIndex];
		    
		    if (isDeleting) {
		        charIndex--;
		    } else {
		        charIndex++;
		    }
		    
		    wordElement.textContent = currentWord.substring(0, charIndex);
		    
		    if (!isDeleting && charIndex === currentWord.length) {
		        setTimeout(() => { isDeleting = true; }, 1500);
		    } else if (isDeleting && charIndex === 0) {
		        isDeleting = false;
		        wordIndex = (wordIndex + 1) % words.length;
		    }
		    
		    const speed = isDeleting ? 50 : 100;
		    setTimeout(typeWord, speed);
		}

		typeWord();