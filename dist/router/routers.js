"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const livroController_1 = require("../controllers/livroController");
const router = (0, express_1.Router)();
router.post('/livro', livroController_1.create);
router.get('/livro', livroController_1.researchAll);
router.get('/livro/:titulo', livroController_1.researchId);
router.put('/livro/:id', livroController_1.update);
router.delete('/livro/:id', livroController_1.deleted);
exports.default = router;
