export class Animal{
    #nombre
    #edad
    #img
    #comentario
    #sonido
    
    constructor(nombre,edad,img,comentario,sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentario = comentario
        this.#sonido = sonido
    }

    get nombre(){ return this.#nombre}
    get edad(){ return this.#edad}
    get img(){ return this.#img}
    get comentario(){ return this.#comentario}
    get sonido(){ return this.#sonido}

    set setNombre( newNombre) { this.#nombre =newNombre }
    set setEdad( newEdad) { this.#edad =newEdad }
    set setImg( newImg) { this.#img =newImg }
    set setComentario( newComentario) { this.#comentario =newComentario }
    set setSonido( newSonido) { this.#sonido =newSonido }

}

export class Leon extends Animal{
    
    rugir(){
        console.log(`rugiendo`)
    }

}

export class Lobo extends Animal{
    
    aullar(){
        console.log(`rugiendo`)
    }

}

export class Oso extends Animal{
    
    grunnir(){
        console.log(`rugiendo`)
    }

}

export class Serpiente extends Animal{
    
    sisear(){
        console.log(`rugiendo`)
    }

}

export class Aguila extends Animal{
    
    chillar(){
        console.log(`rugiendo`)
    }

}