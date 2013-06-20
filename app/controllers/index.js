$.index.open();

var casinoAnno = [];

function readFile(path) {
	var f;
	if (Ti.Platform.osname == 'android') {
		f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, path);
	} else {
		f = Ti.Filesystem.getFile(path);
	}
	if (f.exists()) {
		Ti.API.info(JSON.parse(f.read().text))
		return JSON.parse(f.read().text);
	}
}

windowArray = readFile("itemss.json");

Ti.API.info('Length' + windowArray.men.length);

$.mapview.region = {
	latitude : windowArray.men[0].latitude,
	longitude : windowArray.men[0].longitude,
	latitudeDelta : 100.0,
	longitudeDelta : 100.0,
	animate : true,
};

for (var i = 0; i < windowArray.men.length; i++) {

	casinoAnno.push(Titanium.Map.createAnnotation({
		latitude : windowArray.men[i].latitude,
		longitude : windowArray.men[i].longitude,
		title : windowArray.men[i].name,
		video : windowArray.men[i].videoLink,
		rightButton : Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		animate : true,
	}))

	$.mapview.annotations = casinoAnno;
}

$.mapview.addEventListener('click', function(e) {

	if (e.clicksource == 'rightButton') {
		alert(e.annotation.video);
		alert(e.annotation.title);
	}
});
