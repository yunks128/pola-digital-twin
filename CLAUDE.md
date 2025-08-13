# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **single-file HTML application** that implements a digital twin dashboard for the Port of Los Angeles. The entire application is contained within `index.html` - a self-contained HTML file with embedded CSS and JavaScript.

## Architecture

The application consists of:

- **Single HTML file** (`index.html`) containing:
  - Complete CSS styling (lines 7-921)
  - HTML structure for dashboard layout (lines 924-1327)
  - JavaScript functionality (lines 1329-1538)

- **Dashboard Layout**:
  - Grid-based layout with header, sidebar, main view, control panel, and footer
  - Real-time simulated data displays
  - Interactive port map with terminals and vessels
  - AI agent status panels
  - Global port network connections

- **Key Components**:
  - Port of LA map visualization with terminals, vessels, and infrastructure
  - AI agent cards showing autonomous operations
  - Real-time metrics and data fusion displays
  - Edge computing network visualization
  - Explainable AI reasoning panels

## Development

### Running the Application

Since this is a static HTML file, simply:
```bash
# Open directly in browser
open index.html

# Or serve locally with any HTTP server
python -m http.server 8000
# Then visit http://localhost:8000
```

### Making Changes

All modifications should be made directly to `index.html`:

- **Styling**: Modify CSS in the `<style>` section (lines 7-921)
- **Layout**: Update HTML structure (lines 924-1327) 
- **Functionality**: Edit JavaScript in the `<script>` section (lines 1329-1538)

### Key JavaScript Functions

- `createVesselMarkers()` - Generates vessel positions and tracking data
- `createEdgeNodes()` - Places edge computing nodes on the map
- `updateConfidenceLevels()` - Simulates real-time AI confidence updates
- `simulateAutomation()` - Shows automated report generation
- `updateVesselPositions()` - Animates vessel movement
- `updateGlobalPortLatency()` - Updates network latency indicators

## Features Simulated

- **Multi-source data fusion** from 23 integrated systems
- **Autonomous AI agents** with confidence levels and real-time status
- **Edge computing network** with 47 distributed nodes
- **Global port connections** with IEEE 2875 spatial web protocol
- **Explainable AI** with uncertainty quantification
- **Real-time vessel tracking** using AIS and radar data
- **Environmental compliance** monitoring
- **Risk assessment** and automated mitigation

No backend services, databases, or external dependencies are required. All data is simulated client-side for demonstration purposes.