from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from speech_processor import SpeechProcessor
import tempfile

load_dotenv()

app = Flask(__name__)
CORS(app)

speech_processor = SpeechProcessor()

@app.route('/api/evaluate', methods=['POST'])
def evaluate_pronunciation():
    try:
        if 'audio' not in request.files:
            return jsonify({'error': 'No audio file provided'}), 400
        
        audio_file = request.files['audio']
        chinese_text = request.form.get('text')
        
        if not chinese_text:
            return jsonify({'error': 'No Chinese text provided'}), 400

        # Save the audio file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix='.wav') as temp_audio:
            audio_file.save(temp_audio.name)
            result = speech_processor.process_audio(temp_audio.name, chinese_text)
        
        # Clean up the temporary file
        os.unlink(temp_audio.name)
        
        return jsonify({
            'score': result['score'],
            'transcribed_text': result['transcribed_text']
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 