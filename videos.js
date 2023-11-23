const audioButton = document.getElementById("audioButton");
	const tiendaAudio = document.getElementById("tiendaAudio");
	let audioPlaying = false;
	audioButton.addEventListener("click", function () {
		if (audioPlaying) {
			tiendaAudio.pause();
			audioButton.textContent = "Audio de tienda";
		} else {
			tiendaAudio.play();
			audioButton.textContent = "Parar Audio";
		}
		audioPlaying = !audioPlaying;
	});