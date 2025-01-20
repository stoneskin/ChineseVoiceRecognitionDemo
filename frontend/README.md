# Chinese Words Recognition App - Frontend

## Overview
This is the frontend component of the Chinese Words Recognition App, built with React and TypeScript. The application helps students learn Chinese pronunciation by providing real-time feedback on their spoken words.

## Architecture Diagram

```
Frontend Architecture:
┌─────────────────────────────────────────┐
│               React UI                   │
│                                         │
│  ┌─────────────┐       ┌─────────────┐  │
│  │   Audio     │       │   Score     │  │
│  │  Recorder   │       │  Display    │  │
│  └─────────────┘       └─────────────┘  │
│         │                     ▲         │
│         │                     │         │
│         ▼                     │         │
│  ┌─────────────┐       ┌─────────────┐  │
│  │   API       │ ─────▶│   State     │  │
│  │  Service    │       │  Management │  │
│  └─────────────┘       └─────────────┘  │
└─────────────────────────────────────────┘
```

## Features
- Large display of Chinese characters
- Audio recording with microphone
- Real-time pronunciation feedback
- Visual score display (0-100)
- Color-coded progress bar:
  - Green: 75-100
  - Yellow: 50-74
  - Red: 0-49
- Responsive design for desktop and mobile
- Loading states and error handling

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chinese-words-app/frontend
```

2. Install dependencies:
```bash
npm install
```

## Project Structure
```
frontend/
├── src/
│   ├── services/
│   │   ├── audioRecorder.ts    # Audio recording logic
│   │   └── api.ts             # Backend API communication
│   ├── App.tsx                # Main application component
│   └── index.tsx              # Entry point
├── public/
└── package.json
```

## Key Components
1. AudioRecorder Service
   - Handles microphone access
   - Records audio input
   - Manages recording states

2. API Service
   - Communicates with backend
   - Sends audio data
   - Receives pronunciation scores

3. Main App Component
   - Displays Chinese characters
   - Shows recording interface
   - Renders score feedback

## Running the Application

1. Start the development server:
```bash
npm start
```

2. Open browser at: `http://localhost:3000`

## Building for Production
```bash
npm run build
```

## Technologies Used
- React 18
- TypeScript
- Material-UI
- Emotion (styled components)
- Axios for API calls
- Web Audio API

## Notes
- Ensure microphone permissions are enabled in your browser
- Backend server should be running at `http://localhost:5000`






