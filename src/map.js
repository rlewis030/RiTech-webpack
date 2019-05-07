const loadGoogleMapsApi = require('load-google-maps-api');
class Map {
  


    static loadGoogleMapsApi() 
    {
        return loadGoogleMapsApi({ key: 'AIzaSyBUPkUWhPVzMLh7_lnSG4igGuvbURXzi0k' });
    }
    static createMap(googleMaps, mapElement) 
    {
        return new googleMaps.Map(mapElement, 
        {
            center: { lat: 42.984268, lng: -81.247528 },
            zoom: 13,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
        });
    }
}
export { Map };