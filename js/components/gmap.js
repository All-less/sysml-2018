"use strict";

window.initMap = function() {
  var customMapType = new google.maps.StyledMapType([
    {
      stylers: [
        {'saturation': -100},
        {'lightness': 50},
        {'visibility': 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [{visibility: 'on'}]
    },
    {
      featureType: 'road',
      stylers: [{color: '#bbb'}]
    }
  ], {
    name: 'Dublin'
  });

  var image = new google.maps.MarkerImage(
  	'img/widgets/gmap-pin.png',
  	new google.maps.Size(48,54),
  	new google.maps.Point(0,0),
  	new google.maps.Point(24,54)
	);

  var customMapTypeId = 'custom_style';

  var stanford = {lat: 37.423, lng: -122.167};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: stanford, 
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    title: 'Stanford',
    position: stanford
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}
/*
     FILE ARCHIVED ON 13:16:08 Apr 18, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:35:45 Apr 28, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 1100.702 (3)
  esindex: 0.013
  captures_list: 1121.43
  CDXLines.iter: 10.718 (3)
  PetaboxLoader3.datanode: 1044.004 (4)
  exclusion.robots: 0.342
  exclusion.robots.policy: 0.287
  RedisCDXSource: 5.941
  PetaboxLoader3.resolve: 207.705 (2)
  load_resource: 162.867
*/