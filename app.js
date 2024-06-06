 const express = require('express');
    const path = require('path');

    const app = express();
    const port = 3000;

    // Настройка сервировки статических файлов
    app.use(express.static(path.join(__dirname, 'public')));

    // Маршруты для страниц
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.get('/menu', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'menu.html'));
    });

    app.get('/contacts', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'contacts.html'));
    });

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });