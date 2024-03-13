const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota para obter todos os posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os posts' });
  }
});

// Rota para obter um post específico
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o post' });
  }
});

// Rota para obter os comentários de um post específico
app.get('/posts/:id/comments', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os comentários' });
  }
});

// Rota para obter todos os álbuns
app.get('/albums', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os álbuns' });
  }
});

// Rota para obter todas as fotos
app.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter as fotos' });
  }
});

// Rota para obter todas as tarefas
app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter as tarefas' });
  }
});

// Rota para obter todos os usuários
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os usuários' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});