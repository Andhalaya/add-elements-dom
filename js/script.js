 // Aquí tu código

 const element = document.getElementById("agregar");
 element.addEventListener("click", function(){
    const name = prompt("Escribe tu pelicula favorita:");
    const node = document.createElement("li");
    const textnode = document.createTextNode(name);
    node.appendChild(textnode)
    document.getElementById("lista").appendChild(node)
 });

