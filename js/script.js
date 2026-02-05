document.addEventListener('DOMContentLoaded', () => {

  // ===== MENU HAMBURGUER =====
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".offscreen-menu");

  if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  }

  // ===== SUBMENU SOLUÇÕES =====
  const solucoesBtn = document.querySelector(".solucoes-btn");
  const solucoesSubmenu = document.querySelector(".solucoes-submenu");

  if (solucoesBtn && solucoesSubmenu) {
    solucoesBtn.addEventListener("click", () => {
      solucoesSubmenu.classList.toggle("active");
    });
  }

  // ===== DROPDOWN MOBILE =====
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

  // ===== NOTÍCIAS FACEBOOK =====
  const container = document.getElementById('noticias');

  if (container) {
    fetch('/comunicativas/api/facebook-posts.php')
      .then(r => r.json())
      .then(posts => {
        posts.forEach(post => {
          const div = document.createElement('div');
          div.innerHTML = `
            ${post.full_picture ? `<img src="${post.full_picture}">` : ''}
            <p>${post.message ?? '(Sem texto)'}</p>
            <a href="${post.permalink_url}" target="_blank">Ver no Facebook</a>
          `;
          container.appendChild(div);
        });
      })
      .catch(err => console.error(err));
  }

  // ===== ANIMAÇÃO DE TEXTO =====
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
        setTimeout(() => isDeleting = true, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(typeWord, isDeleting ? 50 : 100);
    }

    typeWord();
  }

});