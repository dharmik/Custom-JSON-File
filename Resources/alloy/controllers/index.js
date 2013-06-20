function Controller() {
    function readFile(path) {
        var f;
        f = "android" == Ti.Platform.osname ? Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, path) : Ti.Filesystem.getFile(path);
        if (f.exists()) {
            Ti.API.info(JSON.parse(f.read().text));
            return JSON.parse(f.read().text);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId1,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true"
    });
    $.__views.index.add($.__views.mapview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var casinoAnno = [];
    windowArray = readFile("itemss.json");
    Ti.API.info("Length" + windowArray.men.length);
    $.mapview.region = {
        latitude: windowArray.men[0].latitude,
        longitude: windowArray.men[0].longitude,
        latitudeDelta: 100,
        longitudeDelta: 100,
        animate: true
    };
    for (var i = 0; windowArray.men.length > i; i++) {
        casinoAnno.push(Titanium.Map.createAnnotation({
            latitude: windowArray.men[i].latitude,
            longitude: windowArray.men[i].longitude,
            title: windowArray.men[i].name,
            video: windowArray.men[i].videoLink,
            rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
            animate: true
        }));
        $.mapview.annotations = casinoAnno;
    }
    $.mapview.addEventListener("click", function(e) {
        "rightButton" == e.clicksource && alert(e.annotation.video);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;