function evaluarPrecio(precioProducto) {
    if(mejorPrecio=0){
    mejorPrecio=precioProducto;
    }else if(precioProducto<mejorPrecio){         
    mejorPrecio=precioProducto;
    cantidadMejorPrecio=1;
    nombreSupermercado=prompt("Ingrese el nombre del supermercado: ")
    } else if (precioProducto=mejorPrecio){
    cantidadMejorPrecio=cantidadMejorPrecio+1;
    }else {
             console.warn("El precio ingresado NO ES el mas barato")
     }
    
}