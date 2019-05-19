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

// Lazy load images
window.addEventListener('load', function() {
    var lazyLoadImages = document.getElementsByClassName('lazy-load');
    for (var i = 0; i < lazyLoadImages.length; i++) {
        if (lazyLoadImages[i].getAttribute('data-src')) {
            lazyLoadImages[i].setAttribute('src', lazyLoadImages[i].getAttribute('data-src'));
        }
    }
}, false)

// Smooth Scrolling
$('.navbar a[href^="#"], .landing a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));

    // Close responsive menu when scroll trigger is clicked
    $('.navbar-collapse').collapse('hide');

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 48
        }, 1000);
    }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}