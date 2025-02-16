require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve le immagini caricate

app.get('/', (req, res) => {
    res.send('Server funzionante! 🚀 Le API sono disponibili su /api/products');
});

// Configurazione PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: '37.182.98.7',
    database: 'euroimpianti',
    password: 'postgres', // Cambia con la tua password di PostgreSQL
    port: 5432
});

// Configurazione Multer per upload immagini
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// **API REST**
// 📌 1️⃣ Ottenere tutti i prodotti
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error("Errore nella query:", err); // Aggiunto console.error
        res.status(500).json({ error: err.message });
    }
});

// 📌 2️⃣ Aggiungere un nuovo prodotto
app.post('/api/products', upload.single('image'), async (req, res) => {
    const { name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const result = await pool.query(
            'INSERT INTO products (name, description, image) VALUES ($1, $2, $3) RETURNING *',
            [name, description, image]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 3️⃣ Modificare un prodotto
app.put('/api/products/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const result = await pool.query(
            'UPDATE products SET name=$1, description=$2, image=COALESCE($3, image) WHERE id=$4 RETURNING *',
            [name, description, image, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 4️⃣ Eliminare un prodotto
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id=$1', [id]);
        res.json({ message: 'Prodotto eliminato' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Avvio del server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
    
});
