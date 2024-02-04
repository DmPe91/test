ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [44.98, 38.94],
    zoom: 15,
    controls: [],
  });
  var placemark_clinic = new ymaps.Placemark(
    [44.985, 38.946],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "image/medical.png",

      iconImageSize: [61, 61],
    }
  );
  var placemark_complex = new ymaps.Placemark(
    [44.98, 38.94],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "image/geo.png",

      iconImageSize: [61, 61],
    }
  );
  var placemark_gas_station = new ymaps.Placemark(
    [44.987, 38.93],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "image/azs.png",

      iconImageSize: [61, 61],
    }
  );
  var placemark_shop = new ymaps.Placemark(
    [44.97, 38.94],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "image/shop.png",

      iconImageSize: [61, 61],
    }
  );
  var placemark_kindergarten = new ymaps.Placemark(
    [44.981, 38.941],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "image/children.png",

      iconImageSize: [61, 61],
    }
  );
  myMap.geoObjects
    .add(placemark_clinic)
    .add(placemark_complex)
    .add(placemark_gas_station)
    .add(placemark_shop)
    .add(placemark_kindergarten);

  ButtonLayout = ymaps.templateLayoutFactory.createClass(
    [
      '<div  class="maps-button" >',
      '<div onclick="{{data.func}}">',
      '<img class="maps-button__img" src="{{ data.image }}" alt="{{ data.title }}">',
      '<span class="maps-button__text">{{ data.content }}</span>',
      "</div>",
      "</div>",
    ].join("")
  );
  button_complex = new ymaps.control.Button({
    data: {
      content: "ЖК Яблоновский",
      image: "image/geo.png",
      func: () => {
        placemark_complex
          ? myMap.geoObjects.remove(placemark_complex)
          : myMap.geoObjects.add(placemark_complex);
      },
    },
    options: {
      layout: ButtonLayout,
    },
  });
  button_clinic = new ymaps.control.Button({
    data: {
      content: "Поликлиника",
      image: "image/medical.png",
      func: () => {
        placemark_complex
          ? myMap.geoObjects.remove(placemark_complex)
          : myMap.geoObjects.add(placemark_complex);
      },
    },
    options: {
      layout: ButtonLayout,
    },
  });
  button_kindergarten = new ymaps.control.Button({
    data: {
      content: "Детский сад",
      image: "image/children.png",
      func: () => {
        placemark_complex
          ? myMap.geoObjects.remove(placemark_complex)
          : myMap.geoObjects.add(placemark_complex);
      },
    },
    options: {
      layout: ButtonLayout,
    },
  });
  button_shop = new ymaps.control.Button({
    data: {
      content: "Магазин",
      image: "image/shop.png",
      func: () => {
        placemark_complex
          ? myMap.geoObjects.remove(placemark_complex)
          : myMap.geoObjects.add(placemark_complex);
      },
    },
    options: {
      layout: ButtonLayout,
    },
  });
  button_gas_station = new ymaps.control.Button({
    data: {
      content: "АЗС",
      image: "image/azs.png",
      func: () => {
        placemark_complex
          ? myMap.geoObjects.remove(placemark_complex)
          : myMap.geoObjects.add(placemark_complex);
      },
    },
    options: {
      layout: ButtonLayout,
    },
  });
  myMap.controls
    .add(button_complex, {
      position: {
        right: 0,
        top: 0,
      },
    })
    .add(button_clinic, {
      position: {
        right: 0,
        top: 112,
      },
    })
    .add(button_gas_station, {
      position: {
        right: 0,
        top: 232,
      },
    })
    .add(button_kindergarten, {
      position: {
        right: 0,
        top: 351,
      },
    })
    .add(button_shop, {
      position: {
        right: 0,
        top: 463,
      },
    });
}
