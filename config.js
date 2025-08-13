// Configuration for local development
// This file will be replaced by GitHub Actions during deployment
window.GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
window.GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
console.log('Gemini API Key:', window.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY' ? 'configured' : 'not configured');
console.log('Google Maps API Key:', window.GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY' ? 'configured' : 'not configured');