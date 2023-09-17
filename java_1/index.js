console.log("content load")

// EJERICICIO

// Cálculo de IMC (Índice de Masa Corporal):
//    Pedir al usuario que ingrese su peso (en kg) y su altura (en metros).
//  Calcular el IMC utilizando la fórmula: `IMC = peso / (altura^2)`.
// Dependiendo del resultado, mostrar si está bajo de peso, en peso normal o con sobrepeso.

function calculoImc(){
    const peso = parseFloat(prompt("Ingrese su peso"))
    const altura = parseFloat(prompt("Ingrese su altura"))

    const imc = peso/(altura*altura)

    if (imc<18.5){
        alert("estas bajo de peso, tu imc es de "+ imc)
    }if(imc>=18.5 && imc<24.9){
        alert("estas en tu peso normal, tu imc es "+ imc)
    }else{
        alert("estas por encima de tu peso esperado, tu imc es "+ imc)
    }
}





// Registro de personas:
// Crear un objeto que represente a una persona, con propiedades como nombre, edad, profesión y hobbies.
//    * Crear funciones que permitan:
//    * Añadir un hobby.
//    * Cambiar la profesión.
//      	   * Celebrar un cumpleaños (incrementar la edad).
// Crear una lista de personas
// Agregar una persona a la lista 
// Eliminar una persona de la lista
// Saludar a cada persona


const persona = {
    nombre: "Juan",
    edad: 20,
    profesion: "Estudiante",
    hobbies:["correr", "cantar"],
    anadirHobby: function(hobby){       // esta funcion es para agregar un hobby a una lista que ya existe
        this.hobbies.push(hobby)
    },
    cambiarPreofesion: function(nuevaProfesion){
        this.profesion = nuevaProfesion 
    }
}

console.log("persona sin hobbie nuevo ", persona)
persona.anadirHobby("jugar al futbol")
console.log("persona con hobbie nuevo ", persona)
persona.cambiarPreofesion("doctor")
console.log("persona con profesion nueva ", persona)