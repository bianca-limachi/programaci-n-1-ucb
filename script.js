 function mostrarNombre() {
        const nombre=document.getElementById("nombre").value;
        const resultado = document.getElementById("resultado");

        if (nombre.trim()===""){
            resultado.textContent="Por favor, escribe tu nombre.";
        } else{
            resultado.textContent = "Hola, "+nombre+"👋";
        }
    }

var lista = [];
function InsertarLista(){
   //constst nombre = document.getElementById("nombres").value;
   var valorAleatorio = Math.floor(Math.random() * 10); 
    const resultado = document.getElementById("resultado");

    lista.push(valorAleatorio);
    resultado.textContent = lista.toString();
     const nuevoBoton = document.createElement("button");
  nuevoBoton.textContent = valorAleatorio;
  nuevoBoton.classList.add("boton-lista"); // Para animación y estilo

  // Oculto al principio para animación
  nuevoBoton.style.opacity = 0;
  nuevoBoton.style.transform = "translateY(-10px)";
  
  // Insertarlo al DOM
  contenedor.appendChild(nuevoBoton);

  // Activar transición después de un breve delay (forzar el reflow)
  setTimeout(() => {
    nuevoBoton.style.opacity = 1;
    nuevoBoton.style.transform = "translateY(0)";
  }, 10);
}

function EliminarElementoLista(){
    //El valor del elemento (pedir el input al usuario)
    const input=document.getElementById("input").value;
    console.log("Input del usuario: ",input)

    while (lista.includes(input)){
        //Eliminar el elemento
        console.log("El input esta incluido en la lista")

        var pos = lista.indexOf(input);
        console.log("Input en la posición: ",pos)
        lista.slice(pos,1);
        console.log("Input eliminado-----------:",input)
    }
    console.log("Lista actualizada !!!")
    console.log(lista.toString())
}



ListaObjeto = [
 {nombre: "Valentina Justiniano Grimaldos", edad: 18, correo:"valentina.justiniano.g@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 71380166"} , 
 {nombre: "Benjhamin Coca Galarza", edad: 17, correo:"benjhamin.coca@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 72207021"}  ,
 {nombre: "Jorge Romero Viera", edad: 18, correo:"jorge.romero.v@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 69093433"}  ,
 {nombre: "Sebastián Rafael Ríos Díaz", edad: 19, correo:"sebastian.rios@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 72653409"}  ,
 {nombre: "Anahí Ortiz Pinckert", edad: 18, correo:"anahi.ortiz@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 70077947"}  ,
 {nombre: "Jaqueline Churqui Limachi", edad: 18, correo:"jaqueline.churqui@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 63451159"}  ,
 {nombre: "Isabela Barbery", edad: 18, correo:"isabela.barbery@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 75671210"}  ,
 {nombre: "Vera Lucía Gomez Guzmán", edad: 18, correo:"vera.gomez@ucb.edu.bo", carrera: "INGENIERÍA EN BIOTECNOLOGÍA", teléfono:"+591 76016407"}  
]

function MostrarNombre(){
    ListaObjeto.ForEach(element => {
        console.log(2025-element.edad);
    });
}

function MostrarHabilitadosOEP(){
    ListaObjeto.forEach(elemento =>{
        if (elemento.edad >= 18){
            console.log("Hola, " + elemento.nombre + "estas habilitado para votar :)");
        }
    });
}

function Addstudiante(){
    var VarName = document.getElementById("input_name").value;
    var VarEdad = Number(document.getElementById("input_edad").value);
    var VarCorreo = document.getElementById("input_correo").value;
    var VarCarrera = document.getElementById("input_carrera").value;
    var VarPhone = document.getElementById("input_phone").value;

    var estudiante = {
        nombre: VarName,
        edad: VarEdad,
        correo: VarCorreo,
        carrera: VarCarrera,
        telefono: VarPhone,
    }

    if(estudiante.edad >= 18){
        console.log("INSERTADO CON EXITO!!!");
        ListaObjeto.push(estudiante);
    } else{
         console.log("Ahorita no joven, vuelve cuando tengas 18 años ");
    }

   console.log(ListaObjeto);
   
}

function crearTabla(datos) {
  let tabla = '<table>';
  tabla += `
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Carrera</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
      `;

  datos.forEach(estudiante => {
    tabla += `
          <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.correo}</td>
            <td>${estudiante.carrera}</td>
            <td>${estudiante.telefono}</td>
          </tr>
        `;
  });

  tabla += '</tbody></table>';
  document.getElementById("tabla-container").innerHTML = tabla;
}