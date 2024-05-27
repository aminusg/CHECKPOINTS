const miLista= [
    'velma',
    'exploradora',
    'jane',
    'john',
    'harry'
]
//Crear un bucle For
//imprimir cada nombre de la lista
for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
  }


//Crear un bucle shile que recorra e imprima también los nombres
let i = 0;
while (i < miLista.length) {
  console.log(miLista[i]);
  i++;
}

//Crear una función flecha que devuelva "Hola Mundo"
const saludo = () => "Hola Mundo";
console.log(saludo());