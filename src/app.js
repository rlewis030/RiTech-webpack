// Bootstrap JS
import 'bootstrap';
import './scss/app.scss';

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./dist/sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}