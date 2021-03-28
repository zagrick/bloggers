let mobile = document.querySelector(".mobile");
let btn = document.querySelector(".btn-burger");
let span = btn.querySelectorAll("span");
let flug = true;
btn.onclick = () => {
	for (s of span) {
		flug ? s.classList.add("active") : s.classList.remove("active");
	}
	flug ? (mobile.style.display = "block") : (mobile.style.display = "none");
	flug = !flug;
};
let slider = document.querySelector(".slider");
let bl = document.querySelector(".block-line").offsetWidth;
let line = document.querySelector(".line");
let long = line.offsetWidth;
let width = document.querySelector(".main__blogger").offsetWidth + 20;
let count = document.querySelectorAll(".main__blogger").length;
let r = document.querySelector(".right");
let l = document.querySelector(".left");
let n = 0;
let n2 = 0;
r.onclick = rSlider;
l.onclick = lSlider;
let res = (width * count) / 2;
let del = 4;
if (window.innerWidth < 768) {
	width = width - 20;
	res = width * count - width;
	del = 7.5;
}
function rSlider() {
	n = n - width;
	if (n < -res) {
		n = 0;
	}
	slider.style.left = n + "px";
	n2 = n2 + (bl - long) / del;
	if (n2 > bl - long) {
		n2 = 0;
		line.style.background = "#eff3f5";
	} else {
		line.style.background = "#d26600";
	}
	line.style.left = n2 + "px";
}
function lSlider() {
	n = n + width;
	if (n > 0) {
		n = 0;
	}
	slider.style.left = n + "px";
	n2 = n2 - (bl - long) / del;
	if (n2 > bl - long) {
		n2 = n2 - (bl - long) / del;
	}
	if (n2 <= 0) {
		line.style.background = "#eff3f5";
		n2 = 0;
	}
	line.style.left = n2 + "px";
}
//setInterval(rSlider, 3500);
