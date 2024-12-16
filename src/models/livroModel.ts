import { UUID } from "crypto"

interface Livro {
    id : string
    titulo : string,
    autor : string,
    ano_publicacao : number,
    genero : string
}

let livros : Livro [] = []

export {Livro, livros}