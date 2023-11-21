// No arquivo server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para lidar com solicitações JSON

// Rota para análise de imagem
app.post('/imageGeneration', (req, res) => {
  // Lógica para chamar a API da OpenAI e gerar a imagem
  // ...

  // Exemplo de resposta
  res.json({ message: 'Image generated successfully' });
});

// Iniciar o servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
