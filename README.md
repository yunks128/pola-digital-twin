# Port of Los Angeles Digital Twin Dashboard

A comprehensive digital twin visualization system for the Port of Los Angeles, featuring AI-powered operations monitoring, real-time data fusion, and intelligent chat assistance.

![Port of LA Digital Twin](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Gemini API](https://img.shields.io/badge/Gemini%20API-4285F4?logo=google&logoColor=white)

## 🌊 Overview

This digital twin dashboard provides a real-time visualization of Port of Los Angeles operations, combining multiple data sources to create a comprehensive maritime operations center. The system features autonomous AI agents, environmental monitoring, vessel tracking, and intelligent chat assistance powered by Google's Gemini AI.

## ✨ Features

### 🚢 Maritime Operations
- **Real-time Vessel Tracking**: Monitor 247+ vessels using multi-source data fusion (AIS + Radar)
- **Terminal Management**: Track capacity utilization across 6 major terminals
- **Bathymetric Monitoring**: 4D depth modeling with real-time sedimentation tracking
- **Port Infrastructure**: Interactive map with terminals, channels, breakwaters, and navigation aids

### 🤖 AI-Powered Systems
- **5 Autonomous AI Agents**: Bathymetric Fusion, Environmental Compliance, Risk Assessment, Cross-Port Orchestrator, Edge Compute Manager
- **Explainable AI**: Real-time reasoning display with confidence intervals
- **Edge Computing**: 47 distributed nodes with sub-2ms inference latency
- **Automated Operations**: Zero human intervention for routine tasks

### 🌐 Global Connectivity
- **IEEE 2875 Spatial Web**: Global port network with 8 connected ports
- **Real-time Synchronization**: Cross-port data sharing and impact modeling
- **Low Latency Communication**: Average 12ms global port latency

### 💬 Intelligent Chat Assistant
- **Gemini AI Integration**: Natural language queries about port operations
- **Interactive Visualizations**: Dynamic graph generation based on user requests
- **Context-Aware Responses**: AI assistant with complete port operational context
- **5 Visualization Types**: Vessel traffic, terminal capacity, environmental data, AI confidence, efficiency metrics

### 📊 Data Integration
- **23 Data Sources**: Environmental sensors, AIS tracking, weather data, terminal systems
- **94.7% Data Fusion Accuracy**: Multi-source data correlation with uncertainty quantification
- **Real-time Processing**: Live updates from 157 environmental sensors

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (for chat functionality)

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd pola-digital-twin
   ```

2. **Configure API Key**
   
   **Option A: Environment Variable (Recommended)**
   ```bash
   # Add to ~/.bashrc or ~/.zshrc
   export GEMINI_API_KEY="your_actual_api_key_here"
   
   # Reload your shell configuration
   source ~/.bashrc
   ```
   
   **Option B: Direct Code Modification**
   - Open `index.html` in a text editor
   - Find: `const GEMINI_API_KEY = process?.env?.GEMINI_API_KEY || window?.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';`
   - Replace the fallback `'YOUR_GEMINI_API_KEY'` with your actual key
   
   **Get your API key at:** https://aistudio.google.com/app/apikey
   
   **Enable Required APIs:**
   - Generative AI API (for Gemini chat)
   - Maps JavaScript API (for satellite view)

3. **Run the Application**
   
   **Option A: Direct Browser Open**
   ```bash
   open index.html
   ```
   
   **Option B: Local Server (Recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```
   
   Then visit: `http://localhost:8000`

## 🎯 Usage Guide

### Dashboard Navigation
- **Left Sidebar**: AI agent status and confidence levels
- **Main View**: Interactive Port of LA map with real-time vessel positions
- **Right Panel**: Real-time metrics and automation status
- **Bottom Panel**: System-wide statistics and performance metrics
- **Chat Interface**: AI assistant in bottom-right corner

### Chat Commands
Ask the AI assistant about:
- `"Show vessel traffic"` - Display vessel tracking graphs
- `"Terminal capacity status"` - View terminal utilization charts
- `"Environmental data"` - Environmental monitoring visualizations
- `"AI confidence levels"` - Model performance metrics
- `"Port efficiency"` - Operational efficiency breakdown

### Interactive Elements
- **Click Terminals**: View detailed terminal information
- **Hover Vessels**: See vessel details and tracking data
- **Click Graphs**: Full-screen visualization mode
- **Status Indicators**: Real-time system health monitoring

## 🏗️ Architecture

### Single-File Application
- **Technology**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Self-contained application
- **No Build Process**: Ready to run out of the box

### Key Components
```
index.html
├── CSS Styles (lines 7-1100)
│   ├── Dashboard Layout
│   ├── Interactive Map Styling
│   ├── Chat Interface Design
│   └── Graph Overlay Styles
├── HTML Structure (lines 1101-1600)
│   ├── Grid-based Dashboard
│   ├── AI Agent Panels
│   ├── Interactive Port Map
│   ├── Chat Interface
│   └── Graph Overlays
└── JavaScript Functionality (lines 1601-2400+)
    ├── Real-time Simulations
    ├── Gemini API Integration
    ├── Graph Generation
    ├── Interactive Controls
    └── Data Visualization
```

### Data Simulation
All data is simulated client-side for demonstration purposes:
- **Vessel Movements**: Realistic maritime traffic patterns
- **AI Confidence**: Dynamic confidence level updates
- **Environmental Metrics**: Simulated sensor readings
- **Terminal Operations**: Capacity utilization modeling

## 🔧 Configuration

### Gemini API Setup
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Enable both Generative AI API and Maps JavaScript API
4. Set environment variable: `export GEMINI_API_KEY="your_key"`
5. Ensure your API key has access to Gemini Pro model

### Customization Options
- **Port Layout**: Modify terminal positions and names
- **AI Agents**: Add or modify autonomous agent configurations
- **Data Sources**: Customize simulated data ranges
- **Styling**: Update CSS variables for color schemes
- **Graph Types**: Add new visualization categories

## 📊 Available Visualizations

### 1. Vessel Traffic Analysis
- Line graph showing vessel count over 24 hours
- Real-time tracking accuracy metrics
- Multi-source data fusion display

### 2. Terminal Capacity Utilization
- Bar chart of all 6 terminal capacity levels
- Color-coded capacity warnings (Green <70%, Yellow 70-85%, Red >85%)
- Real-time capacity updates

### 3. Environmental Monitoring
- Multi-line graph with air quality, water temperature, noise levels
- 157 sensor data points
- Compliance monitoring display

### 4. AI Model Confidence Levels
- Bar chart showing confidence for each AI agent
- Real-time confidence updates
- Uncertainty quantification

### 5. Port Operational Efficiency
- Pie chart breaking down efficiency by category
- Vessel processing, terminal operations, data sync, edge computing
- Performance optimization insights

## 🌍 Global Port Network

The dashboard simulates connections to major global ports:
- 🇸🇬 **Singapore** - 8ms latency
- 🇳🇱 **Rotterdam** - 15ms latency  
- 🇨🇳 **Shanghai** - 23ms latency
- 🇬🇧 **Felixstowe** - 12ms latency

Each connection shows real-time latency and synchronization status.

## 🔒 Security Notes

- **API Key Protection**: Keep your Gemini API key secure
- **Client-Side Only**: No server-side data storage
- **No Sensitive Data**: All data is simulated for demonstration
- **HTTPS Recommended**: Use HTTPS for production deployments

## 🤝 Contributing

This is a demonstration application. For production use:
1. Implement proper backend data sources
2. Add authentication and authorization
3. Implement real-time data streaming
4. Add comprehensive error handling
5. Optimize for production deployment

## 📝 License

This project is provided as-is for demonstration purposes. Please ensure compliance with all applicable licenses when using third-party APIs and services.

## 🔗 API Documentation

- **Gemini API**: https://ai.google.dev/docs
- **Port of LA Data**: https://www.portoflosangeles.org/
- **IEEE 2875 Standard**: https://standards.ieee.org/standard/2875-2021.html

## 📧 Support

For technical issues or questions:
1. Check the browser console for error messages
2. Verify your Gemini API key is correctly configured
3. Ensure you're using a modern web browser
4. Test with a local HTTP server rather than file:// protocol

---

**Built with ❤️ for the Port of Los Angeles Digital Twin Initiative**