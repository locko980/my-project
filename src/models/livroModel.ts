import {UUID} from "crypto";

interface Livro {
    id: string,
    title: string,
    autor: string,
    publish_yaer: number,
    genero: string,
}

let livros: Livro [] = []

export {Livro, livros}