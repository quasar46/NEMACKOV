ymaps.ready(init);
var myMap,
    myMap2,
    myPlacemark;

function init() {
    myMap = new ymaps.Map("map", {
        center: [51.746016, 36.186781],
        zoom: 16,
        behaviors: ['drag']
    });

    if (window.matchMedia("(max-width: 991px)").matches) {
        myMap.behaviors
            .disable('drag')
            .enable('multiTouch');
    }

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
    });

    myMap.geoObjects.add(myPlacemark);


    myMap2 = new ymaps.Map("map2", {
        center: [51.780175, 36.295252],
        zoom: 16,
        behaviors: ['drag']
    });

    if (window.matchMedia("(max-width: 991px)").matches) {
        myMap2.behaviors
            .disable('drag')
            .enable('multiTouch');
    }

    myPlacemark = new ymaps.Placemark(myMap2.getCenter(), {}, {
        iconLayout: 'default#image',
    });
    myMap2.geoObjects.add(myPlacemark);
}