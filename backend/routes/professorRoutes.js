//4. API ROUTES

import express from 'express';
import { createProfessor, getProfessors, deleteProfessor, updateProfessor } from '../controllers/professorController.js';

const router = express.Router();


router.post('/', createProfessor);
router.get('/', getProfessors); 
router.delete('/:id', deleteProfessor);
router.put('/:id', updateProfessor); 

export default router;