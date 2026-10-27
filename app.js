const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const copyButton = document.querySelector(".copy-button");
const toast = document.querySelector(".toast");

menuButton.addEventListener("click", () => {
	const isOpen = menuButton.getAttribute("aria-expanded") === "true";
	menuButton.setAttribute("aria-expanded", String(!isOpen));
	menuButton.setAttribute(
		"aria-label",
		isOpen ? "Menyuni ochish" : "Menyuni yopish"
	);
	navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
	link.addEventListener("click", () => {
		navigation.classList.remove("is-open");
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.setAttribute("aria-label", "Menyuni ochish");
	});
});

copyButton.addEventListener("click", async () => {
	const commands =
		'git config user.name "Ism Familiya"\ngit config user.email "ish@email.com"\ngit config --local --list';
	try {
		await navigator.clipboard.writeText(commands);
		copyButton.querySelector(".copy-label").textContent = "Nusxalandi";
		toast.textContent = "Git buyruqlari nusxalandi";
	} catch {
		copyButton.querySelector(".copy-label").textContent = "Nusxalab bo‘lmadi";
		toast.textContent = "Nusxalash uchun sahifaga clipboard ruxsati kerak";
	}
	toast.classList.add("is-visible");
	window.setTimeout(() => {
		toast.classList.remove("is-visible");
		copyButton.querySelector(".copy-label").textContent = "Nusxalash";
	}, 2400);
});
