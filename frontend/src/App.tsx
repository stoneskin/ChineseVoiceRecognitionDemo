import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Typography, IconButton, CircularProgress } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { AudioRecorder } from './services/audioRecorder';
import { evaluatePronunciation } from './services/api';

const WordDisplay = styled.div`
  font-size: 72px;
  text-align: center;
  margin: 20px 0;
  @media (max-width: 600px) {
    font-size: 48px;
  }
`;

const ScoreBar = styled.div<{ score: number }>`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: ${props => props.score}%;
    background-color: ${props => 
      props.score >= 75 ? '#4caf50' :
      props.score >= 50 ? '#ffeb3b' :
      '#f44336'
    };
    transition: width 0.3s ease-in-out;
  }
`;

const audioRecorder = new AudioRecorder();

const App: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chineseWord = "你好";

  const handleRecording = async () => {
    try {
      if (!isRecording) {
        // Start recording
        setIsRecording(true);
        setError(null);
        await audioRecorder.startRecording();
      } else {
        // Stop recording and process
        setIsLoading(true);
        const audioBlob = await audioRecorder.stopRecording();
        setIsRecording(false);

        // Send to backend
        const newScore = await evaluatePronunciation(audioBlob, chineseWord);
        setScore(newScore);
      }
    } catch (error) {
      console.error('Error during recording:', error);
      setError('Error processing audio. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chinese Words Recognition
        </Typography>
        
        <WordDisplay>{chineseWord}</WordDisplay>
        
        <IconButton 
          onClick={handleRecording}
          color={isRecording ? "secondary" : "primary"}
          sx={{ mb: 3 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={40} />
          ) : (
            <MicIcon sx={{ fontSize: 40 }} />
          )}
        </IconButton>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" gutterBottom>
            Score: {Math.round(score)}
          </Typography>
          <ScoreBar score={score} />
        </Box>
      </Box>
    </Container>
  );
};

export default App; 