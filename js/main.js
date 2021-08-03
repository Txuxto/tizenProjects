
function hora() {
	const hourEl = document.querySelector("#hour");
	var data = new Date();
	var h = data.getHours();
	if (h < 10) {
		h = "0" + h;
	}

	hourEl.innerHTML = h;
}
function minuto() {
	const minuteEl = document.querySelector("#minute");
	var data = new Date();
	var m = data.getMinutes();
	if (m < 10) {
		m = "0" + m;
	}
	minuteEl.innerHTML = m;
}
function segundo() {
	const secondEl = document.querySelector("#second");
	var data = new Date();
	var s = data.getSeconds();
	if (s < 10) {
		s = "0" + s;
	}
		secondEl.innerHTML = s;
}
var timer = setInterval(minuto, 1000);
var timer1 = setInterval(hora, 1000);
var timer2 = setInterval(segundo, 1000);
