import { Router } from "express";
import {creat, researchAll, researchId, update, delet} from "../controllers/livroController";

const router = Router();

router.post('/livro', creat)
router.get('/livro', researchAll) 
router.get('/livro/:titulo', researchId)
router.put('/livro/:id', update)
router.delete('/livro/:id', delet)

export default router