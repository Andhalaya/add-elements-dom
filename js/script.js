 // Aquí tu código

 const element = document.getElementById("agregar");
 element.addEventListener("click", function(){
    const name = prompt("Escribe tu pelicula favorita:");
    const node = document.createElement("li");
    const textnode = document.createTextNode(name);
    node.appendChild(textnode)
    document.getElementById("lista").appendChild(node)
 });

 /* 
 
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

agregar.addEventListener('click', function() {
    nuevoElemento = prompt('Escribe un texto');
    if(nuevoElemento) {
        lista.innerHTML += '<li>' + nuevoElemento + '</li>)
    }
})

 */
