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
