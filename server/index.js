const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;


// API routes
app.use(express.json());
app.use('/api', require('./routes')); // tus rutas API

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, '../client/build')));

// Todas las rutas no-API retornan la app React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more data as needed
  ];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



