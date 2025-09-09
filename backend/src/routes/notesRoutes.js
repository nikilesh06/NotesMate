import express from 'express';
import { getAllNotes,getNoteBYId,createNotes,updateNotes,deleteNotes } from '../contollers/noteController.js';

const router = express.Router();

router.get('/',getAllNotes);
router.get('/:id',getNoteBYId);
router.post('/',createNotes);
router.put('/:id',updateNotes);
router.delete('/:id',deleteNotes);

export default router;