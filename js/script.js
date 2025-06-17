const allAccordionBtns = document.querySelectorAll(".accordion__toggler");

allAccordionBtns.forEach((toggler) => {
	toggler.addEventListener("click", () => {
		const box = toggler.closest(".accordion__box");
		const answer = box.querySelector(".accordion__answer");

		const isOpen = answer.style.height && answer.style.height !== "0px";
		document.querySelectorAll(".accordion__answer").forEach((otherAnswer) => {
			if (otherAnswer !== answer) {
				otherAnswer.setAttribute("aria-hidden", "true");
				otherAnswer.style.height = otherAnswer.scrollHeight + "px";
				requestAnimationFrame(() => {
					otherAnswer.style.height = "0";
				});

				const otherToggler = otherAnswer
					.closest(".accordion__box")
					.querySelector(".accordion__toggler");
				otherToggler.classList.remove("opened");
				otherToggler.setAttribute("aria-expanded", "false");
			}
		});

		if (isOpen) {
			answer.setAttribute("aria-hidden", "true");
			toggler.setAttribute("aria-expanded", "false");
			toggler.classList.remove("opened");
			answer.style.height = answer.scrollHeight + "px";
			requestAnimationFrame(() => {
				answer.style.height = "0";
			});
		} else {
			answer.setAttribute("aria-hidden", "false");
			toggler.setAttribute("aria-expanded", "true");
			toggler.classList.add("opened");
			answer.style.height = answer.scrollHeight + "px";
		}
	});
});
