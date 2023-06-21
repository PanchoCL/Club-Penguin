// aca intente recuperar los datos del formulario y mostrar una advertencia por cada error pero al llegar a la validacion de la edad no me saltaba la alerta y lo deje asi nomas
const nombre=document.getElementById("nombre")
const email=document.getElementById("email")
const telefono=document.getElementById("telefono")
const edad=document.getElementById("edad")
const pais=document.getElementById("pais")
const formu=document.getElementById("formu")

formu.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length<3){
        alert("-----ALERTA-----\nnombre muy corto")
    }
    if(edad<0){
        alert("-----ALERTA-----\nla edad no puede ser negativa")
    }
    alert('Formulario enviado correctamente!');
    formu.reset();
})


