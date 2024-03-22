import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase"

const products = [
    {name: "Heladera DREAN", img: "https://i.imgur.com/sWONu99.jpeg", price: 400, category: "Heladeras", description: "Lo mejor del mercado"},
    {name: "Lavarropa WHIRPOOL", img: "https://i.imgur.com/iCwpGT3.jpeg", price: 300, category: "Lavarropas", description: "Lo mejor del mercado"},
    {name: "Aire Acondicionado BGH", img: "https://i.imgur.com/M4bUChJ.jpeg", price: 123, category: "Aires Acondicionados", description: "Lo mejor del mercado"},
    {name: "Ventilador Turbo Liliana", img: "https://i.imgur.com/18yyqrI.jpeg", price: 52, category: "Ventiladores", description: "Lo mejor del mercado"},
    {name: "Ventilador de techo Liliana", img: "https://i.imgur.com/8l53T73.jpeg", price: 80, category: "Ventiladores", description: "Lo mejor del mercado"},
    {name: "Play Station 5", img: "https://i.imgur.com/D3VyiDS.jpeg", price: 1000, category: "Juegos", description: "Lo mejor del mercado"},
    {name: "Teclado", img: "https://i.imgur.com/lkVmwK7.jpeg", price: 1200, category: "Periféricos", description: "Lo mejor del mercado"},
    {name: "Mouse", img: "https://i.imgur.com/ol1BkT3.jpeg", price: 78, category: "Periféricos", description: "Lo mejor del mercado"},
    {name: "Monitor Samsung", img: "https://i.imgur.com/RfHqtnc.jpeg", price: 100, category: "Periféricos", description: "Lo mejor del mercado"},
    {name: "Parlantes", img: "https://i.imgur.com/qUzYPsa.jpeg", price: 100, category: "Periféricos", description: "Lo mejor del mercado"},
    {name: "Play Station 4", img: "https://i.imgur.com/SEu7ots.png", price: 800, category: "Electrodoméstico", description: "Lo mejor del mercado"},
    {name: "Aire Acondicionado Ventana", img: "https://i.imgur.com/LIl5wjW.jpeg", price: 100, category: "Aires Acondicionados", description: "Lo mejor del mercado"},

]

export const seedProducts = () => {
    products.forEach(product => {
        //Agregamos el producto a nuestra db
        addDoc(collection(db, "products"), product)
    })
}
