// No need to touch for now...

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import professorRoutes from './routes/professorRoutes.js';

dotenv.config(); 
connectDB();     

const app = express();


app.use(cors()); 
app.use(express.json());

app.use('/api/professors', professorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));