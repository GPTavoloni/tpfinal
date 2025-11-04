import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import path from 'path';
const PORT = process.env.PORT || 5000;
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createClient } from '@supabase/supabase-js'

const REACT_APP_SUPABASE_URL='https://rsfsvxrtvithnoyoylsr.supabase.co'
const REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY='sb_secret_aM8iNzeSqJ8aI_zS-kQs7Q_vx1elWZX'

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY)

// API routes
//app.use(express.json());
app.use(bodyParser.json());

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, '../client/build')));


    

app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more data as needed
  ];
  res.json(data);
  console.log(req.headers)
});
app.post('/api/login', (req, res) => {
console.log(req.body)
    const {usuario, contrase} = req.body;
    console.log(usuario);
    console.log(contrase);
    
    res.json(req.body);
    res.statusCode = 200;
    res.setHeaders
    res.end()
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
(async ()=>{
const { datos, error } = await supabase.from('usuarios').select('*')
console.log(datos);
console.log(error)
})()




