const burger = document.querySelector(".burger-menu")

const menu = document.querySelector(".menu")

const main = document.querySelector(".main-content")

burger.addEventListener("click", () => {
	if (menu.classList.contains("open")) {
		menu.classList.remove("open")
		main.classList.remove("shadow")
	} else {
		menu.classList.add("open")
		main.classList.add("shadow")
	}
})
