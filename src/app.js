// Bootstrap JS
import 'bootstrap';
import './scss/app.scss';

// Font Awesome CSS
import 'font-awesome/css/font-awesome.css';

// Google Maps API
import { Map } from './map';

document.addEventListener("DOMContentLoaded", function() {
    let mapElement = document.getElementById('map-container');

    Map.loadGoogleMapsApi().then(function(googleMaps) {
        Map.createMap(googleMaps, mapElement);
    });
});

$(document).ready(() => {
    // Move content below navbar
    var navHeight = $('.navbar')[0].offsetHeight;
    $('#page-content').css('margin-top', navHeight);
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}