// import React, { useContext } from "react"
// import  {CartContext}  from "../CartContext/CartContext"
import {collection, addDoc, serverTimestamp} from "firebase/firestore"
import {db} from "../../utils/firebaseConfig"

// const cartList = useContext(CartContext)
const clientOrder = {
    buyer: {
        name: "Alexander Contreras",
        phone: 3107882098,
        email: "alexander@gmail.com"
    },
    items: (5),
    date: serverTimestamp(),
    total: 1000,
}

const orderCollection = collection(db,"orders")
export const order = addDoc(orderCollection, clientOrder)