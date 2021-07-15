window.addEventListener("DOMContentLoaded", () => {
	const ruLangButton = document.querySelector(".header__language.ru");
	const roLangButton = document.querySelector(".header__language.ro");
	const animItems = document.querySelectorAll("._anim-items");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("_active");
			}
		});
	});

	animItems.forEach((animItem) => {
		observer.observe(animItem);
	});

	ruLangButton.addEventListener("click", () => {
		localStorage.setItem("language", "RU");
		$(".ru-text").fadeIn();
		$(".ro-text").hide();
	});

	roLangButton.addEventListener("click", () => {
		localStorage.setItem("language", "RO");
		$(".ro-text").fadeIn();
		$(".ru-text").hide();
	});
});

$(document).ready(function () {
	const ruLangButton = $("#ru");
	const roLangButton = $("#ro");

	if (
		localStorage.getItem("language") === "RU" ||
		localStorage.getItem("language") == null
	) {
		ruLangButton.prop("checked", true);
		roLangButton.prop("checked", false);
		$(".ru-text").fadeIn();
		$(".ro-text").hide();
	} else {
		roLangButton.prop("checked", true);
		ruLangButton.prop("checked", false);
		$(".ro-text").fadeIn();
		$(".ru-text").hide();
	}
});
