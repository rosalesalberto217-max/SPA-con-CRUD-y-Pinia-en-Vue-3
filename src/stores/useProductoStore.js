import { defineStore } from 'pinia'

export const useProductoStore = defineStore('productos', {

state: () => ({
productos: [

{ id:1, nombre:"Uniforme Local Jaguares", precio:1200, imagen:"jfcn1.jpg" },

{ id:2, nombre:"Uniforme Visitante Jaguares", precio:1200, imagen:"jfcv1.jpg" },

{ id:3, nombre:"Uniforme Alternativo Jaguares", precio:1200, imagen:"jfcb1.jpg" },

{ id:4, nombre:"Uniforme Blanco Jaguares", precio:1100, imagen:"jfc-b.jpg" },

{ id:5, nombre:"Uniforme Naranja Jaguares", precio:1100, imagen:"jfc-n.jpg" },

{ id:6, nombre:"Uniforme Verde Jaguares", precio:1100, imagen:"jfc-v.jpg" },

{ id:7, nombre:"Tacos Negros", precio:1800, imagen:"ta-bn.png" },

{ id:8, nombre:"Tacos Azul", precio:1800, imagen:"ta-na.png" },

{ id:9, nombre:"Tacos Verde", precio:1800, imagen:"ta-v.png" }

]
}),

actions:{

crearProducto(producto){
this.productos.push(producto)
},

actualizarProducto(id, producto){

const index=this.productos.findIndex(p=>p.id==id)

if(index!==-1){
this.productos[index]=producto
}

},

eliminarProducto(id){
this.productos=this.productos.filter(p=>p.id!=id)
}

},

getters:{

obtenerProductoPorId:(state)=>(id)=>{
return state.productos.find(p=>p.id==id)
}

}

})