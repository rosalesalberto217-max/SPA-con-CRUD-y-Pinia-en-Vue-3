import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {

state: () => ({
carrito:[]
}),

actions:{

agregarAlCarrito(producto){
this.carrito.push(producto)
},

eliminarDelCarrito(id){
this.carrito=this.carrito.filter(p=>p.id!=id)
},

vaciarCarrito(){
this.carrito=[]
}

},

getters:{

totalArticulos:(state)=>state.carrito.length,

totalPrecio:(state)=>
state.carrito.reduce((total,p)=>total+p.precio,0)

}

})