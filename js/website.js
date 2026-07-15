layers = document.getElementsByClassName("parallax");

positionLayers = function(e) {
	var isMobile = window.matchMedia("only screen and (max-width: 930px)").matches;
	var scrolled = window.pageYOffset;
	if (isMobile) {
		scrolled = 0;
	}

	var layer, speed, top;
	for (var i = 0; i < layers.length; i++) {
		layer = layers[i];
		speed = layer.getAttribute('data-speed');
		top = layer.getAttribute('data-top');
		layer.style.top = (top - scrolled * speed) + "px";
	}
};

window.addEventListener('scroll', positionLayers);
window.onload = positionLayers;