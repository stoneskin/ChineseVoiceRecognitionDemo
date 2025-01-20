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

for Windows, run below command to activate virtual environment
```bash
.\venv\Scripts\activate.bat
```

2. Install dependencies:
```bash
pip install --upgrade setuptools
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
