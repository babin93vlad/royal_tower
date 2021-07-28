window.addEventListener("DOMContentLoaded", () => {
	const langSelect = $(".lang-selector");
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

	langSelect.change(function () {
		if (langSelect.val() === "ru") {
			localStorage.setItem("language", "RU");
			$(".ru-text").fadeIn();
			$(".ro-text").hide();
			$(".en-text").hide();
		} else if (langSelect.val() === "ro") {
			localStorage.setItem("language", "RO");
			$(".ro-text").fadeIn();
			$(".ru-text").hide();
			$(".en-text").hide();
		} else if (langSelect.val() === "en") {
			localStorage.setItem("language", "EN");
			$(".en-text").fadeIn();
			$(".ru-text").hide();
			$(".ro-text").hide();
		}
	});
});

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 3,
		margin: 20,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});
});

$(document).ready(function () {
	const langSelect = $(".lang-selector");

	$(".header__burger").click(function () {
		$(".header__burger").toggleClass("active");
		$(".header__menu").toggleClass("active");
		$(".header__footer").toggleClass("active");
		$(".header__social").toggleClass("active");
		$("body").toggleClass("lock");
	});

	if (
		localStorage.getItem("language") === "RU" ||
		localStorage.getItem("language") == null
	) {
		langSelect.val("ru");
		$(".ru-text").fadeIn();
		$(".ro-text").hide();
		$(".en-text").hide();
	} else if (localStorage.getItem("language") === "RO") {
		langSelect.val("ro");
		$(".ro-text").fadeIn();
		$(".ru-text").hide();
		$(".en-text").hide();
	} else if (localStorage.getItem("language") === "EN") {
		langSelect.val("en");
		$(".en-text").fadeIn();
		$(".ro-text").hide();
		$(".ru-text").hide();
	}
});
