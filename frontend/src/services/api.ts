import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const evaluatePronunciation = async (audioBlob: Blob, text: string): Promise<number> => {
  const formData = new FormData();
  formData.append('audio', audioBlob);
  formData.append('text', text);

  try {
    const response = await axios.post(`${API_BASE_URL}/evaluate`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.score;
  } catch (error) {
    console.error('Error evaluating pronunciation:', error);
    throw error;
  }
}; 