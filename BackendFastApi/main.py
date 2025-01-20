from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import torch
from transformers import WhisperProcessor, WhisperForConditionalGeneration
import numpy as np
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EvaluationResponse(BaseModel):
    score: float
    transcribed_text: str

@app.post("/api/evaluate", response_model=EvaluationResponse)
async def evaluate(audio: UploadFile, text: str = Form(...)):
    # Load Whisper model and processor
    processor = WhisperProcessor.from_pretrained("openai/whisper-small")
    model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-small")

    # Read audio file
    audio_bytes = await audio.read()
    audio_array = np.frombuffer(audio_bytes, dtype=np.int16)

    # Process audio
    inputs = processor(audio_array, return_tensors="pt", sampling_rate=16000)
    with torch.no_grad():
        predicted_ids = model.generate(inputs.input_features, max_length=50)
    transcription = processor.batch_decode(predicted_ids, skip_special_tokens=True)[0]

    # Calculate similarity score
    score = calculate_similarity(transcription, text)

    return EvaluationResponse(score=score, transcribed_text=transcription)

def calculate_similarity(transcribed_text, reference_text):
    # Dummy similarity calculation
    return np.random.uniform(0, 100)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
