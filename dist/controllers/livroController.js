"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delet = exports.update = exports.researchId = exports.researchAll = exports.creat = void 0;
// import {v4 as uuidv4 } from 'uuid'
const client_1 = require("@prisma/client");
const TratamentoErros_1 = require("../utils/TratamentoErros");
const prisma = new client_1.PrismaClient();
//********************************************************************************************* */
const creat = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, autor, publish_yaer, genero } = request.body;
    try {
        const result = yield prisma.livro.create({
            data: {
                titulo: title,
                autor: autor,
                ano_publicacao: publish_yaer,
                genero: genero
            }
        });
        response.status(201).send({
            "message": "Metodo HTTP: método creat."
        });
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log(error.code);
            response.status(409).json({
                error: {
                    message: TratamentoErros_1.ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            });
        }
    }
});
exports.creat = creat;
//********************************************************************************************* */
const researchAll = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.livro.findMany({});
        response.status(200).json(result);
        console.log(result);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log(error.code);
            response.status(409).json({
                error: {
                    message: TratamentoErros_1.ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            });
        }
    }
});
exports.researchAll = researchAll;
//********************************************************************************************* */
const researchId = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const titulo = request.params.titulo;
    try {
        const result = yield prisma.livro.findUnique({
            where: {
                titulo: titulo
            }
        });
        console.log(result);
        response.status(200).json(result);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log(error.code);
            response.status(409).json({
                error: {
                    message: TratamentoErros_1.ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            });
        }
    }
});
exports.researchId = researchId;
//********************************************************************************************* */
const update = async (request, response) => {
    const id = request.params.id;
    const { title, author, publish_year, genre } = request.body;

    // Validação básica
    if (!id || isNaN(Number(id))) {
        return response.status(400).json({ error: "Invalid ID format" });
    }

    if (!title || !author || !publish_year || !genre) {
        return response.status(400).json({ error: "Missing required fields" });
    }

    try {
        const result = await prisma.livro.update({
            where: { id: Number(id) },
            data: {
                titulo: title,
                autor: author,
                ano_publicacao: publish_year,
                genero: genre,
            },
        });

        console.log(result);
        return response.status(200).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(error.code);
            return response.status(409).json({
                error: {
                    message: TratamentoErros_1.ErrorRequest.errorRequest(error.code),
                    field: error.meta || null,
                },
            });
        }

        console.error(error); // Log para depuração
        return response.status(500).json({ error: "Internal server error" });
    }
};

exports.update = update;
//********************************************************************************************* */
const delet = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const { title, autor, publish_yaer, genero } = request.body;
    try {
        const result = yield prisma.livro.delete({
            where: {
                id: Number(id)
            }
        });
        console.log(result);
        response.status(200).json(result);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log(error.code);
            response.status(409).json({
                error: {
                    message: TratamentoErros_1.ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            });
        }
    }
});
exports.delet = delet;
//********************************************************************************************* */
