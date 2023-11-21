import axios from 'axios';

const generateImage = async (prompt) => {
  try {
    const response = await axios.post('http://localhost:3000/generationImage', { prompt, apiKey: process.env.OPENAI_API_KEY });
    return response.data;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

export default generateImage;
