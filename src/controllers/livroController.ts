import { Request, Response } from "express"
import { Livro, livros } from '../models/livroModel'
// import {v4 as uuidv4 } from 'uuid' 
import { Prisma, PrismaClient } from "@prisma/client"
import { ErrorRequest } from "../utils/TratamentoErros"

const prisma = new PrismaClient()

//********************************************************************************************* */
export const creat = async (request: Request, response: Response) => {
    const {title, autor, publish_yaer, genero} = request.body
    try{
        const result = await prisma.livro.create({
            data: {
                titulo: title,
                autor: autor,
                ano_publicacao: publish_yaer,
                genero: genero
            }
        })

        response.status(201).send({
            "message": "Metodo HTTP: método creat."
        })
    }catch (error:any){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error:{
                    message: ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            })
        }
    }
}
//********************************************************************************************* */
export const researchAll = async (request: Request, response: Response) => {
    try{
        const result = await prisma.livro.findMany({})
        response.status(200).json(result)
        console.log(result)
    }
    catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error:{
                    message: ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            })
        }
    }
}
//********************************************************************************************* */
export const researchId = async (request: Request, response: Response) => {
    const titulo = request.params.titulo
    try{
        const result = await prisma.livro.findUnique({
            where: {
                titulo: titulo
            }
        })
        console.log(result)
        response.status(200).json(result)
    }
    catch (error:any){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error:{
                    message: ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            })
        }
    }
}
//********************************************************************************************* */
export const update = async (request: Request, response: Response) => {
    const id = request.params.id
    const {title, autor, publish_yaer, genero} = request.body
    try{
        const result = await prisma.livro.update({
            where: {
                id: Number(id)
            },
            data: {
                titulo: title,
                autor: autor,
                ano_publicacao: publish_yaer,
                genero: genero
            }
        })
        console.log(result)
        response.status(200).json(result)
    }
    catch (error:any){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error:{
                    message: ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            })
        }
    }
}
//********************************************************************************************* */
export const delet = async (request: Request, response: Response) => {
    const id = request.params.id
    const {title, autor, publish_yaer, genero} = request.body
    try{
        const result = await prisma.livro.delete({
            where: {
                id: Number(id)
            }
        })
        console.log(result)
        response.status(200).json(result)
    }

    catch (error:any){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error:{
                    message: ErrorRequest.errorRequest(error.code),
                    field: error.meta
                }
            })
        }
    }
}
