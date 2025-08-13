#!/usr/bin/env node

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Generate config.js with environment variables (must come before static files)
app.get('/config.js', (req, res) => {
    const geminiKey = process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
    const configContent = `
// Auto-generated configuration from environment variables
window.GEMINI_API_KEY = '${geminiKey}';
window.GOOGLE_MAPS_API_KEY = '${mapsKey}';
console.log('Gemini API Key:', window.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY' ? 'configured' : 'not configured');
console.log('Google Maps API Key:', window.GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY' ? 'configured' : 'not configured');
`;
    
    res.setHeader('Content-Type', 'application/javascript');
    res.send(configContent);
});

// Serve static files (after dynamic routes)
app.use(express.static('.'));

// Serve the main HTML file at /pola-digital-twin
app.get('/pola-digital-twin', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Test page for Google Maps API
app.get('/test-maps', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-maps.html'));
});

// Test the fixed maps version
app.get('/maps-test', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-fixed.html'));
});

// Debug maps version
app.get('/debug-maps', (req, res) => {
    res.sendFile(path.join(__dirname, 'debug-maps.html'));
});

// Serve fix-maps.js
app.get('/fix-maps.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'fix-maps.js'));
});

// Redirect root to the application
app.get('/', (req, res) => {
    res.redirect('/pola-digital-twin');
});

app.listen(port, () => {
    console.log(`🚢 Port of Los Angeles Digital Twin Dashboard`);
    console.log(`📡 Server running at http://localhost:${port}/pola-digital-twin`);
    console.log(`🌐 Root redirect: http://localhost:${port} -> /pola-digital-twin`);
    console.log(`🔑 Gemini API Key: ${process.env.GEMINI_API_KEY ? 'configured' : 'not configured'}`);
    console.log(`🗺️ Google Maps API Key: ${process.env.GOOGLE_MAPS_API_KEY ? 'configured' : 'not configured'}`);
    console.log('');
    console.log('To configure API keys:');
    console.log('export GEMINI_API_KEY="your_gemini_key_here"');
    console.log('export GOOGLE_MAPS_API_KEY="your_maps_key_here"');
    console.log('node server.js');
});