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
```

And for the backend:

```markdown:backend/README.md
# Chinese Words Recognition App - Backend

## Overview
Python Flask backend for the Chinese Words Recognition App. Processes audio recordings and evaluates Chinese pronunciation using the Whisper ASR model.

## Architecture Diagram
```
Backend Architecture:
┌─────────────────────────────────────────┐
│              Flask Backend              │
│                                         │
│  ┌─────────────┐       ┌─────────────┐  │
│  │   Flask     │ ─────▶│   Speech    │  │
│  │   API       │       │  Processor  │  │
│  └─────────────┘       └─────────────┘  │
│         │                     │         │
│         │                     ▼         │
│         │              ┌─────────────┐  │
│         └────────────▶ │   Whisper   │  │
│                        │    Model    │  │
│                        └─────────────┘  │
└─────────────────────────────────────────┘
```

## Features
- RESTful API endpoint for audio evaluation
- Whisper model integration for speech recognition
- Chinese text similarity scoring
- CORS support
- Error handling
- Temporary file management

## Prerequisites
- Python 3.8+
- pip
- Virtual environment (recommended)

## Installation

1. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Configuration
Create `.env` file:
```
HUGGINGFACE_API_KEY=your_api_key_here
```

## Project Structure
```
backend/
├── app.py                # Main Flask application
├── speech_processor.py   # Speech processing logic
├── requirements.txt      # Dependencies
└── .env                 # Environment variables
```

## API Endpoints

### POST /api/evaluate
Evaluates Chinese pronunciation.

Request:
- Method: POST
- Content-Type: multipart/form-data
- Body:
  - audio: Audio file (WAV)
  - text: Chinese text

Response:
```json
{
    "score": 85.5,
    "transcribed_text": "你好"
}
```

## Running the Application

1. Activate virtual environment:
```bash
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. Start server:
```bash
python app.py
```

Server runs at: `http://localhost:5000`

## Technologies Used
- Flask
- Hugging Face Transformers
- Whisper ASR Model
- PyTorch
- NumPy

## Error Handling
- 200: Success
- 400: Bad Request (missing audio/text)
- 500: Server Error

## Notes
- Ensure HUGGINGFACE_API_KEY is valid
- Audio files are processed in WAV format
- Temporary files are automatically cleaned up
```


