# Demo of Chinese Words Recognition App

- You are an LLM solution architect and developer. Your task is to help build a demo app to assist students in learning Chinese..
- The demo app will consist of two parts: a Web UI as front and a web API as backend. Please use JavaScript with TypeScript and React for the front end, and Python for the backend API.
- In the front-end Web UI, display Chinese words. For example, display the Chinese text "你好" in a large font with a microphone icon to record the user's speech.
- There will be an AJAX call to submit the user's voice recording and the text of the word to the backend API for processing.
- The backend API will use an appropriate LLM model via the Hugging Face API to evaluate how closely the user's pronunciation matches the Chinese text. The response will include a score from 0 to 100, where 0 means the sound and text are not at all similar, and 100 means they are a perfect match.
- The score will be returned to the UI and displayed to the user. It will show a bar with a scale from 0 to 100. The full bar background will be grey, and the score bar will be red if the score is below 50, yellow if the score is between 50 and 74, and green if the score is between 75 and 100
- The Web UI wil need responsive for large screen and small mobile device screen
