function EliminarLista() {
  const valorEliminar = prompt("Ingrese el valor que desea eliminar:"); 
  if (valorEliminar === null) return; 

  const valorNum = Number(valorEliminar);


  lista = lista.filter(item => item !== valorNum);


  const botones = document.querySelectorAll("#resultado .boton-lista");
  botones.forEach(boton => {
    if (Number(boton.textContent) === valorNum) {
      boton.remove();
    }
  });

  console.log(lista.toString());
}
{nombre: "Valentina Justiniano Grimaldos", edad: 18, correo:"valentina.justiniano.g@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 71380166"}  
{nombre: "Benjhamin Coca Galarza", edad: 18, correo:"benjhamin.coca@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 72207021"}  
{nombre: "Jorge Romero Viera", edad: 18, correo:"jorge.romero.v@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 69093433"}  
{nombre: "Sebastián Rafael Ríos Díaz", edad: 18, correo:"sebastian.rios@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 72653409"}  
{nombre: "Anahí Ortiz Pinckert", edad: 18, correo:"anahi.ortiz@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 70077947"}  
{nombre: "Jaqueline Churqui Limachi", edad: 18, correo:"jaqueline.churqui@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 63451159"}  
{nombre: "Isabela Barbery", edad: 18, correo:"isabela.barbery@ucb.edu.bo", carrera: "INGENIERÍA INDUSTRIAL", teléfono:"+591 75671210"}  
{nombre: "Vera Lucía Gomez Guzmán", edad: 18, correo:"vera.gomez@ucb.edu.bo", carrera: "INGENIERÍA EN BIOTECNOLOGÍA", teléfono:"+591 76016407"}  
