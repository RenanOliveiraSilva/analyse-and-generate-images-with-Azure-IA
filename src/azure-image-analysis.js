// azure-image-analysis.js

import axios from 'axios';

const analyzeImage = async (imageUrl, apiKey) => {
  const endpoint = 'https://appgithub.cognitiveservices.azure.com/';

  const params = {
    visualFeatures: 'Categories,Description,Color',
    details: '',
    language: 'en',
  };

  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': apiKey,
  };

  try {
    const response = await axios.post(
      `${endpoint}/vision/v3.0/analyze`,
      { url: imageUrl },
      { params, headers }
    );

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};

export default analyzeImage;
