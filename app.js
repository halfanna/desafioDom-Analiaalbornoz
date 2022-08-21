
class Producto{
    constructor(articulo,cuero,color,ancho,precio){
        this.articulo = articulo.toUpperCase();
        this.cuero= cuero.toUpperCase();
        this.color=color.toUpperCase();
        this.ancho=Number(ancho);
        this.precio = Number(precio);
    }
  
  
  }
  const compraArticulos = []
  
  for (let i=0;i < 2 ;i++) {
       let articulo = prompt("Ingresa el articulo:\n CINTO LONDON  \n CINTO BELLOTA \n CINTO AGUILA \n CINTO GRECIA ").toUpperCase()
       let cuero= prompt("Ingresa el articulo:\n LISO  \n GRABADO").toUpperCase()
       let color =prompt("Ingresa el articulo:\n ROJO  \n VERDE \n AZUL \n NEGRO").toUpperCase()
       let ancho =Number(prompt("Ingresa el ancho :\n 2.5  \n 3.0"))
       let precio =Number(prompt("Ingresa el costo del producto \n CINTO LONDON = 2100  \n CINTO BELLOTA=2400 \n CINTO AGUILA = 2300\n CINTO GRECIA=1200  "))
       compraArticulos.push(new Producto(articulo,cuero,color,ancho,precio))
    
      
       for (const info of compraArticulos) {
        console.log("Informacion del articulo : " +  " Nombre : " + info.articulo + " Cuero : " + info.cuero + " Color : " +info.color + "Ancho: " + info.ancho + " Precio : " +info.precio)
       }
      
      const precioArt = compraArticulos.map(dato => dato.precio)
     
      const  articulosCarac = compraArticulos.map(dato => dato.articulo) 

      const articuloPrecio = precioArt.concat(articulosCarac)
     

      for (const info of articuloPrecio) {
        let p = document.createElement('p')
        p.innerHTML = info
       carritoCompras.append(p)
      }
   

      const totalCarrito = precioArt.reduce((art1,art2) => art1+art2,0)
       console.log("Total de compra : "+totalCarrito)
     
  }