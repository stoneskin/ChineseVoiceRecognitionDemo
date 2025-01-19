from transformers import pipeline
import torch
import numpy as np

class SpeechProcessor:
    def __init__(self):
        # Initialize the ASR model for Mandarin
        self.model = pipeline(
            "automatic-speech-recognition",
            model="openai/whisper-small",
            device="cuda" if torch.cuda.is_available() else "cpu"
        )

    def process_audio(self, audio_file, expected_text):
        try:
            # Transcribe the audio
            result = self.model(audio_file, task="transcribe", language="zh")
            transcribed_text = result["text"]

            # Calculate similarity score
            score = self.calculate_similarity(transcribed_text, expected_text)
            
            return {
                "score": score,
                "transcribed_text": transcribed_text
            }
        except Exception as e:
            raise Exception(f"Error processing audio: {str(e)}")

    def calculate_similarity(self, transcribed_text, expected_text):
        # Simple character-based similarity score
        # You might want to implement a more sophisticated comparison
        transcribed_chars = set(transcribed_text)
        expected_chars = set(expected_text)
        
        if not expected_chars:
            return 0
            
        common_chars = transcribed_chars.intersection(expected_chars)
        score = (len(common_chars) / len(expected_chars)) * 100
        
        return min(max(score, 0), 100) 