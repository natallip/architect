module.exports = (function(){
  ymaps.ready(function () {
    const myMap = new ymaps.Map("map", {
      center: [59.9200, 30.312], 
      zoom: 15,
      controls: []
    });
    myMap.behaviors.disable(['rightMouseButtonMagnifier', 'ruler']);    
    
    const myPlacemark = new ymaps.Placemark([59.917782, 30.310161], {}, {  
      iconLayout: 'default#image',
      iconImageHref: '/images/locating.svg',
      iconImageSize: [80, 100],
      iconImageOffset: [-100, -80]
    });
    myMap.geoObjects.add(myPlacemark);    
  });   
})(); 