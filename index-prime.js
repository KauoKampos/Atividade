// Biblioteca Axios
const axios = require('axios');

// URL da API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Requisição HTTP GET API
axios.get(apiUrl)

    .then((response) => {
        // Exiir dados no console
        console.log("Dados da API:", response.data);
    })

    .catch((error) => {
        // Em caso de erro, exibiir no console:
        console.error("Erro ao acessar a API:", error);
    })