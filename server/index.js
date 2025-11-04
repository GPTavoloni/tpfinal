//import express from 'express';
//import bodyParser from 'body-parser';
//const app = express();
//import path from 'path';
//const PORT = process.env.PORT || 5000;
//import { fileURLToPath } from 'url';
//import { dirname } from 'path';
//
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);
import { createClient } from '@supabase/supabase-js'

const REACT_APP_SUPABASE_URL='https://rsfsvxrtvithnoyoylsr.supabase.co'
const REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZnN2eHJ0dml0aG5veW95bHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNjk3MDgsImV4cCI6MjA3NDg0NTcwOH0.9huX49cvKpM9kBLbzookBNedrtQUCTOVfrnYBxgtN04'

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY)
//
//// API routes
////app.use(express.json());
//app.use(bodyParser.json());
//
//// Servir archivos estáticos de React
//app.use(express.static(path.join(__dirname, '../client/build')));
//
//
//    
//
//app.get('/api/data', (req, res) => {
//  const data = [
//    { id: 1, name: 'John Doe' },
//    { id: 2, name: 'Jane Smith' },
//    // Add more data as needed
//  ];
//  res.json(data);
//  console.log(req.headers)
//});
//app.post('/api/login', (req, res) => {
//console.log(req.body)
//    const {usuario, contrase} = req.body;
//    console.log(usuario);
//    console.log(contrase);
//    
//    res.json(req.body);
//    res.statusCode = 200;
//    res.setHeaders
//    res.end()
//});

//app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
//});

//(async ()=>{
//try{
//let{ datos, error } = await supabase.from('usuarios').select('*')
//console.log(datos);
//console.log(error)
//}
//catch(error){
//console.log(error)
//}
//})();
let prueba = async ()=>{

let{ datos, error } = await supabase.from('usuarios').select('*')
console.log(datos);
console.log(error);

}

prueba();



