const drop = document.querySelector(".drop")
const dropdownMenu = document.querySelector(".dd")
const img = document.querySelector(".drop-img")

const drop2 = document.querySelector(".drop-second")
const dropdownMenu2 = document.querySelector(".dropdown-content-second")
const img2 = document.querySelector(".drop-img-second")

drop.addEventListener("click", () => {
	dropdownMenu.style.display =
		dropdownMenu.style.display === "flex" ? "none" : "flex"

	img.style.transform =
		dropdownMenu.style.display === "flex" ? "rotate(180deg)" : "rotate(0deg)"
})

drop2.addEventListener("click", () => {
	dropdownMenu2.style.display =
		dropdownMenu2.style.display === "flex" ? "none" : "flex"

	img2.style.transform =
		dropdownMenu2.style.display === "flex" ? "rotate(90deg)" : "rotate(270deg)"
})
