import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = 'bd3597543e9040b4995ab3202671bc05'; // Substitua pelo seu valor real

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const analysisResult = await analyzeImage(inputValue, apiKey);
      setResult(analysisResult);
    } catch (error) {
      console.error('Error analyzing image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Computer Vision</h1>
      <h3>Insert URL or type prompt</h3>
      <input
        type="text"
        placeholder="Enter URL to analyze or textual prompt to generate an image"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={handleAnalyze}>Analyze</button>
      <button>Generate</button>
      <hr />

      {/* Exibir resultados */}
      {loading && <p>Analyzing image...</p>}
      {result && (
        <div>
          <p>Results:</p>
          {/* Exibir descrição */}
          <p>{result.description?.captions[0]?.text}</p>
          {/* Exibir imagem se houver URL */}
          {inputValue && <img src={inputValue} alt="Analyzed" style={{ maxWidth: '100%' }} />}
          {/* Exibir JSON completo para referência */}
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
