const hide1 = document.querySelector(".hide")
const mainMenu = document.querySelector(".main-menu")

const hide2 = document.querySelector(".hide2")
const offer = document.querySelector(".offer")

const trg1 = document.querySelector(".trg1")
const trg2 = document.querySelector(".trg2")

mainMenu.addEventListener("click", e => {
	e.preventDefault()
	hide1.style.display = hide1.style.display === "block" ? "none" : "block"
	trg1.style.transform =
		hide1.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)"
})

offer.addEventListener("click", e => {
	e.preventDefault()
	hide2.style.display = hide2.style.display === "block" ? "none" : "block"
	trg2.style.transform =
		hide2.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)"
})
